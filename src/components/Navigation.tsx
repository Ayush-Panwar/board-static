import React from "react";
import { Github } from "lucide-react";

export function Navigation() {
  return (
    <nav className="flex justify-between items-center mb-16">
      <h1 className="text-2xl font-bold">Board</h1>
      <div className="flex gap-6">
        <a href="#features" className="hover:text-blue-400 transition-colors">
          Features
        </a>
        <a
          href="#technologies"
          className="hover:text-blue-400 transition-colors"
        >
          Tech Stack
        </a>
        <a href="#demo" className="hover:text-blue-400 transition-colors">
          Demo
        </a>
        <a
          href="https://github.com/Ayush-Panwar/board-app"
          target="_blank"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
        >
          <Github size={20} />
          GitHub
        </a>
      </div>
    </nav>
  );
}
