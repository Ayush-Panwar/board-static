import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Technologies } from './components/Technologies';
import { Demo } from './components/Demo';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-6 py-16">
        <Navigation />
        <Hero />
      </header>
      <Features />
      <Technologies />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;