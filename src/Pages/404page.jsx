import React from 'react'
import { Link } from 'react-router'

const Errorpage = () => {
    return (
        <div>
            <h1>404 Error Page Not Found</h1>
            <Link to="/">GO BACK TO HOME PAGE</Link>
        </div>
    )
}

export default Errorpage