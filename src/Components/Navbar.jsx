import './Navbar.css'
import { NavLink } from "react-router-dom"
const Navbar= () =>{

  return (
    <div className='navbar'>
<ul>
    <li><NavLink to ='/About'>About</NavLink> </li>
      <li><NavLink to= '/'>Blog</NavLink></li>
        <li><NavLink to='/Learning' >Learning</NavLink> </li>
        <li><NavLink to='/Podcast'>Podcast</NavLink> </li>
</ul>
    </div>
  )
}

export default Navbar

