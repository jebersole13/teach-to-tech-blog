
import './Navbar.css'
import logo_light from './assets/logo-dark.png';
import logo_dark from './assets/logo-light.png'
import search_icon_dark from './assets/search-b.png'
import search_icon_light from './assets/search-w.png';
import toggle_light from './assets/night.png';
import toggle_dark from './assets/day.png';

// eslint-disable-next-line react/prop-types
const Navbar= ({theme, setTheme}) =>{
const toggle_mode =()=>{
  theme == 'light' ?  setTheme('dark') : setTheme('light')
}

  return (
    <div className='navbar'>

      <img src={theme =='light' ? logo_light: logo_dark} alt="lightlo" className='logo' />
<ul>

  <li>Home</li>
    <li>About</li>
      <li>Blog</li>
        <li>Learning</li>
        <li>Podcast</li>
</ul>

<div className='search-box'>
  <input type="text" placeholder='Search' />
  <img src={theme ==='light' ? search_icon_light: search_icon_dark} alt="" />
</div>

<img onClick={()=>{toggle_mode()}} src={theme ==='light' ? toggle_light: toggle_dark} alt="" className='toggle-icon' />
    </div>
  )
}

export default Navbar

