const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-32 border-b border-gray-200">
      <div className="logo w-15">
        <img
          src="https://astrologeratultripathi.com/wp-content/uploads/2026/02/WhatsApp_Image_2025-02-25_at_1.41.07_PM-removebg-preview.webp"
          alt=""
        />
      </div>
      <div className="navlinks">
        <ul className=" flex gap-10">
          <li>Home</li>
          <li>Services</li>
          <li>Daily Horoscope</li>
          <li>Blog</li>
          <li>News</li>
          <li>Gemstones</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
