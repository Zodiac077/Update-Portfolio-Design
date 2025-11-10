import { useEffect, useRef } from 'react';
import { ImageWithFallback } from './fallback/ImageWithFallback';

export function ImageSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const img = imageRef.current.querySelector('img');
        if (img) {
          img.style.transform = `translateY(${window.scrollY * -0.2}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-15 px-5 flex items-center justify-center relative -mt-30 overflow-hidden w-full">
      <div ref={imageRef} className="w-full max-w-6xl mx-auto">
        <ImageWithFallback 
          src="/images/Techno.jpg"
          alt="Hero Portfolio Image"
          className="w-full rounded-2xl object-cover transition-transform duration-200 h-[500px]"
        />
      </div>
    </section>
  );
}
