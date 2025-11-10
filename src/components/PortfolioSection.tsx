import { ProjectsGrid } from './ProjectsGrid';

export function PortfolioSection() {
  return (
    <>
      {/* Portfolio Top Bar */}
      <section id="portfolio" className="flex justify-between items-center uppercase text-xs sm:text-sm tracking-widest font-light text-gray-300 px-4 sm:px-8 md:px-16 py-4">
        <span>02</span>
        <span>//PORTFOLIO</span>
        <span>2013 - 2025</span>
      </section>

      {/* Latest Portfolio Hero Grid */}
      <section id="portfolio" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center px-4 sm:px-8 md:px-16 py-20">
        <div className="relative">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl leading-none font-black text-center lg:text-left">
            LATEST<br />PORTFOLIO
          </h1>
        </div>
        <div className="flex justify-center lg:justify-end">
          <p className="max-w-md text-lg sm:text-xl leading-7 text-gray-300 font-light text-center lg:text-right">
            My creative spirit comes alive in the digital realm. With nimble fingers flying across the device.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid />
    </>
  );
}