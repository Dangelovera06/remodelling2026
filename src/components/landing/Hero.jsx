import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 31, seconds: 59 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else {
          return { ...prev, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return `${timeLeft.hours}hrs ${timeLeft.minutes}mins ${timeLeft.seconds}secs`;
  };

  return (
    <BeamsBackground intensity="medium">
      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#006eff]/70" /> Full-Service Monetization
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white/90">
              Turn Your{' '}
              <span className="bg-gradient-to-r from-[#006eff] via-white to-[#006eff] bg-clip-text text-transparent">
                Social Media Audience
              </span>
              {' '}Into Revenue
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              We Build Your Course, Sales Funnel & Everything You Need to Monetize Your Knowledge A-Z
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-balance text-lg text-white/80 md:text-xl"
          >
            Done-for-you course creation, sales funnels, email automation, and launch strategy — We handle everything so you can focus on your audience
          </motion.p>

          {/* Placeholder Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 mb-8 md:mb-10 max-w-4xl mx-auto w-full"
          >
            <div className="relative rounded-2xl border-2 border-[#006eff]/30 bg-gradient-to-br from-[#006eff]/10 to-transparent p-12 sm:p-16 md:p-24 backdrop-blur-sm">
              <div className="text-center text-white/40 text-xl sm:text-2xl md:text-3xl font-medium">
                Hero Visual Placeholder
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4 md:gap-5 mb-6 md:mb-8 px-4"
          >
            <RainbowButton
              onClick={() => {
                if (window.fbq) {
                  window.fbq('track', 'Lead', {
                    content_name: 'Main Hero CTA Click',
                    content_category: 'CTA Button'
                  });
                }
                window.open('#', '_blank');
              }}
              className="w-full sm:w-auto text-base sm:text-lg md:text-xl lg:text-2xl px-10 sm:px-14 md:px-20 lg:px-28 py-6 sm:py-7 md:py-9 lg:py-11 h-auto"
            >
              Apply Today
            </RainbowButton>
            
            {/* Countdown Timer */}
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg">
              <span className="font-semibold text-white/80">
                Limited spots available:
              </span>
              <span className="font-extrabold tabular-nums bg-gradient-to-r from-[#006eff] via-white to-[#006eff] bg-clip-text text-transparent">
                {formatTime()}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </BeamsBackground>
  );
}
