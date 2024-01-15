import './index.css'
import Navbar from './Components/Navbar'
import About from './Components/pages/about';
import Blog from './Components/pages/blog';
import Learning from './Components/pages/learning';
import Podcast from './Components/pages/Podcast';
import Footer from './Components/Footer';
import logo_light from '.Components/assets/logo-dark.png';
import logo_dark from '.Components/assets/logo-light.png'

import toggle_light from '.Components/assets/night.png';
import toggle_dark from '.Component/assets/day.png';
import { useEffect, useState } from 'react';
const App =()=> {
      const toggle_mode =()=>{
            theme == 'light' ?  setTheme('dark') : setTheme('light')
          }
          

     const current_theme = localStorage.getItem( 'current_theme')

      
const [theme, setTheme] = useState( current_theme ? current_theme : 'light');

useEffect(()=> {
      localStorage.setItem('current_theme', theme);
},[theme])
  return (
    <div className={`App ${theme}`}>
          <div className='logo'>
<a href="/">  <img src={theme =='light' ? logo_light: logo_dark} alt="lightlo" className='logo'  /></a></div>
      
<img onClick={()=>{toggle_mode()}} src={theme ==='light' ? toggle_light: toggle_dark} alt="" className='toggle-icon' />
 
      <Navbar theme={theme} setTheme={setTheme}/>

      <section id='about'>
<About className={`App ${theme}`}/>
      </section>
            <section id='blog'>
<Blog className={`App ${theme}`}/>
      </section>
            <section id='learning'>
<Learning 
 className={`App ${theme}`}/>
      </section>
            <section id='podcast'>
<Podcast className={`App ${theme}`}/>
      </section>

      <Footer className={`App ${theme}`}/>
    </div>
  )
}

export default App
