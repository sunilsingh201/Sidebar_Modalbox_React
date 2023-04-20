import React from 'react'
import {FaBars} from 'react-icons/fa'
import {useGlobalContext } from './Context'
const Home = () => {
    const {Modelopen,Sideopen} = useGlobalContext()
    
  return (
    <main>
        <button className='sidebar-toggle' onClick={Sideopen}>
            <FaBars/>
        </button>
        <button className='btn' onClick={Modelopen}>Show Modal</button>
    </main>
  )
}

export default Home