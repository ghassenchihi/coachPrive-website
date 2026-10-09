import {useEffect, useState} from 'react'
import { Outlet , Link} from 'react-router-dom'
function DesktopLayout() {
  return (
    <div className=''>
      <nav className='flex justify-between items-center p-4 bg-gray-200'>
        <Link to="/" className='text-lg text-blue-300 font-bold'>coachPrive</Link>
          <div className='flex justify-between bg-pink-500'>
            <Link to='/Main' className='h-6 border-solid border-2'>Main</Link>
            <Link to="/Login" className='h-6 border-solid border-2'>sign up</Link>
          </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default DesktopLayout