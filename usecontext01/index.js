import { postreducer } from "./reducerfile"
import { INITIAL_STATE } from "./reducerfile"
import { useReducer, useRef } from "react"
import { useContext } from "react"
import themeprovider from "./Themeprovider"



export default function App(){

    const theme = useContext(themeprovider)

    const [state,dispatch] = useReducer(postreducer,INITIAL_STATE)
    const tagref = useRef()

    const addtag = (e) => {
        e.preventDefault()
        const mytags = tagref.current.value.split(',')
        mytags.forEach((item)=>{
            dispatch({
                type : "ADDTAG",
                payload : item,
        })
        })
    }

    const handlechange = (e) => {
        dispatch({
            type : "ONCHANGE",
            payload : {name : e.target.name, value : e.target.value}
        })
    }

    const showfunc = (e) => {
        e.preventDefault()
        alert(JSON.stringify(state))
    }

    const additionfunc = (e) => {
        e.preventDefault()
        dispatch({
            type : "ADDITION"
        })
    }


    const subtractionfunc = (e) => {
        e.preventDefault()
        dispatch({
            type : "SUBTRACTION"
        })
    }

    return(
        <div style = {{
            color : theme.primaryColor
        }}>
            <label>input device name :</label>
            <input name = "devicename" onChange={handlechange}/>

            <label>input device model :</label>
            <input name = "devicemodel" onChange={handlechange}/>

            <label>whats the price :</label>
            <input name = "price" onChange={handlechange}/>

            <button onClick={subtractionfunc}>-</button>
            <small>{state.quantity}</small>
            <button onClick={additionfunc}>+</button>

            <textarea ref = {tagref}></textarea>
            <button onClick={addtag}>ADD TAGS</button>

            <button onClick={showfunc}>press me</button>
        </div>
    )
}