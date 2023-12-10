const { createStore } = require("redux");
const { default: reducer } = require(".");

const store = createStore(reducer, {})

export default store;