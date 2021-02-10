import React from 'react'
import {ReactComponent as Illustration} from '../../img/404.svg';


import "./error.css"

const NotFound = () => {
    return (
        <div className="error-container">
            <Illustration classname="illustration" />
        </div>
    )
}

export default NotFound
