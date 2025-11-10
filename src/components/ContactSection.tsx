import { useState, useRef } from 'react';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

// Initialize EmailJS
emailjs.init('q5iXnUp6HItOHohjk');

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Starting to send email...');
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.title,
        message: formData.message,
        reply_to: formData.email,  // This ensures you can reply directly to the sender
        to_name: 'Karan'  // Your name as the recipient
      };
      
      console.log('Sending with params:', templateParams);
      
      const result = await emailjs.send(
        'service_d47s0xn',
        'template_2vqddh9',
        templateParams,
        'q5iXnUp6HItOHohjk'
      );

      toast.custom((t) => (
        <div className="bg-gray-900/95 border border-gray-800 rounded-lg shadow-lg pointer-events-auto p-6 flex items-start gap-4 transform-gpu translate-y-0 transition-all duration-300 ease-out">
          <div className="bg-green-500/10 p-2 rounded-full">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-lg">Message Sent Successfully!</h3>
            <p className="text-gray-400 mt-1">Thank you for your message. I will get back to you soon.</p>
          </div>
          <button 
            onClick={() => toast.dismiss(t)} 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      ), {
        position: "bottom-right",
        duration: 5000,
        className: "!p-0 !bg-transparent !border-0 !shadow-none"
      });
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (error) {
      console.error('Error details:', error);
      toast.custom((t) => (
        <div className="bg-gray-900/95 border border-gray-800 rounded-lg shadow-lg pointer-events-auto p-6 flex items-start gap-4 transform-gpu translate-y-0 transition-all duration-300 ease-out">
          <div className="bg-red-500/10 p-2 rounded-full">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-lg">Failed to Send Message</h3>
            <p className="text-gray-400 mt-1">Sorry, there was an error sending your message. Please try again later.</p>
          </div>
          <button 
            onClick={() => toast.dismiss(t)} 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      ), {
        position: "bottom-right",
        duration: 5000,
        className: "!p-0 !bg-transparent !border-0 !shadow-none"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Contact Top Bar */}
      <section id="contact" className="flex justify-between items-center uppercase text-xs sm:text-sm tracking-widest font-light text-gray-300 px-4 sm:px-8 md:px-16 py-4">
        <span>05</span>
        <span>//GET IN TOUCH</span>
        <span>2023 - 2025</span>
      </section>

      <section id="contact" className="w-full py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl leading-none font-black text-center lg:text-left">
            GET IN TOUCH
          </h2>
          <p className="text-lg sm:text-xl leading-7 text-gray-300 font-light max-w-2xl text-center lg:text-right">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-white/80 to-transparent rounded-full" />
              <h3 className="text-3xl mb-4 text-white">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:translate-x-2">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Email</div>
                    <a href="mailto:your.email@example.com" className="text-white text-lg hover:text-gray-300 transition-colors block">
                      KY202100@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:translate-x-2">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Phone</div>
                    <a href="tel:+1234567890" className="text-white text-lg hover:text-gray-300 transition-colors block">
                     +91 6394752593
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:translate-x-2">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Location</div>
                    <div className="text-white text-lg">Lucknow, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-4">
              <div className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Connect With Me</div>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Zodiac077" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gray-900 p-4 rounded-xl hover:bg-white transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-white shadow-lg"
                >
                  <svg className="w-6 h-6 fill-white group-hover:fill-black transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/yadav-karan-rajendra-6a98ab228" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gray-900 p-4 rounded-xl hover:bg-white transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-white shadow-lg"
                >
                  <svg className="w-6 h-6 fill-white group-hover:fill-black transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gray-900 p-4 rounded-xl hover:bg-white transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-white shadow-lg"
                >
                  <svg className="w-6 h-6 fill-white group-hover:fill-black transition-colors" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a 
                  href="https://dribbble.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gray-900 p-4 rounded-xl hover:bg-white transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-white shadow-lg"
                >
                  <svg className="w-6 h-6 fill-white group-hover:fill-black transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.522 8.834h.006c3.853-.005 7.204-.424 10.024-1.247.188.44.368.88.54 1.32-2.691.855-4.913 2.435-6.673 4.743-1.627-1.617-2.681-3.813-2.897-6.316zm5.348 8.003c1.524-2.117 3.529-3.509 6.034-4.182.76 1.966 1.37 4.018 1.833 6.144-2.287.818-4.886.854-7.242.171-.194-.058-.385-.122-.575-.19zm9.725.122c-.452-2.055-1.031-4.042-1.737-5.951 2.033-.333 4.223-.286 6.561.142-.697 2.62-2.567 4.766-5.041 5.809h.217z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden border border-gray-800"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.7)'
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="from_name" className="block text-sm text-gray-400 uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all duration-300 placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="from_email" className="block text-sm text-gray-400 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all duration-300 placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm text-gray-400 uppercase tracking-wider">
                  Subject *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all duration-300 placeholder:text-gray-600"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm text-gray-400 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/50 border border-gray-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all duration-300 resize-none placeholder:text-gray-600"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full bg-white text-black py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  {!loading && (
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}