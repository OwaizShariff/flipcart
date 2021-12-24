import React from 'react'
import "./Header.css"

function Contentone(props) {
    return (
        <div>
             <img src={props.src} className='content'/>
            <h6 className="contentname">{props.name}</h6>
        </div>
    )
}

export default Contentone
