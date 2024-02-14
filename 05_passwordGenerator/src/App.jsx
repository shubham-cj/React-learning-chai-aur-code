import { useState, useCallback, useEffect } from 'react'


function App() {
  const [length, setLength] = useState(30)
  const [numAllow, setNumAllow] = useState(true)
  const [charAllow, setCharAllow] = useState(true)
  const [password, setPassword] = useState("")
  
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%&*+/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)   
    }

    setPassword(pass)
  
  }, [length, numAllow, charAllow, setPassword])

  const copyPassToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect( () => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])


  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='block-width shadow-md rounded-lg p-4 mt-8 text-orange-500 bg-gray-800 text-2xl'>
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
          <button
          onClick={copyPassToClipboard}
          className='bg-blue-900 text-sm p-3 text-white'
          >
            COPY
          </button>
        </div>

        <div className="flex justify-around text-sm">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={30}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="type">Lenght: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            id="numbs" 
            defaultChecked= {numAllow}
            onChange={() => {
              setNumAllow((prev) => !prev)
            }}
            className='cursor-pointer'
            />
            <label htmlFor="numbs" className='cursor-pointer'>numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            id="chars" 
            defaultChecked= {charAllow}
            onChange={() => {
              setCharAllow((prev) => !prev)
            }}
            className='cursor-pointer'
            />
            <label htmlFor="chars" className='cursor-pointer'>special chars'</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
