import { useState,useEffect } from "react";

const Myfunc = () => {

  const [users, setuser] = useState([])
  const [error, seterror] = useState(false)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
      if(res.ok){
        return res.json()
      }else{
        throw 'error getting user'
      }
    }).then((data)=>{
      setuser(data)
    }).catch((error)=>{
      seterror(error)
    })
  },[])

  return(
    <div>
      {error ? <h1>error haha</h1> : 
      <ul>
        {users.map((user)=><li key={user.id}>{user.name}</li>)}
      </ul>
      }
    </div>
  )
}

export default Myfunc
