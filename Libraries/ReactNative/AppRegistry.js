/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 * @format
 */

'use strict';

const BatchedBridge = require('../BatchedBridge/BatchedBridge');
const BugReporting = require('../BugReporting/BugReporting');
const ReactNative = require('../Renderer/shims/ReactNative');
const SceneTracker = require('../Utilities/SceneTracker');

const infoLog = require('../Utilities/infoLog');
const invariant = require('invariant');
const renderApplication = require('./renderApplication');
const createPerformanceLogger = require('../Utilities/createPerformanceLogger');
                                                                             

import NativeHeadlessJsTaskSupport from './NativeHeadlessJsTaskSupport';
import HeadlessJsTaskError from './HeadlessJsTaskError';

                                             
                                      
                                
                                              

                                                               
                                                    
                               
                                              
                              
                         
                 
                                
                 
                    
     
  
                        
                                
                
     
  
                                                          
                        
                          
                       
     
  
                                                                     

const runnables            = {};
let runCount = 1;
const sections            = {};
const taskProviders                            = new Map();
const taskCancelProviders                                  = new Map();
let componentProviderInstrumentationHook                                       = (
  component                   ,
) => component();

let wrapperComponentProvider                           ;
let showArchitectureIndicator = false;

/**
 * `AppRegistry` is the JavaScript entry point to running all React Native apps.
 *
 * See https://reactnative.dev/docs/appregistry.html
 */
