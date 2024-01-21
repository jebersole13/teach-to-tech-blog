import toggle_light from './assets/night.png';
import toggle_dark from './assets/day.png';
import logo_light from './assets/logo-dark.png';
import logo_dark from './assets/logo-light.png'



import { NavLink } from "react-router-dom"

const Navbar= ({theme, setTheme})=> {const toggle_mode =()=>{
  theme == 'light' ?  setTheme('dark') : setTheme('light')
}

  return (
    
    <div className='navbar'>
      <div className='Header'>
      <a href="/">  <img src={theme =='light' ? logo_light: logo_dark} alt="lightlo" className='logo'  /></a>
      <img onClick={()=>{toggle_mode()}} src={theme ==='light' ? toggle_light: toggle_dark} alt="" className='toggle-icon' />
    </div>
<ul >
    <li><NavLink to ='/About'>About</NavLink> </li>
      <li><NavLink to= '/'>Blog</NavLink></li>
        <li><NavLink to='/Learning' >Learning</NavLink> </li>
        <li><NavLink to='/Podcast'>Podcast</NavLink> </li>
</ul>
    </div>
  )
}

export default Navbar

