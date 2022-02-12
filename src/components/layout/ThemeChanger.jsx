import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ThemeChanger() {
    const [dropTheme,setDropTheme]=useState('dark')
    const themes=[
  'dark'
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
  const changeTheme=(e)=>{
    setDropTheme(`${e.target.value}`)

    document.documentElement.setAttribute('data-theme',`${e.target.value}`)
    // if(emoji==='🌞' )
    // setEmoji('🌙')
    // else if(emoji==='🌙')
    // setEmoji('🌞')

  }


  return (
    
        <div>
            


            <select className="dropdown outline-none border-none h-8   max-h-32  mx-2 btn btn-xs  dropdown-hover w-auto " value={dropTheme} onChange={changeTheme} >
              
              {
                themes.map((theme)=>{
                  return(
                  <option key={uuidv4()} value={theme}>
                    {theme} 
                  </option> )
                })
              }
                
            </select>
        </div>
    )
    
}

export default ThemeChanger;
