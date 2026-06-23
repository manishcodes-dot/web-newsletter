import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const stats = [
  { value: "12,000+", label: "Active Remote Teams", bgColor: "bg-brand-cyan" },
  { value: "3.5 Million", label: "Icebreakers Played", bgColor: "bg-brand-pink" },
  { value: "96.4%", label: "Weekly Culture Score", bgColor: "bg-brand-green" }
];

const testimonials = [
  {
    quote: "Byte Size changed our remote onboarding. Instead of awkward zoom intros, our new hires jump into a Doodle Race and instantly feel like part of the team.",
    author: "Elena Rostova",
    role: "VP of People at Teleport",
    avatar: "👩‍💼",
    bgColor: "bg-brand-purple"
  },
  {
    quote: "The watercooler lounges are incredibly low friction. People just leave the audio room open in the background, working together like a real office.",
    author: "Marcus Vance",
    role: "Engineering Director at DevFlow",
    avatar: "👨‍💻",
    bgColor: "bg-brand-peach"
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-brand-cyan border-b-4 border-black bg-grid-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Logos Grid */}
        <div className="text-center mb-16">
          <p className="text-xs font-black uppercase tracking-wider mb-8 text-black/60">
            Trusted by fast-moving teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {['SLACK', 'VERCEL', 'SHOPIFY', 'MIRO', 'NOTION', 'FIGMA'].map((brand, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-black px-4 py-2 font-black tracking-widest text-sm rounded shadow-brutal-sm hover:rotate-2 transition-transform cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white border-4 border-black p-6 rounded-lg shadow-brutal flex flex-col items-center text-center"
            >
              <span className={`text-4xl font-black uppercase border-2 border-black px-3 py-1.5 rounded ${stat.bgColor} shadow-brutal-sm mb-3`}>
                {stat.value}
              </span>
              <span className="text-sm font-black uppercase tracking-wide text-gray-700 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div 
              key={idx}
              className={`${test.bgColor} border-4 border-black p-8 rounded-lg shadow-brutal flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Star Badges */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl font-bold mb-8 text-black leading-relaxed relative z-10">
                "{test.quote}"
              </p>

              {/* Author Profile */}
              <div className="flex items-center gap-3 border-t-2 border-black/10 pt-4">
                <span className="w-12 h-12 rounded-full border-2 border-black bg-white flex items-center justify-center text-xl">
                  {test.avatar}
                </span>
                <div>
                  <h4 className="font-black text-sm uppercase text-black">{test.author}</h4>
                  <p className="text-xs font-bold text-black/60">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
