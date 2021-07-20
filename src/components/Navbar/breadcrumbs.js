import React from 'react'
import "./style.css"
const Breadcrumbs = (props) => {
    return (
        <div>
            <p>You have chosen so far</p>
            <div className="breadcrumbs">
                Home{props.path}
            </div>
        </div>
    )
}

export default Breadcrumbs;
