import cartoonKim from "../assets/cartoonKim.jpg"

function About() {
  return (
    <div id="about" 
    data-aos= "fade-up"
    className="bg-brand-dark px-6 py-12 flex flex-col items-center text-center md:flex-1">
        <h2 className="text-brand-gold text-3xl font-bold mb6">About Kim</h2>
        <img src={cartoonKim}
        alt="Kim- owner of Madame Kush LLC"
        className="w-48 h-48 rounded-full object-cover border-4 border-brand-gold" />
        <p className="text-white text-lg leading-relaxed max-w-sm">
            Hi, I'm Kim — owner and operator of Madame Kush LLC. Just another small town mother 
            and wife trying to help out around the house. Life is busy, so let me help! Reliable. 
            Affordable. Done Right.
        </p>"
    </div>
  )
}

export default About