import{useState } from 'react';
import {FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';


const Sidebar =()=> {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarToggle =()=> setIsOpen(!isOpen);
  const menuItems = [
    {
      path:'/',
      name:"Blog"
    },
    {
      path:'/about',
      name: 'About'
    },
        {
      path:'/learning',
      name: 'Learning'
    },
    {path:'/podcast',
      name: 'Podcast'

    }
    
  ];

  return (
 <div className='container'>
<div style={{width: isOpen ? '200px' : '50px'}} className='sidebar'>
  <div style={{marginLeft : isOpen ? '50px' : 'opx'}} className='bars'>
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

 </div>

  )
}

export default Sidebar
