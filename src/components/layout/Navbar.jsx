import { BrowserRouter as Router ,Route,Link} from "react-router-dom";
import {FaGithub, FaMoon, FaSun, FaThemeco, FaThemeisle} from 'react-icons/fa'
import PropTypes  from "prop-types";
import { useEffect, useState } from "react";
import ThemeChanger from "./ThemeChanger";

function Navbar({title}) {
    const [emoji,setEmoji]=useState('🌞')
    const themes=['cupcake'
  ,'dark'
  ,'cupcake'
  ,'bumblebee'
  ,'emerald'
  ,'corporate'
  ,'synthwave'
  ,'retro'
  ,'cyberpunk'
  ,'valentine'
  ,'halloween'
  ,'garden'
  ,'forest'
  ,'aqua'
  ,'lofi'
  ,'pastel'
  ,'fantasy'
  ,'wireframe'
  ,'black'
  ,'luxury'
  ,'dracula'
  ,'cmyk']
  const changeTheme=()=>{
    document.documentElement.setAttribute('data-theme',themes[Math.floor(Math.random()*themes.length)])
    if(emoji==='🌞' )
    setEmoji('🌙')
    else if(emoji==='🌙')
    setEmoji('🌞')

  }
  useEffect(()=>{
    console.log('app test');
  },[])

  return (<nav className="navbar mb-8 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
        
                <div className="flex-none px-2 mx-2">
                    <FaGithub className="inline pr-2 text-3xl"/>
                    <Link to='/' className="text-lg font-bold align-middle">{title}</Link>
                </div>
                <div className="flex-1 px-2 mx2">
                    <div id="navelements" className="flex justify-end">
                    <ThemeChanger/>
                        <Link to='/' className="btn btn-ghost hover:bg-teal-500 border-cyan-900 rounded-btn btn-sm">Home</Link>
                        <Link to='/about' className="btn btn-ghost rounded-btn btn-sm">about</Link>
                    </div>
                </div>
        </div>
      
        
        </nav>)
}
Navbar.defaultProps={
    title:'Github Finder'
}
Navbar.propTypes={
    title: PropTypes.string
}
export default Navbar;
