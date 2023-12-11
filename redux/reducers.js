const { Types } = require("./Types");

const ID = '';
const option = '';
const search = '';
const randomBckg = ['6', '2546', '278', '12445', '10753',
    '58', '158', '99', '101', '105', '106', '107'
    , '108', '109', '110', '111', '112', '113', '115', '67', '69', '147',
    '901362', '1075794', '1046032', '502356', '1022796', '976573', '569094', '893723']

const random = randomBckg[Math.floor(Math.random() * randomBckg.length)];


export const reducerRandomBackground = (state = random, { type }) => {
    switch (type) {
        case type.GENRE_OPTION: {
            return state;
        }
        default: return state;
    }
}
export const reducerSetID = (state = ID, { type, payload }) => {
    switch (type) {
        case Types.ID: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
export const reducerGenreOption = (state = option, { type, payload }) => {
    switch (type) {
        case Types.GENRE_OPTION: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
export const reducerSearch = (state = search, { type, payload }) => {
    switch (type) {
        case Types.SEARCH: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
