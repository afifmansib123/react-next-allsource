import { useState, useRef } from "react";

const App = () => {

  //defining the object

  const[products, setproducts] = useState({
    productanme : "",
    brand : "",
    catagory : "",
    price : 0,
    quantity : 0,
    tags : [],
})

  //writing the functions

  //to change the values of different inputs
  const handleChange = (e) => {
    e.preventDefault()
    setproducts((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  //function to submit
  const handleSubmit = () => {
    alert(JSON.stringify(products))
  }


  //function to update state after pressing +
  const handleAdd = (e) => {
    e.preventDefault()
    setproducts((prev)=>({...prev, quantity: prev.quantity + 1}))
  }

  //function to update state after pressing -
  const handleSub = (e) => {
    e.preventDefault()
    setproducts((prev)=>({...prev,quantity : prev.quantity -1}))
  }

  //this is how we handle arrays, tags specifically in here
  const tagref = useRef()
  const handleTag = () => {
    const tags = tagref.current.value.split(",")
    tags.forEach((tag)=>{setproducts((prev)=>({...prev, tags: [...prev.tags, tag]}))})
  }

  return(
    <div>
      <form> 


        <label>input the product name</label>
        <input
        type = "text"
        name = "productname"
        onChange={handleChange}
        /><br/>

        <label>input the brand brand</label>
        <input
        type = "text"
        name = "brand"
        onChange={handleChange}
        /><br/>

        <label>input the product catagory</label>
        <input
        type = "text"
        name = "catagory"
        onChange={handleChange}
        /><br/>

        <label>input the product price</label>
        <input
        type = "number"
        name = "price"
        onChange={handleChange}
        /><br/>

        <div>Product Quantity : <button onClick={handleSub}>-</button>
        <span>({products.quantity})</span><button onClick = {handleAdd}>+</button>
        </div>

        <textarea 
        ref={tagref}
        ></textarea>
        <button type="button" onClick={handleTag}>
          Add Tags
        </button>
      
        <button onClick={handleSubmit}>
        Order  
        </button>


      </form>
      <div>
      </div>
    </div>
  )

}

export default App