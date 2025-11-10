import { useEffect, useRef } from 'react';
import { ImageWithFallback } from './fallback/ImageWithFallback';


export function ImageSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (imageRef.current) {
            const img = imageRef.current.querySelector('img');
              if (img) {
              // Disabled parallax effect by setting multiplier to 0
              const translateY = lastScrollY * 0; // No movement
              img.style.transform = `translate3d(0, ${translateY}px, 0)`;
              img.style.transition = 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add will-change on mount for performance optimization
    const img = imageRef.current?.querySelector('img');
    if (img) {
      img.style.willChange = 'transform';
      img.style.backfaceVisibility = 'hidden';
      img.style.perspective = '1000px';
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up will-change on unmount
      if (img) {
        img.style.willChange = 'auto';
      }
    };
  }, []);

  return (
    <section className="py-8 sm:py-15 px-3 sm:px-5 flex items-center justify-center relative -mt-20 sm:-mt-30 overflow-hidden "style={{ marginTop: '-60px' }}>
      <div ref={imageRef} className="flex items-center justify-center w-full max-w-7xl mx-auto">
        <ImageWithFallback 
          src="/images/Techno.jpg"
          alt="Hero Portfolio Image"
          className="w-12/12 rounded-2xl object-cover transition-transform duration-300"
        />
      </div>
    </section>
  );
}