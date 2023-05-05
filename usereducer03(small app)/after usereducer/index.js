import { INITIAL_STATE } from "./filereducer"
import { reducerfunction } from "./filereducer"
import { useReducer, useRef } from "react"

export default function Myapp() {

    const [state, dispatch] = useReducer(reducerfunction, INITIAL_STATE)

    const tagref = useRef()


    const checkdata = (e) => {
        e.preventDefault()
        alert(JSON.stringify(state))
    }

    const handletag = (e) => {
        e.preventDefault()
        const mytags = tagref.current.value.split(',')
        mytags.forEach((tag) => {
            dispatch({
                type: "ADDTAG",
                payload: tag
            })
        })
    }


    const funcadd = (e) => {
        e.preventDefault()
        dispatch({
            type: "INCREASE",
        })
    }

    const funcsub = (e) => {
        e.preventDefault()
        dispatch({
            type: "DECREASE",
        })
    }

    const handlechange = (e) => {
        dispatch({
            type: "CHANGEINPUT",
            payload: { name: e.target.name, value: e.target.value }
        })
    }

    return (
        <div style={{
            display: "flex",
            background: "orange",
            height: "100vh",
            width: "100%"
        }}>
            <div>
                <label>put the device name :</label>
                <input
                    name="devicename"
                    onChange={handlechange}
                />
            </div>
            <div>
                <label>put the device name :</label>
                <input
                    name="devicemodel"
                    onChange={handlechange}
                />
            </div>

            <div>
                <select name="devicetype" onChange={handlechange}>
                    <option value="mini">MINI</option>
                    <option value="micro">MICRO</option>
                    <option value="regular">REGULAR</option>
                    <option value="Big">BIG</option>
                </select>
            </div>

            <div>
                <label>put the device price :</label>
                <input
                    name="price"
                    onChange={handlechange}
                />
            </div>
            <div>
                <small>
                    <button onClick={funcsub}>-</button>
                    ({state.quantity})
                    <button onClick={funcadd}>+</button>
                </small>
            </div>
            <div>
                <textarea ref={tagref} placeholder="please seperate comments with commas"></textarea><button onClick={handletag}>add special comments</button>
            </div>
            <div><button onClick={checkdata}>check inventory</button></div>
        </div>
    )
}