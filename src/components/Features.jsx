import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Zap, Sparkles, Smile, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-black" />,
    title: "Always-On Lounges",
    description: "Create casual digital rooms for coffee chats, coworker coworking, or background music. Jump in and out with one click.",
    bgColor: "bg-brand-cyan",
    tag: "LOBBY"
  },
  {
    icon: <Smile className="w-8 h-8 text-black" />,
    title: "5-Minute Icebreakers",
    description: "Select from over 30 interactive team games like Charades, Gartic Race, and Quick Trivia. No installation or account required for team members.",
    bgColor: "bg-brand-purple",
    tag: "GAMES"
  },
  {
    icon: <Zap className="w-8 h-8 text-black" />,
    title: "Smart Connections",
    description: "Automate cross-department matching. Set up weekly coffee buddies, mentoring pairs, or virtual lunch companions based on mutual interests.",
    bgColor: "bg-brand-pink",
    tag: "MATCHES"
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-black" />,
    title: "Culture Insights",
    description: "Understand team sentiment through anonymous pulse checks, weekly mood tracking, and participation stats on your organization dashboard.",
    bgColor: "bg-brand-green",
    tag: "ANALYTICS"
  },
  {
    icon: <Shield className="w-8 h-8 text-black" />,
    title: "Enterprise Grade Sec",
    description: "Fully compliant with SOC2, GDPR, and HIPAA. Integrate single sign-on (SSO) and control user access across departments effortlessly.",
    bgColor: "bg-brand-peach",
    tag: "SECURITY"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-black" />,
    title: "Custom Templates",
    description: "Design custom session flows with custom rules, brand logos, custom questions, and custom timers tailored to your team's specific vibe.",
    bgColor: "bg-brand-orange",
    tag: "CUSTOM"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 lg:px-8 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="bg-brand border-2 border-black font-black uppercase text-xs px-3 py-1 rounded shadow-brutal-sm inline-block mb-4">
            Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Built for how remote teams actually work
          </h2>
          <p className="font-bold text-gray-700">
            No long onboarding, no complicated instructions. Just instant collaboration tools to turn awkward silences into high-energy interactions.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, x: -2 }}
              className="bg-[#FFFDF9] border-4 border-black p-6 rounded-lg shadow-brutal hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`${feature.bgColor} p-3 border-2 border-black rounded shadow-brutal-sm`}>
                    {feature.icon}
                  </div>
                  <span className="text-xs font-black bg-gray-100 border-2 border-black px-2 py-0.5 rounded">
                    {feature.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="border-t-2 border-dashed border-black/20 pt-4 mt-6 flex items-center justify-between">
                <span className="text-xs font-black uppercase text-gray-500">Learn More</span>
                <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
