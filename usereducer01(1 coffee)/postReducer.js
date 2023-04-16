export const INITIAL_STATE = {
    post : {},
    error : false,
}

export const postReducer = (state, action) => {
    switch(action.type){
        case "FETCH_START":
            return{
                post:{},
                error:false,
            }
        case "FETCH_SUCCESS":
            return{
                post:action.payload,
                error:false,
            }
        case "FETCH_ERROR":
            return{
                post:{},
                error:true,
            }
        default:
            return state
    }
}