function Booking() {
  return (
    <div id="booking" 
    data-aos= "fade-up"
    className="bg-white px-6 py-12 flex flex-col items-center text-center">
      <h2 className="text-brand-dark text-3xl font-bold mb-4">Book a Cleaning</h2>
      <p className="text-gray-600 text-lg mb-8">
        Ready for a clean space? Book your appointment below or call or text us directly.
      </p>

      {/* Setmore booking widget will go here */}
      <div className="w-full bg-gray-100 rounded-xl flex items-center justify-center py-16 mb-8">
        <p className="text-gray-400 text-lg">Booking widget coming soon</p>
      </div>

      <a
        href="tel:4193888202"
        className="bg-brand-teal text-white font-bold text-xl px-8 py-4 rounded-full mb-4"
      >
        Call 419-388-8702
      </a>
      <a href="sms:4193888202" className="bg-brand-gold text-brand-dark font-bold text-xl px-8 py-4 rounded-full">
  Send a Text
</a>
    </div>
  )
}

export default Booking