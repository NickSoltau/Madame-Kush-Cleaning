
import bgKim from "../assets/bgKim.jpg"

function Hero() {
  return (
    <div
        id="hero"
        data-aos= "fade-in"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundImage: `url(${bgKim})`, backgroundSize: "contain", backgroundPosition: "center" }}
        >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
            <h1 className="text-white text-4xl font-bold mb-4">
            A Clean Home is a Happy Home
            </h1>
            <p className="text-white text-lg mb-8">
            Professional cleaning services you can trust. Serving the local area with care and attention to detail.
            </p>
            
            <a href="#booking"
            className="bg-brand-gold text-brand-dark font-bold text-lg px-8 py-4 rounded-full"
            >
            Book Now
            </a>
        </div>
        </div>
  )
}

export default Hero