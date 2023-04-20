import React from 'react'
import {links,social} from './Data' 
import {FaTimes} from 'react-icons/fa'
import logo from "./logo.svg"
import { useGlobalContext } from './Context'
const Sidenav = () => {
    const {issideopen,Sideclose} = useGlobalContext();
  return (
    <aside className={`${issideopen?'sidebar show-sidebar':'sidebar'}`}>
        <div className='sidebar-header'>
            <img src={logo} className='logo' alt="logo"/>
            <button className='close-btn' onClick={Sideclose}>
                <FaTimes/>
            </button>
        </div>
        <ul className='links'>
            {links.map((link)=>{
                const {id,url,text,icon} = link;
                return(
                    <li key={id}>
                        <a herf={url}>{icon} {text}</a>
                    </li>
                )
            })
            }
        </ul>
        <ul className='social-icons'>
            {social.map((link)=>{
                const {id,url,icon} = link;
                return(
                    <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                )
            })}
        </ul>
    </aside>
  )
}

export default Sidenav