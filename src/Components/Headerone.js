import React from 'react'
import "./Header.css"

function Headerone(props) {
    return (
        <div>
             <img src={props.src} className="img1" alt="header"/>
            <p className="font">{props.name} </p>
        </div>
    )
}
export default Headerone
