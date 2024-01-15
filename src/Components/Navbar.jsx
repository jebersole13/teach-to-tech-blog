
import './Navbar.css'
import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

// eslint-disable-next-line react/prop-types
const Navbar= () =>{
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div className='navbar' 
    animate={isOpen ? "open" : "closed"}
    variants={variants}>
 <Toggle onClick={() => setIsOpen(isOpen => !isOpen)} />
    
<ul>


    <li><a href="#about">About</a></li>
      <li><a href="#blog">Blog</a></li>
        <li><a href="#learning">Learning</a></li>
        <li><a href="#podcast">Podcast</a></li>
</ul>



   </motion.div>
  )
}

export default Navbar

