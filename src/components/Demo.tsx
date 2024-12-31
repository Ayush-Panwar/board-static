import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./animations/variants";

interface DemoVideoProps {
  title: string;
  description: string;
  videoUrl: string;
}

function DemoVideo({ title, description, videoUrl }: DemoVideoProps) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl overflow-hidden"
    >
      <div className="aspect-[19/9] bg-gray-700">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          src={videoUrl}
        ></video>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

export function Demo() {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          See Board in Action
        </motion.h3>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <DemoVideo
            title="Real-time Drawing"
            description="Watch how multiple users can draw and interact simultaneously."
            videoUrl="/drawing.mp4"
          />
          <DemoVideo
            title="Collaborative Planning"
            description="See how teams use Boardy for project planning and brainstorming."
            videoUrl="/collaborate.mp4"
          />
        </motion.div>
      </div>
    </section>
  );
}
