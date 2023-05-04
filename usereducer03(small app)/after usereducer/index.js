import { useReducer , useRef} from "react"
import { INITIAL_STATE } from "./filereducer"
import { reducerfunction } from "./filereducer"


export default function Form () {

    const tagref = useRef()
    const handleTags = (e) => {
        e.preventDefault()
        const mytags = tagref.current.value.split(',')
        mytags.forEach((tag)=>{dispatch({
            type:"ADDTAG",
            payload:tag,
        }
    )})
    }

    const[state,dispatch] = useReducer(reducerfunction,INITIAL_STATE)

    const handlechange = (e) => {
        e.preventDefault()
        dispatch({
            type : "HANDLE_CHANGE",
            payload : {name:e.target.name, value:e.target.value}
        })
    }

    const handlesub = (e) => {
        e.preventDefault()
        dispatch({
            type : "DECREASE"
        })
    }

    const handleadd = (e) => {
        e.preventDefault()
        dispatch({
            type : "INCREASE"
        })
    }

    const showinventory = (e) => {
        e.preventDefault()
        alert(JSON.stringify(state))
    }

    return (
        <div style = {{
            display : "flex",
            background : "orange",
            height : "100vh",
            width : "100%",
        }}>
            
            <div classname = "device details">
            <label>input name</label>
                <input 
                name = "devicename"
                onChange={handlechange}
                />
            <label>input model</label>
                <input 
                name = "devicemodel"
                onChange={handlechange}
                />
            <label>input price</label>
                <input 
                name = "deviceprice"
                onChange={handlechange}
                />
            </div>
            
            <div>
            <button onClick={handlesub}>-</button>
            <div><small>({state.quantity})</small></div>
            <button onClick={handleadd}>+</button>
            </div>

            <div className="tags">
                <textarea ref={tagref}></textarea>
                <button onClick={handleTags}>add tags</button>
            </div>
            <div classname="inventory check">
                <button onClick={showinventory}>Check Item</button>
            </div>
        </div>
    )
}