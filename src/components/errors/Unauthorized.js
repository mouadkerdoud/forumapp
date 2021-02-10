import React from 'react'
import {ReactComponent as Illustration} from '../../img/401.svg';


import "./error.css"

const Unauthorized = () => {
    return (
        <div className="error-container">
            <Illustration classname="illustration" />
        </div>
    )
}

export default Unauthorized
