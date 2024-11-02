import { Navigate, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Navbar from "./components/Navbar"
import Rutinas from "./routes/Rutinas"
import Dietas from "./routes/Dietas"
import Admin from "./routes/Admin"
import Login from "./routes/Login"

function App() {
  return (
    <div className="h-screen bg-white-100">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/Rutinas' element={<Rutinas/>}></Route>
        <Route path='/Dietas' element={<Dietas/>}></Route>
        <Route path='/*' element={ <Navigate to="/"/>}></Route>
      </Routes>
    </div>
  )
}

export default App
