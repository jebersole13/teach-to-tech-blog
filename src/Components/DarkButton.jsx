import toggle_light from './assets/night.png';
import toggle_dark from './assets/day.png';




// eslint-disable-next-line react/prop-types
const DarkButton =({theme, setTheme}) =>{const toggle_mode =()=>{
  theme == 'light' ?  setTheme('dark') : setTheme('light')
}
  return (
    <div>
       <img onClick={()=>{toggle_mode()}} src={theme ==='light' ? toggle_light: toggle_dark} alt="" className='toggle-icon' />
    </div>
  )
}

export default DarkButton
