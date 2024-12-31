import React from 'react';
import { Users, Zap, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { staggerContainer } from './animations/variants';

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Key Features
        </motion.h3>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<Users className="w-8 h-8 text-blue-400" />}
            title="Real-time Collaboration"
            description="Work together with your team in real-time, seeing changes instantly as they happen."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-blue-400" />}
            title="Lightning Fast"
            description="Built with performance in mind, ensuring smooth experience even with multiple users."
          />
          <FeatureCard
            icon={<Share2 className="w-8 h-8 text-blue-400" />}
            title="Easy Sharing"
            description="Share your boards with a simple link and control access permissions."
          />
        </motion.div>
      </div>
    </section>
  );
}