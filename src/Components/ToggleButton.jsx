import logo_light from '../Components/assets/logo-dark.png';
import logo_dark from '../Components/assets/logo-light.png';
import toggle_light from '../Components/assets/night.png';
import toggle_dark from '../Components/assets/day.png';
import './ToggleButton.css';
const ToggleButton=({theme, setTheme})=>{
    const toggle_mode =()=>{
        theme == 'light' ?  setTheme('dark') : setTheme('light')
      }
      

    return(
        <div>  <div className='logo'>
        <a href="/">  <img src={theme =='light' ? logo_light: logo_dark} alt="lightlo" className='logo'  /></a></div>
              
        <img onClick={()=>{toggle_mode()}} src={theme ==='light' ? toggle_light: toggle_dark} alt="" className='toggle-icon' />
         

        </div>
    )
}