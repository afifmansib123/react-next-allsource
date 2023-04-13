import { useState,useEffect } from "react";

const Myfunc = () => {

  const [loading,setloading] = useState(false)
  const [post, setpost] = useState([])
  const [error, seterror] = useState(false)

  const handlefetch = () => {
    setloading(false)
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{return res.json()})
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
      {loading?"wait...":""}
      <ul>
        {post.map((user)=><li key={user.id}>{user.title}</li>)}
      </ul>
      press me
    </button>
  )
}

export default Myfunc
