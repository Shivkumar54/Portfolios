
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Layouts/Navbar/Navbar"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"
import Experience from "./pages/Experience/Experience"
import Skills from "./pages/Skills/Skills"
function App({theme}) {
  return (
    <div className={`App ${theme}`} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
