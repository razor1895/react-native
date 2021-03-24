/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *       strict-local
 */

'use strict';

const React = require('react');

/**
 * Renders static content efficiently by allowing React to short-circuit the
 * reconciliation process. This component should be used when you know that a
 * subtree of components will never need to be updated.
 *
 *   const someValue = ...; // We know for certain this value will never change.
 *   return (
 *     <StaticContainer>
 *       <MyComponent value={someValue} />
 *     </StaticContainer>
 *   );
 *
 * Typically, you will not need to use this component and should opt for normal
 * React reconciliation.
 */

                         
     
                                                 
     
                          
     
                                                             
     
                       
    
class StaticContainer extends React.Component        {
  shouldComponentUpdate(nextProps       )          {
    return !!nextProps.shouldUpdate;
  }

  render()             {
    return this.props.children;
  }
}

module.exports = StaticContainer;
