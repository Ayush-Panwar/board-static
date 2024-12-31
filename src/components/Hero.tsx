import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { GradientText } from "./ui/GradientText";

export function Hero() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left side content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 lg:text-left text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <GradientText>Collaborate</GradientText> on ideas in real-time
          </h2>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            The most intuitive collaborative whiteboard platform for teams to
            brainstorm, plan, and create together — all in real-time.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row lg:justify-start justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href="https://board-app-kohl.vercel.app" target="_blank">
              <Button className="flex items-center justify-center gap-2">
                Try Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://github.com/Ayush-Panwar/board-app" target="_blank">
              <Button variant="secondary">View on Github</Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-400" />
              Real-time sync
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-purple-400" />
              Unlimited boards
            </div>
          </motion.div>
        </motion.div>

        {/* Right side video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 z-10" />
            <div className="aspect-[19/9] bg-gray-900 relative">
              <video
                className="w-full h-full object-cover opacity-90"
                autoPlay
                muted
                loop
                playsInline
                src="/Board_hero.mp4"
              >
                Your browser does not support the video tag.
              </video>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium z-20">
                Live collaboration
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
