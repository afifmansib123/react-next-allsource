import './App.css';
import { useState, useReducer } from 'react';

const App = () =>{

  const [products,setproducts] = useState({
    productname : "",
    brand : "",
    model : "",
    year : 0,
    quantity : 0,
})

  const handleSubmit = () => {
    alert(JSON.stringify(products))
  }

  const handlechange = (e) => {
    setproducts((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  const handleAdd = (e) => {
    e.preventDefault()
    setproducts((prev)=>({...prev, quantity:prev.quantity+1}))
  }

  const handleSub = (e) => {
    e.preventDefault()
    setproducts((prev)=>({...prev,quantity:prev.quantity-1}))
  }

  return(
  <div>

    <form>

    <div className='product'>
    <label>productname</label>
    <input
    name = 'productname' onChange={handlechange}
    />
    </div>

    <div className='product'>
    <label>brand</label>
    <input
    name = 'brand' onChange={handlechange}
    />
    </div>

    <div className='product'>
    <label>model</label>
    <input
    name = 'model' onChange={handlechange}
    />
    </div>

    <div className='product'>
    <label>year</label>
    <input
    name = 'year' onChange={handlechange}
    />
    </div>

    <div className='product'>
    <button onClick={handleSub}>-</button>
    <span>({products.quantity})</span>
    <button onClick={handleAdd}>+</button>
    </div>

    </form>
    
    <button onClick={handleSubmit}>hi</button>
  </div>)
}

export default App;
