import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberallow, setnumberallow] = usestate(false);
  const [spcharallow, setspcharallow] = useState(false);
  const [pass, setpass] = useState("");

  const passGenerator = useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallow) str+="0123456789";
    if(spcharallow) str+="!@#$%^&*()-_=+\|[]{};:/?.> ;"
    
    for(let i=1; i <= array.length; i++){
      let char= Math.floor(Math.random()*str.length +1); //math.floor round of the number and math.random generat the random decima number between 0 to 1, and str.length 
      pass=str.charAt(char); //str.charat(index) return the specific(index) char from the str 
      
    }
    setpass(pass);
  }, [length, numberallow, spcharallow, setpass])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
