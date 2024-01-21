import './index.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import About from './Components/pages/about';
import Blog from './Components/pages/blog';
import Learning from './Components/pages/learning';
import Podcast from './Components/pages/podcast';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
const App =()=> {

     const current_theme = localStorage.getItem( 'current_theme')

      
const [theme, setTheme] = useState( current_theme ? current_theme : 'light');

useEffect(()=> {
      localStorage.setItem('current_theme', theme);
},[theme])
  return (
    <div className={`App ${theme}`}>
      
      <Router><Navbar />
<Header theme={theme} setTheme={setTheme}/>
  <Routes>
     <Route path="/" element={<Blog className={`App ${theme}`}/>}/>

     <Route path ='/About'element={<About className={`App ${theme}`}/>}/>

     
<Route path ='/Learning' element={<Learning 
 className={`App ${theme}`}/>}/>
<Route path = '/Podcast' element ={<Podcast className={`App ${theme}`}/>}     />


     
</Routes>
      <Footer className={`App ${theme}`}/>
      </Router>
    </div>
  )
}

export default App
