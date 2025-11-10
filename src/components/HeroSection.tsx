import { useEffect, useRef } from 'react';

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fitHeroText = () => {
      const title = titleRef.current;
      const wrapper = wrapperRef.current;
      if (!title || !wrapper) return;

      const maxWidth = wrapper.offsetWidth;
      let fontSize = 10;
      title.style.fontSize = fontSize + 'px';
      
      while (title.scrollWidth <= maxWidth * 0.98 && fontSize < 1000) {
        fontSize += 2;
        title.style.fontSize = fontSize + 'px';
      }
      title.style.fontSize = (fontSize - 2) + 'px';
    };

    fitHeroText();
    window.addEventListener('resize', fitHeroText);
    return () => window.removeEventListener('resize', fitHeroText);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-16">
      <div ref={wrapperRef} className="w-4/5 flex justify-center items-center overflow-hidden">
        <h1 
          ref={titleRef}
          className="font-black uppercase whitespace-nowrap leading-none text-center transition-transform duration-200 ease-out"
          style={{ transformOrigin: 'center', willChange: 'transform' }}
        >
          ZODIACX.
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-8 mt-8 text-sm uppercase tracking-wider">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
          <span>Based in Lucknow,</span>
          <span>India</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
          <span>Available all around</span>
          <span>Worldwide</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
          <span>Digital Designer</span>
          <span>+ Developer</span>
        </div>
      </div>
    </section>
  );
}