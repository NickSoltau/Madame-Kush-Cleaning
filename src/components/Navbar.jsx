import { useState } from "react"
import logo from "../assets/Logo.jpg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-brand-dark px-6 py-4">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Madame Kush LLC" className="h-12 w-auto" />

        <div className="hidden md:flex gap-6 ">
          <a href="#services" className="text-white text-3xl">Services</a>
          <a href="#about" className="text-white text-3xl">About</a>
          <a href="#booking" className="text-white text-3xl">Book Now</a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-brand-gold text-3xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col mt-4 gap-4">
          <a href="#services" className="text-white text-lg">Services</a>
          <a href="#about" className="text-white text-lg">About</a>
          <a href="#booking" className="text-white text-lg">Book Now</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar