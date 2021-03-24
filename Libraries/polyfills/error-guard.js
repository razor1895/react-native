/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *       strict
 * @polyfill
 */

let _inGuard = 0;

                                                             
                                            

/**
 * This is the error handler that is called when we encounter an exception
 * when loading a module. This will report any errors encountered before
 * ExceptionsManager is configured.
 */
let _globalHandler               = function onError(
  e       ,
  isFatal         ,
) {
  throw e;
};

/**
 * The particular require runtime that we are using looks for a global
 * `ErrorUtils` object and if it exists, then it requires modules with the
 * error handler specified via ErrorUtils.setGlobalHandler by calling the
 * require function with applyWithGuard. Since the require module is loaded
 * before any of the modules, this ErrorUtils must be defined (and the handler
 * set) globally before requiring anything.
 */
const ErrorUtils = {
  setGlobalHandler(fun              )       {
    _globalHandler = fun;
  },
  getGlobalHandler()               {
    return _globalHandler;
  },
  reportError(error       )       {
    _globalHandler && _globalHandler(error, false);
  },
  reportFatalError(error       )       {
    // NOTE: This has an untyped call site in Metro.
    _globalHandler && _globalHandler(error, true);
  },
  applyWithGuard                                    (
    fun                 ,
    context         ,
    args         ,
    // Unused, but some code synced from www sets it to null.
    unused_onError       ,
    // Some callers pass a name here, which we ignore.
    unused_name          ,
  )        {
    try {
      _inGuard++;
      // $FlowFixMe: TODO T48204745 (1) apply(context, null) is fine. (2) array -> rest array should work
      return fun.apply(context, args);
    } catch (e) {
      ErrorUtils.reportError(e);
    } finally {
      _inGuard--;
    }
    return null;
  },
  applyWithGuardIfNeeded                                    (
    fun                 ,
    context         ,
    args         ,
  )        {
    if (ErrorUtils.inGuard()) {
      // $FlowFixMe: TODO T48204745 (1) apply(context, null) is fine. (2) array -> rest array should work
      return fun.apply(context, args);
    } else {
      ErrorUtils.applyWithGuard(fun, context, args);
    }
    return null;
  },
  inGuard()          {
    return !!_inGuard;
  },
  guard                                    (
    fun                 ,
    name          ,
    context         ,
  )                       {
    // TODO: (moti) T48204753 Make sure this warning is never hit and remove it - types
    // should be sufficient.
    if (typeof fun !== 'function') {
      console.warn('A function must be passed to ErrorUtils.guard, got ', fun);
      return null;
    }
    const guardName = name ?? fun.name ?? '<generated guard>';
    function guarded(...args       )        {
      return ErrorUtils.applyWithGuard(
        fun,
        context ?? this,
        args,
        null,
        guardName,
      );
    }

    return guarded;
  },
};

global.ErrorUtils = ErrorUtils;

                                            
