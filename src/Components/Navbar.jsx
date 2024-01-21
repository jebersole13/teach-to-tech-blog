import './Navbar.css'
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const Navbar= () =>{

  return (
    <div className='navbar'>
<motion.ul variants={variants}>
    <li><NavLink to ='/About'>About</NavLink> </li>
      <li><NavLink to= '/'>Blog</NavLink></li>
        <li><NavLink to='/Learning' >Learning</NavLink> </li>
        <li><NavLink to='/Podcast'>Podcast</NavLink> </li>
</motion.ul>
    </div>
  )
}

export default Navbar

