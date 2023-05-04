export const INITIAL_STATE = {
    devicename : "",
    devicemodel : "",
    deviceprice : 0,
    quantity: 0,
    tags : [],
}

export const reducerfunction = (state,action) => {
    switch(action.type){
        case "HANDLE_CHANGE":
            return{
                ...state,
                [action.payload.name]:action.payload.value
            }
        case "INCREASE":
            return {
                ...state,
                quantity: state.quantity + 1
            }
        case "DECREASE":
            return{
                ...state,
                quantity : state.quantity - 1
            }
        case "ADDTAG":
            return {
                ...state,
                tags : [...state.tags, action.payload]
            }
        default : return state
    }
}