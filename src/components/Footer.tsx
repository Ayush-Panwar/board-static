import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SocialLink } from "./ui/SocialLink";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400">© 2024 Boardy. All rights reserved.</p>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SocialLink
              href="https://github.com/Ayush-Panwar"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/ayush-panwar-93856521b/"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://x.com/AyushPanwartwt"
              icon={Twitter}
              label="Twitter"
            />
            <SocialLink
              href="mailto:ayushpanwar717@gmail.com"
              icon={Mail}
              label="Email"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
