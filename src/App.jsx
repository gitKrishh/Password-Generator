import { useState, useCallback, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberallow, setnumberallow] = useState(false);
  const [spcharallow, setspcharallow] = useState(false);
  const [pass, setpass] = useState("");
  //useRef hook
  const passwordRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallow) str += "0123456789";
    if (spcharallow) str += "!@#$%^&*()-_=+\|[]{};:/?.> ;"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length ); //math.floor round of the number and math.random generat the random decima number between 0 to 1, and str.length 
      pass += str.charAt(char); //str.charat(index) return the specific(index) char from the str 

    }

//     str = "abcdefghijklmnopqrstuvwxyz"  // length = 26
// Then:

// Math.random() * str.length
// = Math.random() * 26
// = some number between 0.000... to 25.999...

    setpass(pass);
  }, [length, numberallow, spcharallow, setpass])

  const copypasstoclipboard = useCallback(()=>{
    passwordRef.current?.select();
    //if we want to select a range then => passwordRef.current?.setselectionrange(0,3);
//     passwordRef is a reference to the input box where the password is displayed.
// .current gives access to the actual DOM element (input element).
// ?. is optional chaining, so it won’t throw an error if current is null.
// .select() selects all text inside the input box — this visually highlights it.
   window.navigator.clipboard.writeText(pass) //but the text wont select with this method so we need to useRef\
  }, [pass])

  useEffect(()=>{
    passGenerator()
  }, [length, numberallow, spcharallow, passGenerator])

  return (
    <>
      <div className='mainbox'><h1 className='text-4xl text-center text-white'><u>Password Generator</u></h1>
        <div id="passbox">
          <div id="inputbox">
            <input
              type="text"
              value={pass}
              placeholder='Password'
              className='hi'
              readOnly
              ref = {passwordRef} />

          </div>
          <button className='copybutton'
          onClick={copypasstoclipboard}>copy</button>
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
            // className='hi'
          
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
