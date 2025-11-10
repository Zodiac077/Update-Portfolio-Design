import { useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc',
    content: 'Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering high-quality work exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Digital Solutions',
    content: 'The project was completed on time and the code quality was exceptional. Great communication throughout the entire process.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    name: 'Emily Rodriguez',
    role: 'CTO',
    company: 'InnovateLab',
    content: 'Highly skilled developer who brings creativity and technical expertise to every project. I would definitely work with them again.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  }
];

export function TestimonialsSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);
      
      const cards = cardsRef.current.filter(Boolean);
      
      gsap.fromTo(cards,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 80%"
          }
        }
      );
    };

    loadGSAP();
  }, []);

  return (
    <>
      {/* Testimonials Top Bar */}
      <section id="testimonials" className="flex justify-between items-center uppercase text-xs sm:text-sm tracking-widest font-light text-gray-300 px-4 sm:px-8 md:px-16 py-4">
        <span>04</span>
        <span>//TESTIMONIALS</span>
        <span>2023 - 2025</span>
      </section>


 <section id="portfolio" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center px-4 sm:px-8 md:px-16 py-20">
        <div className="relative">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl leading-none font-black text-center lg:text-left">
            CLIENT<br />TESTMONIAL
          </h1>
        </div>
        <div className="flex justify-center lg:justify-end">
          <p className="max-w-md text-lg sm:text-xl leading-7 text-gray-300 font-light text-center lg:text-right">
           their words showcase my dedication to quality work, clear communication, and my drive to ensure every project achieves success.
          </p>
        </div>
      </section>



      <section id="testimonials-content" className="w-full py-20 px-4 relative">
        <div className="max-w-7xl mx-auto space-y-32">
         
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: '0px' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-gray-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-white/15"
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/0 pointer-events-none" />
              
              {/* Quote Icon */}
              <div className="text-white/20 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
              
              {/* Content */}
              <p className="text-gray-300 mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
