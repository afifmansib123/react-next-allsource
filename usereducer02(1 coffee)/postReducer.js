export const INITIAL_STATE = {
    post : {},
    loading : false,
    error : false,
}

export const postReducer = (state,action) => {

    switch (action.type) {
        case "FETCH_START":
            return {
                post: {},
                loading: true,
                error: false,
            }
        case "FETCH_SUCCESS":
            return {
                post: action.payload,
                loading: true,
                error: false,
            }
        case "FETCH_ERROR":
            return {
                post: {},
                loading: false,
                error: true,
            }
        default :
            return state
    }

}