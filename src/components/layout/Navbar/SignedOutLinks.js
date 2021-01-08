import React from 'react'
import {Link} from "react-router-dom"

const SignedOutLinks = () => {
    return (
        <div>
          <Link to="signIn" className="cta" >Register</Link>
        </div>
    )
}

export default SignedOutLinks
