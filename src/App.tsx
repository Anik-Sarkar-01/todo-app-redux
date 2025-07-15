import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <div className="max-w-7xl mx-auto mt-3 flex flex-col">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}
 
export default App