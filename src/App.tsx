/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MapPin, 
  Church, 
  GlassWater, 
  Home, 
  MessageCircle, 
  Heart, 
  CreditCard, 
  Copy, 
  CheckCircle2 
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const WHATSAPP_MESSAGE = encodeURIComponent("I am enquiring about Mr Jedidiah AND Mrs Mary wedding");
const CONTACT1_WA = `https://wa.me/2348141589038?text=${WHATSAPP_MESSAGE}`;
const CONTACT2_WA = `https://wa.me/2347048066915?text=${WHATSAPP_MESSAGE}`;
const CONTACT3_WA = `https://wa.me/2348144120992?text=${WHATSAPP_MESSAGE}`;
const CONTACT4_WA = `https://wa.me/2349067517751?text=${WHATSAPP_MESSAGE}`;

const TypewriterFooter = () => {
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const fullText = "DIGITAL CRAFTSMANSHIP BY MMM";
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 30);
      return () => clearTimeout(timeout);
    } else if (hasStarted && text.length === fullText.length) {
      setTimeout(() => setIsComplete(true), 300);
    }
  }, [text, hasStarted]);

  return (
    <footer ref={containerRef} className="text-center py-10 bg-[#fdfcf0]">
      <div className="w-[60px] h-[1px] bg-[#c5a059]/20 mx-auto mb-3" />
      <a 
        href="https://wa.me/2347060845087?text=I%20love%20your%20Work,%20I%20Have%20a%20Contract%20for%20you"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-[10px] sm:text-[11px] tracking-[0.4em] sm:tracking-[0.8em] px-5 uppercase font-light transition-all duration-1000 inline-flex items-center justify-center prismatic-charcoal ${isComplete ? 'prismatic-whisper-glow' : 'opacity-60'}`}
      >
        <span className="min-h-[1em]">{text}</span>
        {isComplete && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="ml-2"
          >
            <i className="fa-solid fa-comment-dots text-[10px] sm:text-[12px]"></i>
          </motion.span>
        )}
      </a>
    </footer>
  );
};

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-[#fdfcf0] selection:bg-[#c5a059]/20">
      {/* Hero Section */}
      <section className="relative h-screen lg:h-[750px] flex items-center justify-center text-center overflow-hidden gpu-accelerated">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
        >
          <img 
            src="https://i.ibb.co/kg6kFKkg/1.jpg" 
            alt="Wedding Background" 
            className="w-full h-full object-cover object-[center_15%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        
        <div className="relative z-10 px-6 text-[#C5A059] max-w-4xl h-full flex flex-col justify-center gap-12 lg:gap-16 py-12 mx-auto">
          <motion.span 
            className="uppercase tracking-[0.4em] text-xs mb-6 block font-light hero-text-shadow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Together with their Families
          </motion.span>

          <div className="flex flex-col items-center w-full">
            <motion.h1 
              className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 text-3xl sm:text-4xl lg:text-6xl mb-8 font-serif leading-tight hero-text-shadow px-6 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <span className="whitespace-nowrap">Jedidiah Olabode</span>
              <span className="italic font-light">&</span>
              <span className="whitespace-nowrap">Mary Funmilayo</span>
            </motion.h1>
            <motion.div 
              className="w-16 h-[1px] bg-[#C5A059]/50 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
            <motion.p 
              className="text-lg md:text-xl italic mb-12 font-light tracking-wide hero-text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Are getting married
            </motion.p>
          </div>

          <motion.div 
            className="space-y-2 hero-text-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <p className="tracking-[0.3em] uppercase text-xs font-medium">Save the Date</p>
            <p className="text-2xl font-serif">Kabba, Kogi State</p>
          </motion.div>
        </div>
      </section>

      {/* Love Story */}
      <section className="py-32 px-8 text-center max-w-3xl mx-auto gpu-accelerated">
        <motion.div {...fadeIn}>
          <Heart className="w-8 h-8 text-[#c5a059] mx-auto mb-8 font-light" />
          <h2 className="text-4xl md:text-5xl text-[#c5a059] mb-10 font-serif">Our Love Story</h2>
          <div className="space-y-6">
            <p className="leading-relaxed text-neutral-600 italic text-lg md:text-xl font-light">
              "Ours is a love beautifully orchestrated by the Divine. We first met in a community where our paths briefly crossed before life led us in separate directions. Years later, destiny intervened through a surprise phone call—a moment that reconnected our souls and marked the beginning of a lifelong journey. What followed was a profound friendship, standing by one another through every season."
            </p>
            <p className="leading-relaxed text-neutral-600 italic text-lg md:text-xl font-light">
              "Guided by faith, prayer, and the blessings of our parents, we have found our forever in each other. On the 24th and 25th of April, we joyfully unite as one, rooted in Christ. Please join us as we celebrate this beautiful love story. ❤️"
            </p>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-white gpu-accelerated">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="gallery-container gap-4 px-6 pb-8 no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {[
              "https://i.ibb.co/kg6kFKkg/1.jpg",
              "https://i.ibb.co/C3pkRDCz/12.jpg",
              "https://i.ibb.co/WNg3JGhb/2.jpg",
              "https://i.ibb.co/9kDvwKvM/3.jpg",
              "https://i.ibb.co/fVjCCdj6/34.jpg",
              "https://i.ibb.co/5xvyjNYf/4.jpg",
              "https://i.ibb.co/21wHPrww/5.jpg",
              "https://i.ibb.co/HTpvYPKf/56.jpg"
            ].map((src, idx) => (
              <div key={idx} className="flex-none w-[85vw] md:w-auto md:h-[80vh] md:max-h-[80vh] aspect-[4/5] md:aspect-auto snap-center flex items-center justify-center" style={{ scrollSnapAlign: 'center' }}>
                <img 
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover md:object-contain rounded-2xl"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
            <div 
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeIndex === idx ? "shining-dot scale-125" : "inactive-dot"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 px-6 bg-[#f9f7f2] gpu-accelerated">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Engagement",
              date: "Friday, 24th April",
              time: "2:00 PM",
              location: "House 5 Along Kudon Hotel",
              icon: Home,
              map: "https://www.google.com/maps/search/House+5+Along+Kudon+Hotel+Kabba"
            },
            {
              title: "Church Service",
              date: "Saturday, 25th April",
              time: "10:00 AM",
              location: "Holyghost Baptist Church, Kabba",
              icon: Church,
              map: "https://www.google.com/maps/search/Holyghost+Baptist+Church+Kabba"
            },
            {
              title: "Reception",
              date: "Saturday, 25th April",
              time: "1:00 PM",
              location: "Olonijola Events Center, Kabba",
              icon: GlassWater,
              map: "https://www.google.com/maps/search/Olonijola+Events+Kabba"
            }
          ].map((event, idx) => (
            <motion.div 
              key={idx}
              className="glass-card p-10 rounded-2xl text-center premium-card-shadow border-[#c5a059]/10"
              {...fadeIn}
              transition={{ delay: idx * 0.2 }}
            >
              <event.icon className="w-8 h-8 text-[#c5a059] mx-auto mb-6 font-light" />
              <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
              <div className="mb-4 space-y-1">
                <motion.p 
                  className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(197,160,89,0.4)",
                      "0 0 15px rgba(197,160,89,0.8)",
                      "0 0 5px rgba(197,160,89,0.4)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {event.date}
                </motion.p>
                <motion.p 
                  className="text-xl text-[#c5a059] font-serif italic"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(197,160,89,0.4)",
                      "0 0 15px rgba(197,160,89,0.8)",
                      "0 0 5px rgba(197,160,89,0.4)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  {event.time}
                </motion.p>
              </div>
              <p className="text-neutral-500 mb-8 font-light leading-relaxed">{event.location}</p>
              <a 
                href={event.map} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#c5a059] hover:text-[#a38241] transition-colors uppercase tracking-[0.2em] font-medium"
              >
                <MapPin className="w-3 h-3" />
                View on Map
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-24 px-8 text-center bg-white gpu-accelerated">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl text-[#c5a059] mb-6 font-serif">Dress Code</h2>
          <p className="text-neutral-800 mb-10 text-lg font-light tracking-wide uppercase tracking-[0.1em]">
            Royalty <span className="text-[#c5a059]">&</span> Elegance
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { name: "Green", color: "#00693E", glow: "rgba(0,105,62,0.6)" },
              { name: "Pink", color: "#FFC0CB", glow: "rgba(255,192,203,0.6)" },
              { name: "White", color: "#FFFFFF", glow: "rgba(255,255,255,0.6)" },
              { name: "Gold", color: "#c5a059", glow: "rgba(197,160,89,0.6)" }
            ].map((item, idx) => (
              <div key={idx} className="group flex flex-col items-center gap-4">
                <motion.div 
                  className="w-20 h-20 rounded-full border-4 border-[#f9f7f2] shadow-xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: item.color }}
                  animate={{ 
                    boxShadow: [
                      `0 0 10px ${item.glow}`,
                      `0 0 30px ${item.glow}`,
                      `0 0 10px ${item.glow}`
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <span className="text-xs uppercase tracking-widest text-neutral-400">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gifts & Support - Premium Card */}
      <section className="py-24 px-6 bg-[#f9f7f2] border-y border-[#c5a059]/10 overflow-hidden gpu-accelerated">
        <div className="max-w-md mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl text-[#c5a059] mb-8 font-serif">Gifts & Support</h2>
            <p className="text-neutral-600 mb-12 font-light leading-relaxed">
              Your presence is our greatest gift, but should you wish to honor us with a token, please use the details below:
            </p>
            
            {/* Premium Banking Card */}
            <motion.div 
              className="relative bg-neutral-900 text-white p-8 rounded-3xl shadow-2xl text-left overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              {/* Card Texture/Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 opacity-50" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-3xl group-hover:bg-[#c5a059]/20 transition-colors" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059]/80 font-medium">Bank Institution</p>
                    <p className="text-xl font-serif tracking-wide">First Bank</p>
                  </div>
                  <CreditCard className="w-8 h-8 text-[#c5a059]/50" />
                </div>

                <div className="mb-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059]/80 font-medium mb-2">Account Number</p>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl tracking-[0.2em] font-mono font-light">3088221952</p>
                    <button 
                      onClick={() => copyToClipboard("3088221952")}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      {copied ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-[#c5a059]" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059]/80 font-medium">Account Name</p>
                    <p className="text-sm uppercase tracking-widest font-light">Alabi Olabode Christopher</p>
                  </div>
                  <div className="w-10 h-6 bg-[#c5a059]/20 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#c5a059]/40 rounded-full -mr-1" />
                    <div className="w-4 h-4 bg-[#c5a059]/40 rounded-full -ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-32 px-8 text-center bg-neutral-900 text-white gpu-accelerated">
        <motion.div {...fadeIn}>
          <h2 className="text-5xl mb-16 font-serif">RSVP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] mb-4 text-neutral-500">Contact John</span>
              <p className="text-xl text-[#c5a059] font-serif tracking-wide drop-shadow-[0_0_10px_rgba(197,160,89,0.8)]">0814 158 9038</p>
              <div className="flex gap-8 mt-6">
                <a href="tel:+2348141589038" className="text-[#c5a059] hover:text-white transition-colors">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </a>
                <a href={CONTACT1_WA} target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:text-white transition-colors">
                  <i className="fa-regular fa-comment-dots text-3xl"></i>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] mb-4 text-neutral-500">Contact Makinde</span>
              <p className="text-xl text-[#c5a059] font-serif tracking-wide drop-shadow-[0_0_10px_rgba(197,160,89,0.8)]">0704 806 6915</p>
              <div className="flex gap-8 mt-6">
                <a href="tel:+2347048066915" className="text-[#c5a059] hover:text-white transition-colors">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </a>
                <a href={CONTACT2_WA} target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:text-white transition-colors">
                  <i className="fa-regular fa-comment-dots text-3xl"></i>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] mb-4 text-neutral-500">Contact GBEMI</span>
              <p className="text-xl text-[#c5a059] font-serif tracking-wide drop-shadow-[0_0_10px_rgba(197,160,89,0.8)]">0814 412 0992</p>
              <div className="flex gap-8 mt-6">
                <a href="tel:+2348144120992" className="text-[#c5a059] hover:text-white transition-colors">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </a>
                <a href={CONTACT3_WA} target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:text-white transition-colors">
                  <i className="fa-regular fa-comment-dots text-3xl"></i>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] mb-4 text-neutral-500">Contact ISREAL</span>
              <p className="text-xl text-[#c5a059] font-serif tracking-wide drop-shadow-[0_0_10px_rgba(197,160,89,0.8)]">0906 751 7751</p>
              <div className="flex gap-8 mt-6">
                <a href="tel:+2349067517751" className="text-[#c5a059] hover:text-white transition-colors">
                  <i className="fa-solid fa-phone text-2xl"></i>
                </a>
                <a href={CONTACT4_WA} target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:text-white transition-colors">
                  <i className="fa-regular fa-comment-dots text-3xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-32">
            <p className="text-[10px] text-neutral-600 uppercase tracking-[0.8em] font-light">
              #JedidiahMary2026
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer Decoration */}
      <footer className="py-8 bg-neutral-950 text-center">
        <p className="text-[8px] text-neutral-800 uppercase tracking-[0.2em]">
          Designed with Love for Jedidiah Olabode & Mary Funmilayo
        </p>
      </footer>
      <TypewriterFooter />
    </div>
  );
}
