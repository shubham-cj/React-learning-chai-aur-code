import { useEffect, useState } from 'react'
import './App.css'
import { TheamProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // change in theme
  useEffect(() => {
    let htmlPage = document.querySelector('html')
    htmlPage.classList.remove('light', 'dark')
    
    htmlPage.classList.add(themeMode)
  }, [themeMode])

  return (
    <TheamProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </TheamProvider>
  )
}

export default App
