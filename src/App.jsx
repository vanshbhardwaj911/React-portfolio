import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-700 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10 h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
