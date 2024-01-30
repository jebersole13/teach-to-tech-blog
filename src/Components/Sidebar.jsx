import{useState } from 'react';
import {FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { ImBlog } from "react-icons/im";
import { PiUserSquareDuotone } from "react-icons/pi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { Mic } from 'lucide-react';


// eslint-disable-next-line react/prop-types
const Sidebar =({children})=> {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarToggle =()=> setIsOpen(!isOpen);
  const menuItems = [
    {
      path:'/',
      name:"Blog",
icon:<ImBlog/>

    },
    {
      path:'/about',
      name: 'About',
icon: <PiUserSquareDuotone/>
    },
        {
      path:'/learning',
      name: 'Learning',
  icon: <MdOutlineCastForEducation/>
    },
    {path:'/podcast',
      name: 'Podcast',
   icon: <Mic/>

    }
    
  ];

  return (
 <div className='container'>
<div style={{width: isOpen ? '300px' : '70px'}} className='sidebar'>
  <div style={{marginLeft : isOpen ? '100px' : '0px'}} className='bars'>
<FaBars onClick={sidebarToggle}/>
  </div>
{
  menuItems.map((item,index) =>(
    <NavLink to={item.path} key={index} className='link' activeclassname ='active'>
      <div className='icon'>{item.icon} </div>
<div style={{display : isOpen ? 'block' : 'none'}} className='link_text'> {item.name} </div>
    </NavLink>

  ))
}

</div>


<main>{children} </main>

 </div>

  )
}

export default Sidebar
