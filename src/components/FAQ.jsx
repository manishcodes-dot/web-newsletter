import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Does my team need to install or register an account?",
    answer: "No, guests do not need to download anything or sign up. They just click the session link from Slack or Teams and join immediately in their browser."
  },
  {
    question: "How does the Slack & Microsoft Teams integration work?",
    answer: "You can connect Byte Size to your workspace in 1 click. You can then launch icebreakers using simple commands like /bytesize or configure automated buddy matching schedules."
  },
  {
    question: "Is there a limit on how many people can join a mixer?",
    answer: "Our activities are designed to scale. Simple games like Doodle Race support up to 100+ players, while watercooler lounges can be partitioned into sub-rooms dynamically."
  },
  {
    question: "Can we create our own custom questions and trivia?",
    answer: "Yes, our custom template builder allows you to modify questions, upload brand logo graphics, write custom rules, and adjust round timers."
  },
  {
    question: "How do you handle security and data privacy?",
    answer: "We are SOC2 Type II compliant, GDPR-friendly, and encrypt all data in transit and at rest. We do not store any conversational logs from your team chats."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 lg:px-8 bg-brand-purple border-b-4 border-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="bg-white border-2 border-black font-black uppercase text-xs px-3 py-1 rounded shadow-brutal-sm inline-block mb-4">
            Answers
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Frequently Asked Objections
          </h2>
          <p className="font-bold text-black/80">
            Everything you need to know about setting up virtual hangouts and activity rooms.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-[#FFFDF9] border-4 border-black rounded-lg shadow-brutal overflow-hidden transition-all"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-black uppercase text-base sm:text-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 shrink-0 text-brand-strong" />
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t-2 border-dashed border-black/10 text-sm sm:text-base font-medium text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
