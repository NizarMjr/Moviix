import { Types } from "./Types"

export const setID = (payload) => {
    return {
        type: Types.ID,
        payload: payload,
    }
}
export const setGenreOption = (payload) => {
    return {
        type: Types.GENRE_OPTION,
        payload,
    }
}
export const setSearch = (payload) => {
    return {
        type: Types.SEARCH,
        payload: payload,
    }
}
export const getRandomBackgrnd = () => {
    return {
        type: Types.GET_RANDOM_BACKGRND,
    }
}
