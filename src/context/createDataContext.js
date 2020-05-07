import React, {useReducer} from 'react';

/**
 * A function that will build a default data context.
 *
 * @requires {Function(state, action)} reducer
 * @requires {Object} actions
 * @requires {Object} initialState
 */
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider
        value={{
          state,
          ...boundActions,
        }}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
