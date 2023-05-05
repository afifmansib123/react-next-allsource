export const INITIAL_STATE = {
    devicename : "",
    devicemodel: "",
    devicetype : "",
    price: 0,
    quantity: 0,
    comments : [],
}

export const reducerfunction = (state, action) => {
    switch(action.type){
        case "CHANGEINPUT" : 
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "INCREASE" :
            return {
                ...state,
                quantity : state.quantity + 1
            }
        case "DECREASE" :
            return {
                ...state,
                quantity : state.quantity -1 
            }
        case "ADDTAG" :
            return {
                ...state,
                comments : [...state.comments, action.payload]
            }
        default : 
        return { state }
        }
    }