import logo from "../assets/Logo.jpg"

function Footer() {
  return (
    <div className="bg-brand-dark px-6 py-10 flex flex-col items-center text-center gap-6">
      <img src={logo} alt="Madame Kush LLC" className="h-16 w-auto" />

      <p className="text-white text-sm">
        Reliable. Affordable. Done Right.
      </p>

      <div className="flex flex-col gap-2">
        <a href="tel:4193888202" className="text-brand-gold text-lg font-bold">
          📞 419-388-8202
        </a>
        <a href="sms:4193888202" className="text-brand-gold text-lg font-bold">
          💬 Send a Text
        </a>
      </div>

      <div className="flex gap-6">
        <a href="https://www.facebook.com/profile.php?id=61571001456574" className="text-white text-lg">
          Facebook
        </a>
        <a href="#" className="text-white text-lg">
          Instagram
        </a>
      </div>

      <p className="text-gray-500 text-xs mt-4">
        © 2025 Madame Kush LLC. All rights reserved.
      </p>
    </div>
  )
}

export default Footer