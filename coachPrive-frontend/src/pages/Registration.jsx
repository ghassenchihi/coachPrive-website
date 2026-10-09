import React from 'react'
import {Link} from 'react-router-dom'
function Registration() {
  return (
    <div>Registration
        <Link className='text-blue-500' to={'/Login'}> login</Link>
    </div>
  )
}

export default Registration