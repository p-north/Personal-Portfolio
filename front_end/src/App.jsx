import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Resume from "./Pages/Resume"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
 

  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/projects" element = {<Projects/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/resume" element = {<Resume/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
