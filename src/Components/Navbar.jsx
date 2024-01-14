import { useState } from "react"
import './Navbar.css'
function Navbar() {

  const [menuOpen, setMenuOpen]=useState(false);
  return (
   <nav>

     <div className="menu" onClick={()=> {
      setMenuOpen(!menuOpen)
     }}>
      <span></span>
      <span></span>
      <span></span>
     </div>
    <ul className={menuOpen ? "open" : ''}>
  <li><a href="/">Home</a></li>
      <li><a href="#about" >About</a > </li>
      <li><a href="#services" >Services</a ></li> 
      <li><a href="#portfolio" >Portfolio</a ></li>
       <li><a href="#contact" >Contact</a ></li>
    </ul>
   </nav>
  )
}



export default Navbar
