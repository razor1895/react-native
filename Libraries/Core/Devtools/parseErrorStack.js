/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *      
 */

'use strict';

                                                           
                                                          

const parseHermesStack = require('./parseHermesStack');

                                     
                    
                                 
                          
                        
                             
     
  

function convertHermesStack(stack                   )                    {
  const frames = [];
  for (const entry of stack.entries) {
    if (entry.type !== 'FRAME') {
      continue;
    }
    const {location, functionName} = entry;
    if (location.type === 'NATIVE') {
      continue;
    }
    frames.push({
      methodName: functionName,
      file: location.sourceUrl,
      lineNumber: location.line1Based,
      column:
        location.type === 'SOURCE'
          ? location.column1Based - 1
          : location.virtualOffset0Based,
    });
  }
  return frames;
}

function parseErrorStack(e               )                    {
  if (!e || !e.stack) {
    return [];
  }

  const stacktraceParser = require('stacktrace-parser');
  const stack = Array.isArray(e.stack)
    ? e.stack
    : global.HermesInternal
    ? convertHermesStack(parseHermesStack(e.stack))
    : stacktraceParser.parse(e.stack).map(frame => ({
        ...frame,
        column: frame.column != null ? frame.column - 1 : null,
      }));

  return stack;
}

module.exports = parseErrorStack;
