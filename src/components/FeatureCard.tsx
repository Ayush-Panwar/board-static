import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from './animations/variants';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div 
      variants={scaleIn}
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
    >
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}