import React from "react";
import Custombutton from "./Button";

const App = () => {
  return(
    <>
    <div>
      <Custombutton color = "green" onclickfunction={()=>alert('funck me')}>
        press me
      </Custombutton> 
    </div>

    <div>
    <Custombutton onclickfunction={()=>alert('paykhana khabo')}>dont press me</Custombutton>
    </div>
    </>
  )
}

export default App
