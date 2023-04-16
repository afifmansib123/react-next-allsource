import {useReducer,useState,useEffect } from "react";
import { INITIAL_STATE, postReducer } from "./postReducer";

const Myapp = () => {

  const[state,dispatch]=useReducer(postReducer,INITIAL_STATE)

  const handlefetch = () =>{
    dispatch({type:"FETCH_START"})
    fetch("https://api.sampleapis.com/coffee/hot/1").then((res)=>{return res.json()})
    .then((data)=>{
     dispatch({type:"FETCH_SUCCESS",payload:data})
    })
    .catch((error)=>{
     dispatch({type:"FETCH_ERROR"})
    })
  }
  return(
    <div>
     <button onClick={handlefetch}>
      press me
    </button>
    <p>{state.post?.ingredients}</p>
    <p>{state.post?.description}</p>
    </div>
  )

}

export default Myapp