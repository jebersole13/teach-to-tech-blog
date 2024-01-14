import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Navbar from "./Components/Navbar";
import About from "./Components/pages/about"

export const ThemeContext = createContext(null);
function App() {
   const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        
    <div className='App'>
      <Navbar/> <div className="switch">   <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /></div>
    </div>
<About/>
      
     
    </ThemeContext.Provider>
  )
}

export default App

