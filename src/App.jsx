import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {
  
  // darkmode
  const[mode,setMode]=useState("light");
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      console.log(mode);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      console.log(mode);
    }
  }



  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <News mode={mode} toggleMode={toggleMode} />
    </>
  )
}

export default App
