import toggle_light from './assets/night.png';
import toggle_dark from './assets/day.png';
import logo_light from './assets/logo-dark.png';
import logo_dark from './assets/logo-light.png'


// eslint-disable-next-line react/prop-types
const Header = ({theme, setTheme})=> {const toggle_mode =()=>{
  theme == 'light' ?  setTheme('dark') : setTheme('light')
}
  return (
    <div className='logo'>
      <a href="/">  <img src={theme =='light' ? logo_light: logo_dark} alt="lightlo" className='logo'  /></a>
      
      <img onClick={()=>{toggle_mode()}} src={theme ==='light' ? toggle_light: toggle_dark} alt="" className='toggle-icon' />
    </div>
  )
}

export default Header
