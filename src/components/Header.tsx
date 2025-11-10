export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 h-16 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <h1 className="text-2xl font-black text-white">ZODIACX.</h1>
      <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-300 uppercase text-sm tracking-wide hover:text-orange-500 transition-colors duration-300">About</a>
          <a href="#portfolio" className="text-gray-300 uppercase text-sm tracking-wide hover:text-orange-500 transition-colors duration-300">Portfolio</a>
          <a href="#services" className="text-gray-300 uppercase text-sm tracking-wide hover:text-orange-500 transition-colors duration-300">Services</a>
          <a href="#testimonials" className="text-gray-300 uppercase text-sm tracking-wide hover:text-orange-500 transition-colors duration-300">Testimonials</a>
      </nav>
      <a 
        href="#contact" 
        className="border border-white px-4 py-2 text-white bg-transparent rounded text-sm cursor-pointer transition-all duration-300 hover:bg-white hover:text-black"
      >
        Get in Touch
      </a>
    </header>
  );
}