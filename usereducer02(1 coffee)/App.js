import './App.css';
import { useState, useReducer } from 'react';
import { INITIAL_STATE } from './postReducer';
import { postReducer } from './postReducer';

function App() {

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)

  const handlefetch = () => {
    dispatch({type : "FETCH_START"})
    fetch("https://api.sampleapis.com/coffee/hot/1").then((response)=>{return response.json()})
    .then((data)=>{dispatch({type:"FETCH_SUCCESS",payload:data})})
    .catch((error)=>{dispatch({type:"FETCH_ERROR"})})
  }

  return (
    <div className="App">
      <button onClick={handlefetch}>press me</button>
      <p>{state.post?.ingredients}</p>
      <img src = {state.post?.image}/>
    </div>
  );
}

export default App;
