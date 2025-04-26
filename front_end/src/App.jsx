import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import ExperienceTimeline from './components/Experience/ExperienceTimeline'
import EducationCards from './components/Education/EducationCards'

function App() {
  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        {/* Add IDs for anchor navigation */}
        <section id="home" className="container mx-auto px-4"><Hero/></section>
        <section id="about"><About/></section>
        <section id="education" className="container mx-auto px-4"><EducationCards/></section>
        <section id="experience" className="container mx-auto px-4"><ExperienceTimeline/></section>
        <section id="projects"><Projects/></section>
        <section id="contact"><Contact/></section>
      </main>
      <Footer/>
    </div>
  )
}

export default App
