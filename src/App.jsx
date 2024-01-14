import './index.css'
import Navbar from './Components/Navbar'
import About from './Components/pages/about';
import Blog from './Components/pages/blog';
import Learning from './Components/pages/learning';
import Podcast from './Components/pages/Podcast';
import Footer from './Components/Footer';
import { useState } from 'react';
const App =()=> {
const [theme, setTheme] = useState('light');

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>

      <section id='about'>
<About className={`App ${theme}`}/>
      </section>
            <section id='blog'>
<Blog className={`App ${theme}`}/>
      </section>
            <section id='learning'>
<Learning className={`App ${theme}`}/>
      </section>
            <section id='podcast'>
<Podcast className={`App ${theme}`}/>
      </section>

      <Footer className={`App ${theme}`}/>
    </div>
  )
}

export default App
