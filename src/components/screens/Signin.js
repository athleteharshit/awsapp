import React from 'react'
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <div className="mycard">
            <div className="card auth-card inpur-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
                <button className="btn waves-effect waves-light #64b5f6 blue li">Sign in</button>
                <h5><Link exact to="/signup">Don't have an account ?</Link></h5>
            </div>
        </div>
    )
}

export default Signin