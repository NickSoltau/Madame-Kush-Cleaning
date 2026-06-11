import { useState } from "react"
import logo from "../assets/Logo.jpg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-brand-dark px-6 py-4">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Madame Kush LLC" className="h-12 w-auto" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-brand-gold text-3xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col mt-4 gap-4">
          <a href="#services" className="text-white text-lg">Services</a>
          <a href="#about" className="text-white text-lg">About</a>
          <a href="#booking" className="text-white text-lg">Book Now</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar