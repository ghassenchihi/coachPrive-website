import React from 'react'
import {useState , useEffect } from 'react'
import MainCategorie from '../components/MainCategorie'
import Advice from '../components/Advice'
import SearchBar from '../components/SearchBar'
import { useContext } from 'react'
import { AppContext } from '../App'
function Home() {
  const {Data,setData} = useContext(AppContext)
  console.log(Data)
  return (
    <div className='border-solid border-2'>
      <Advice/>
      <MainCategorie/>
      <SearchBar/>
    </div>
  )
}

export default Home