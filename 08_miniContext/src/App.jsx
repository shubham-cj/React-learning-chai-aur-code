import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './comonents/Login'
import Profile from './comonents/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
