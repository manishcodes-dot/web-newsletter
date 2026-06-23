import React from 'react';
import { motion } from 'framer-motion';
import { AppWindow, Smile, Users, Heart } from 'lucide-react';

const steps = [
  {
    step: "01",
    icon: <AppWindow className="w-8 h-8 text-black" />,
    title: "Link in 1-Click",
    description: "Install the Slack or MS Teams app in one click. No coding or complex configuration required to get started.",
    bgColor: "bg-brand-cyan"
  },
  {
    step: "02",
    icon: <Smile className="w-8 h-8 text-black" />,
    title: "Pick Your Mixer",
    description: "Select from over 50+ templates for Happy Hours, standups, icebreakers, or custom custom trivia quizzes.",
    bgColor: "bg-brand-purple"
  },
  {
    step: "03",
    icon: <Users className="w-8 h-8 text-black" />,
    title: "Join Instantly",
    description: "Your team gets a magic link in chat. They click and join immediately in their browser—no registration required.",
    bgColor: "bg-brand-pink"
  },
  {
    step: "04",
    icon: <Heart className="w-8 h-8 text-black" />,
    title: "Build Habits",
    description: "Byte Size automatically schedules recurring mixers, matches weekly buddies, and tracks culture health reports.",
    bgColor: "bg-brand-green"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 lg:px-8 bg-brand-pink border-b-4 border-black bg-grid-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="bg-white border-2 border-black font-black uppercase text-xs px-3 py-1 rounded shadow-brutal-sm inline-block mb-4">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            How Byte Size Works
          </h2>
          <p className="font-bold text-black/80">
            Set up virtual team-building events in under 60 seconds. Learn the four simple steps to get started.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, x: -2 }}
              className="bg-white border-4 border-black p-6 rounded-lg shadow-brutal hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between relative"
            >
              {/* Step number badge */}
              <div className="absolute top-4 right-4 bg-black text-white font-black text-xs px-2.5 py-1 rounded-full">
                {item.step}
              </div>

              <div>
                {/* Icon Container */}
                <div className={`${item.bgColor} p-3.5 border-2 border-black rounded shadow-brutal-sm w-fit mb-6`}>
                  {item.icon}
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom connecting bar logic indicator */}
              <div className="mt-8 pt-4 border-t border-black/10 text-xs font-black text-black/50 uppercase tracking-widest">
                Step {item.step} of 04
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
