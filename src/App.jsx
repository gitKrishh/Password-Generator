import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberallow, setnumberallow] = useState(false);
  const [spcharallow, setspcharallow] = useState(false);
  const [pass, setpass] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallow) str += "0123456789";
    if (spcharallow) str += "!@#$%^&*()-_=+\|[]{};:/?.> ;"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); //math.floor round of the number and math.random generat the random decima number between 0 to 1, and str.length 
      pass = str.charAt(char); //str.charat(index) return the specific(index) char from the str 

    }
    setpass(pass);
  }, [length, numberallow, spcharallow, setpass])

  return (
    <>
      <div className='mainbox'><h1 className='text-4xl text-center text-white'><u>Password Generator</u></h1>
        <div id="passbox">
          <div id="inputbox">
            <input
              type="text"
              value={pass}
              placeholder='Password'
              readOnly />

          </div>
          <button className='copybutton'>copy</button>
        </div>

        <div className='bottompannel'>
          <div id="right">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='rangeinput'
            onChange={(e) => {
              setlength(e.target.value)
            }}
          />
          <label className='m-5'>length: {length}</label>
          </div>
          <div id="side">
            <input type="checkbox"
              defaultChecked={numberallow}
              id='noimp'
              onChange={() => { setnumberallow((prev) => !prev) }}
              className='m-5' />
            <label className='p-5'>numbers</label>
            <input type="checkbox"
              defaultChecked={numberallow}
              id='charimp'
              onChange={() => { setspcharallow((prev) => !prev) }} 
              className='m-5'/>
            <label className='p-5'>characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
