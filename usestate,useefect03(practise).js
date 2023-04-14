import { useState,useEffect } from "react";

const Myapp = () => {

  const [coffee, coffevalue] = useState([])
  const [error,seterror] = useState(false)

  const fetchAPI = () => {
    fetch("https://api.sampleapis.com/coffee/hot").then((coffedata)=>{return coffedata.json()})
    .then((data)=>{
      coffevalue(data)
      seterror(false)
    })
    .catch((err)=>{
      seterror(true)
    })
  }
  return(
    <button onClick={fetchAPI}>press me
    {coffee.map((user)=><li key={user.id}>{user.title}</li>)}
    </button>
  )
}