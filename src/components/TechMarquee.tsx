import { useEffect, useRef } from 'react';

export function TechMarquee() {
  const technologies = [
    'HTML', 'Node', 'TypeScript', 'Python', 'MongoDB', 
    'PostgreSQL', 'Docker', 'AWS', 'Express', 'Next.js'
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create and inject CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-animation {
        animation: marquee 20s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-15 overflow-hidden relative z-10">
      <div 
        ref={marqueeRef}
        className="flex gap-12 whitespace-nowrap marquee-animation"
      >
        {/* First set */}
        {technologies.map((tech, index) => (
          <div
            key={`first-${index}`}
            className="px-6 py-4 rounded-xl backdrop-blur border border-white/10 bg-white/5 inline-flex items-center justify-center transition-transform duration-200 cursor-default hover:scale-105 hover:border-orange-500"
          >
            <span className="text-white text-xl font-medium tracking-wide">{tech}</span>
          </div>
        ))}
        {/* Duplicate set for infinite scroll */}
        {technologies.map((tech, index) => (
          <div
            key={`second-${index}`}
            className="px-6 py-4 rounded-xl backdrop-blur border border-white/10 bg-white/5 inline-flex items-center justify-center transition-transform duration-200 cursor-default hover:scale-105 hover:border-orange-500"
          >
            <span className="text-white text-xl font-medium tracking-wide">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}