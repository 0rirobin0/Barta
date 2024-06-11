import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

function App() {
  
  // darkmode
  const[mode,setMode]=useState("light");
  // top-loding-progress-bar

  const [progress,setProgress] = useState(10);


  
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
     <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar mode={mode} toggleMode={toggleMode}/>
     
      <News mode={mode} toggleMode={toggleMode} setProgress={setProgress} />
    </>
  )
}

export default App
