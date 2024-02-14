import { useState } from 'react'


function App() {
  const [bgColor, setbgColor] = useState("#242424")

  return (
    <body style={{backgroundColor: bgColor}}>
      <div className='bg-white p-4 rounded-xl my-10 mx-auto'>
        <button
          onClick={() => setbgColor("black")}
          className='mx-2 bg-black'
        >Black</button>
        <button
          onClick={() => setbgColor("red")}
          className='mx-2 bg-red-400'
        >Red</button>
        <button
          onClick={() => setbgColor("green")}
          className='mx-2 bg-green-400'
        >Green</button>
        <button 
          onClick={() => setbgColor("blue")}
          className='mx-2 bg-blue-400'
        >Blue</button>
        <button 
            onClick={() => setbgColor("gray")}
            className='mx-2 bg-gray-400'
        >Gray</button>
        <button 
          onClick={() => setbgColor("yellow")}
          className='mx-2 bg-yellow-400'
        >Yellow</button>
        <button 
          onClick={() => setbgColor("pink")}
          className='mx-2 bg-pink-400'
        >Pink</button>
        <button 
          onClick={() => setbgColor("purple")}
          className='mx-2 bg-purple-400'
        >Purple</button>
        <button 
          onClick={() => setbgColor("white")}
          className='mx-2 bg-white text-black'
        >White</button>
      </div>
    </body>
  )
}

export default App