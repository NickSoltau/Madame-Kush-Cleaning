function Services() {
  const services = [
    "Rental Property Cleanouts",
    "House & Apartment Cleaning",
    "Move-in / Move-out Cleans",
    "Yard + Outdoor Cleanups",
    "Indoor & Outdoor Jobs",
    "Commercial or Residential",
  ]

  return (
    <div id="services" 
    data-aos= "fade-up"
    className="bg-white px-6 py-12">
      <h2 className="text-brand-dark text-3xl font-bold text-center mb-2">
        Services Offered
      </h2>
      <p className="text-center text-brand-teal font-semibold text-lg mb-8">
        Only $20/hour
      </p>

      <div className="flex flex-col gap-4">
        {services.map((service) => (
          <div
            key={service}
            className="flex items-center gap-3 bg-brand-teal px-4 py-3 rounded-xl"
          >
            <span className="text-brand-gold text-xl">✓</span>
            <span className="text-white font-medium">{service}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-brand-dark rounded-xl px-6 py-6 text-center">
        <p className="text-white font-bold text-lg mb-1">Serving:</p>
        <p className="text-brand-gold">Fulton, Williams & Defiance Counties</p>
        <p className="text-white font-bold text-lg mt-4 mb-1">Availability:</p>
        <p className="text-brand-gold">Monday–Friday · Flexible Scheduling</p>
      </div>
      <div className="flex justify-center mt-8">
         <a href="#booking"
            className="bg-brand-gold text-brand-dark font-bold text-lg px-8 py-4 rounded-full"
            >
            Book Now
            </a>

      </div>
      
    </div>
  )
}

export default Services