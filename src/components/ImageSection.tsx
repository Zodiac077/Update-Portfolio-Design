import { useEffect, useRef } from 'react';
import { ImageWithFallback } from './fallback/ImageWithFallback';

export function ImageSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        requestAnimationFrame(() => {
          if (imageRef.current) {
            const img = imageRef.current.querySelector('img');
            if (img) {
              const translateY = lastScrollY.current * -0.15;
              img.style.transform = `translate3d(0, ${translateY}px, 0)`;
              img.style.willChange = 'transform';
            }
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-15 px-5 flex items-center justify-center relative -mt-30 overflow-hidden w-full">
      <div ref={imageRef} className="w-full max-w-6xl mx-auto">
        <ImageWithFallback 
          src="/images/Techno.jpg"
          alt="Hero Portfolio Image"
          className="w-full rounded-2xl object-cover transform-gpu will-change-transform h-[500px]"
          style={{ 
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            WebkitBackfaceVisibility: 'hidden',
            WebkitPerspective: '1000px'
          }}
        />
      </div>
    </section>
  );
}
