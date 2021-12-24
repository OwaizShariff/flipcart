import React from 'react'
import "./Header.css"

function Contenttwo(props) {
    return (
        <div>
           <img src={props.src} className='content'/>
             <h6>{props.name}</h6> 
        </div>
    )
}

export default Contenttwo;
