import React from 'react'

const Button = (props) => {

    const btnCss = `btn ${props.btnType} ${props.css}`
    return(
        <button className={btnCss} onClick={props.clic} type="submit">{props.children}</button>
    )
}
export default Button;
