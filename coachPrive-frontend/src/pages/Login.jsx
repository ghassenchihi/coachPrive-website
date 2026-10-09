import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div>Login
        <Link className='text-blue-500' to={'/Registration'}> registration</Link>
    </div>

  )
}

export default Login