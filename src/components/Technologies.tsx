import React from 'react';
import { Code2, Database, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, scaleIn } from './animations/variants';

interface TechCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

function TechCard({ icon, name, description }: TechCardProps) {
  return (
    <motion.div 
      variants={scaleIn}
      whileHover={{ scale: 1.05 }}
      className="flex items-start gap-4 p-6 bg-gray-800 rounded-xl"
    >
      <div className="text-blue-400">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{name}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export function Technologies() {
  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Built with Modern Tech Stack
        </motion.h3>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          <TechCard
            icon={<Code2 size={24} />}
            name="Next.js & TypeScript"
            description="Type-safe development with the best React framework for production"
          />
          <TechCard
            icon={<Database size={24} />}
            name="Convex"
            description="Real-time database with automatic sync and offline support"
          />
          <TechCard
            icon={<Zap size={24} />}
            name="Liveblocks"
            description="Collaborative features with real-time presence and conflict resolution"
          />
          <TechCard
            icon={<Palette size={24} />}
            name="Tailwind CSS"
            description="Utility-first CSS framework for rapid UI development"
          />
        </motion.div>
      </div>
    </section>
  );
}