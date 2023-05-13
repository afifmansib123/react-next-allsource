import React from "react";

const Custombutton = ({children, color, onclickfunction}) => {
    return(
        <button style={{backgroundColor:color}} onClick={onclickfunction}>
            {children}
        </button>
    )
}

export default Custombutton