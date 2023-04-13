import { useState,useEffect } from "react";

const Myfunc = () => {

  const [loading,setloading] = useState(false)
  const [post, setpost] = useState([])
  const [error, seterror] = useState(false)

  const handlefetch = () => {
    setloading(true)
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{return res.json()})
    .then((data)=>{
      setpost(data)
      setloading(false)
    })
    .catch((err)=>{
      seterror(true)
      setloading(false)
    })
  }
  return(
    <button onClick={handlefetch}>
      press me
      {loading?"wait...":""}
      <p>{post?.title}</p>
    </button>
  )
}

export default Myfunc
