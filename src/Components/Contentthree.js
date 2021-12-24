import React from 'react'

function Contentthree(props) {
    return (
        <div>
             <img src={props.src} className='content' alt=""/>
             <h6 className='twoname'>{props.name}</h6>
        </div>
    )
}

export default Contentthree
