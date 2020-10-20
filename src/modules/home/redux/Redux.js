const { createStore } = require("redux");

const defaultState = {}

const reducer = (state, action) => {
  if (Object.keys(state).length == 0)
    return defaultState;
  switch (action.type) {

  }

  return state;
}

const store = createStore(reducer, {});

export default store;