const AppRegistry = {
  setWrapperComponentProvider(provider                          ) {
    wrapperComponentProvider = provider;
  },

  enableArchitectureIndicator(enabled         )       {
    showArchitectureIndicator = enabled;
  },

  registerConfig(config                  )       {
    config.forEach(appConfig => {
      if (appConfig.run) {
        AppRegistry.registerRunnable(appConfig.appKey, appConfig.run);
      } else {
        invariant(
          appConfig.component != null,
          'AppRegistry.registerConfig(...): Every config is expected to set ' +
            'either `run` or `component`, but `%s` has neither.',
          appConfig.appKey,
        );
        AppRegistry.registerComponent(
          appConfig.appKey,
          appConfig.component,
          appConfig.section,
        );
      }
    });
  },

  /**
   * Registers an app's root component.
   *
   * See https://reactnative.dev/docs/appregistry.html#registercomponent
   */
  registerComponent(
    appKey        ,
    componentProvider                   ,
    section          ,
  )         {
    let scopedPerformanceLogger = createPerformanceLogger();
    runnables[appKey] = {
      componentProvider,
      run: appParameters => {
        renderApplication(
          componentProviderInstrumentationHook(
            componentProvider,
            scopedPerformanceLogger,
          ),
          appParameters.initialProps,
          appParameters.rootTag,
          wrapperComponentProvider && wrapperComponentProvider(appParameters),
          appParameters.fabric,
          showArchitectureIndicator,
          scopedPerformanceLogger,
          appKey === 'LogBox',
        );
      },
    };
    if (section) {
      sections[appKey] = runnables[appKey];
    }
    return appKey;
  },

  registerRunnable(appKey        , run          )         {
    runnables[appKey] = {run};
    return appKey;
  },

  registerSection(appKey        , component                   )       {
    AppRegistry.registerComponent(appKey, component, true);
  },

  getAppKeys()                {
    return Object.keys(runnables);
  },

  getSectionKeys()                {
    return Object.keys(sections);
  },

  getSections()            {
    return {
      ...sections,
    };
  },

  getRunnable(appKey        )            {
    return runnables[appKey];
  },

  getRegistry()           {
    return {
      sections: AppRegistry.getSectionKeys(),
      runnables: {...runnables},
    };
  },

  setComponentProviderInstrumentationHook(
    hook                                      ,
  ) {
    componentProviderInstrumentationHook = hook;
  },

  /**
   * Loads the JavaScript bundle and runs the app.
   *
   * See https://reactnative.dev/docs/appregistry.html#runapplication
   */
  runApplication(appKey        , appParameters     )       {
    if (appKey !== 'LogBox') {
      const msg =
        'Running "' + appKey + '" with ' + JSON.stringify(appParameters);
      infoLog(msg);
      BugReporting.addSource(
        'AppRegistry.runApplication' + runCount++,
        () => msg,
      );
    }
    invariant(
      runnables[appKey] && runnables[appKey].run,
      `"${appKey}" has not been registered. This can happen if:\n` +
        '* Metro (the local dev server) is run from the wrong folder. ' +
        'Check if Metro is running, stop it and restart it in the current project.\n' +
        "* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.",
    );

    SceneTracker.setActiveScene({name: appKey});
    runnables[appKey].run(appParameters);
  },

  /**
   * Stops an application when a view should be destroyed.
   *
   * See https://reactnative.dev/docs/appregistry.html#unmountapplicationcomponentatroottag
   */
  unmountApplicationComponentAtRootTag(rootTag        )       {
    ReactNative.unmountComponentAtNodeAndRemoveContainer(rootTag);
  },

  /**
   * Register a headless task. A headless task is a bit of code that runs without a UI.
   *
   * See https://reactnative.dev/docs/appregistry.html#registerheadlesstask
   */
  registerHeadlessTask(taskKey        , taskProvider              )       {
    this.registerCancellableHeadlessTask(taskKey, taskProvider, () => () => {
      /* Cancel is no-op */
    });
  },

  /**
   * Register a cancellable headless task. A headless task is a bit of code that runs without a UI.
   *
   * See https://reactnative.dev/docs/appregistry.html#registercancellableheadlesstask
   */
  registerCancellableHeadlessTask(
    taskKey        ,
    taskProvider              ,
    taskCancelProvider                    ,
  )       {
    if (taskProviders.has(taskKey)) {
      console.warn(
        `registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '${taskKey}'`,
      );
    }
    taskProviders.set(taskKey, taskProvider);
    taskCancelProviders.set(taskKey, taskCancelProvider);
  },

  /**
   * Only called from native code. Starts a headless task.
   *
   * See https://reactnative.dev/docs/appregistry.html#startheadlesstask
   */
  startHeadlessTask(taskId        , taskKey        , data     )       {
    const taskProvider = taskProviders.get(taskKey);
    if (!taskProvider) {
      console.warn(`No task registered for key ${taskKey}`);
      if (NativeHeadlessJsTaskSupport) {
        NativeHeadlessJsTaskSupport.notifyTaskFinished(taskId);
      }
      return;
    }
    taskProvider()(data)
      .then(() => {
        if (NativeHeadlessJsTaskSupport) {
          NativeHeadlessJsTaskSupport.notifyTaskFinished(taskId);
        }
      })
      .catch(reason => {
        console.error(reason);

        if (
          NativeHeadlessJsTaskSupport &&
          reason instanceof HeadlessJsTaskError
        ) {
          NativeHeadlessJsTaskSupport.notifyTaskRetry(taskId).then(
            retryPosted => {
              if (!retryPosted) {
                NativeHeadlessJsTaskSupport.notifyTaskFinished(taskId);
              }
            },
          );
        }
      });
  },

  /**
   * Only called from native code. Cancels a headless task.
   *
   * See https://reactnative.dev/docs/appregistry.html#cancelheadlesstask
   */
  cancelHeadlessTask(taskId        , taskKey        )       {
    const taskCancelProvider = taskCancelProviders.get(taskKey);
    if (!taskCancelProvider) {
      throw new Error(`No task canceller registered for key '${taskKey}'`);
    }
    taskCancelProvider()();
  },
};

BatchedBridge.registerCallableModule('AppRegistry', AppRegistry);

if (__DEV__) {
  const LogBoxInspector = require('../LogBox/LogBoxInspectorContainer').default;
  AppRegistry.registerComponent('LogBox', () => LogBoxInspector);
} else {
  AppRegistry.registerComponent(
    'LogBox',
    () =>
      function NoOp() {
        return null;
      },
  );
}

module.exports = AppRegistry;
