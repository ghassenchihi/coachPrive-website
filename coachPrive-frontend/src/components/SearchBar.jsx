import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
function SearchBar() {
    const {Search,setSearch} = useContext(AppContext);
  return (
    <div className='bg-violet-600 flex item-center align-center justify-center h-30'>
    <input value={Search} onChange={(e) => {setSearch(e.target.value)}} 
    className='border-solid border-2 h-10' placeholder="Search..." />
    <button onClick={() => {}} className=' p-5 bg-blue-500 text-white border-1 border-solid h-10'>Search</button>
    </div>
  )
}

export default SearchBar