/*the difference between using a function 
as inside button and using useeffect can be 
seen as useeffect suddenly fetches the data
and displays them. it is used as a replacement
of the handlefetch function */

import { useState,useEffect } from "react";

const Myapp = () => {

  const[coffee, setcoffee] = useState([])
  const[error, seterror] = useState(false)

  useEffect(()=>{
    fetch("https://api.sampleapis.com/coffee/hot").then((res)=>{return res.json()})
    .then((data)=>{
      setcoffee(data)
      seterror(false)
    })
    .catch((error)=>{
      seterror(true)
    })
  }
  )

  return(
    <p>
      {coffee.map((allcoffee)=><li>{allcoffee.ingredients}</li>)}
    </p>
  )
  }


export default Myapp
///////////////////////////////////for 1 coffee//////////////////////////////////////////////
<div>{wines.filter((data, index) => index === 0).map((data) => <p>{data.location}</p>)}</div>
