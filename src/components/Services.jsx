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

      <div className="flex flex-col md:flex-row md:gap-6">
        <div className="flex flex-col gap-4 md:flex-1">
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

        <div className="mt-10 md:mt-0 md:flex-1 bg-brand-dark rounded-xl px-6 py-6 md:py-12 flex flex-col items-center justify-center text-center gap-6">
          <div>
            <p className="text-white font-bold text-2xl md:text-3xl mb-2">Serving:</p>
            <p className="text-brand-gold text-lg md:text-xl">Fulton, Williams & Defiance Counties</p>
          </div>
          <div>
            <p className="text-white font-bold text-2xl md:text-3xl mb-2">Availability:</p>
            <p className="text-brand-gold text-lg md:text-xl">Monday–Friday · Flexible Scheduling</p>
          </div>
          <a href="#booking"
            className="bg-brand-gold text-brand-dark font-bold text-lg px-8 py-4 rounded-full mt-4"
          >
            Book Now
          </a>
        </div>
        </div>
      
    </div>
  )
}

export default Services