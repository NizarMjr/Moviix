const { combineReducers } = require("redux");
const { reducerSetID, reducerGenreOption, reducerSearch, reducerRandomBackground, reducerLoading } = require("./reducers");

const reducer = combineReducers({
    setID: reducerSetID,
    setGenreOption: reducerGenreOption,
    setSearch: reducerSearch,
    getRandomBackgnrd: reducerRandomBackground,
})
export default reducer;