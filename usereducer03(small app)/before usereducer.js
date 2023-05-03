import { useState , useRef} from "react"

export default function Form() { 

  const [device,setdevice] = useState({
    devicename : "",
    devicemodel : "",
    brand : "",
    price : "",
    tags : [],
    quantity : 0,
  })

  //this is specifically for the tags of array
  const tagref = useRef()
  const addtag = (e) => {
    e.preventDefault()
    const currenttags = tagref.current.value.split(',')
    currenttags.forEach((items)=>{setdevice((prev)=>({...prev, tags:[...prev.tags, items]}))})
  }

  const handlechange = (e) => {
    e.preventDefault()
    setdevice((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  const showresult = () => {
    alert(JSON.stringify(device))
  }

  const handleadd = (e) => {
    e.preventDefault()
    setdevice((prev)=>({...prev, quantity: prev.quantity + 1}))
  }

  const handlsub = (e) => {
    e.preventDefault()
    setdevice((prev)=>({...prev, quantity: prev.quantity - 1}))
  }

  return (

    <>

    <form style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      height: "100vh",
      width: "100%",
      background: "orange"
   }}>
    <div>
      <label>device name :</label>
      <input
        name="devicename"
        onChange={handlechange} />
      </div>
      <div>
      <label>model number</label>
      <input
        name="devicemodel"
        onChange={handlechange} />
        </div>
        <div >
      <label>price</label>
      <input
        name="price"
        onChange={handlechange} />
        </div>
        <div>
      <label>Choose Brand</label>
      <select onChange={handlechange} name="brand">
        <option value="sunmi brand">Sunmi-Th</option>
        <option value = "osha brand">Osha</option>
        <option value = "kbank brand">Kbank</option>
      </select>
      </div>
      <div>
      <label>available units</label>
      <button onClick={handlsub}>-</button>
      <small>({device.quantity})</small>
      <button onClick={handleadd}>+</button>
      </div>
      <div>
      <label>enter some tags for the device</label>
      <textarea ref={tagref}>

      </textarea><button onClick={addtag}>add tag</button>
      </div>
      <div>
      <button onClick = {showresult}>check inventory</button>
      </div>
    </form>

    

    </>
  )
}