import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Sparkles, Bot, MessageSquare, Zap, Brain, Shield, Lock, LineChart, Activity, BarChart2, PieChart, TrendingUp, Database, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = ({ onGetStarted }) => {
  const containerRef = useRef(null);
  const graphRef = useRef(null);
  const graph2Ref = useRef(null);
  const graph3Ref = useRef(null);

  useEffect(() => {
    // Animated background effect
    const container = containerRef.current;
    const particles = container.querySelectorAll('.particle');
    
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        x: 'random(-200, 200)',
        y: 'random(-200, 200)',
        rotation: 'random(-720, 720)',
        scale: 'random(0.5, 1.5)',
        duration: 'random(4, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: i * 0.1
      });
    });

    // Multiple animated graph effects
    if (graphRef.current) {
      gsap.to(graphRef.current, {
        y: -20,
        rotation: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    if (graph2Ref.current) {
      gsap.to(graph2Ref.current, {
        x: 15,
        rotation: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5
      });
    }

    if (graph3Ref.current) {
      gsap.to(graph3Ref.current, {
        y: 15,
        rotation: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        delay: 1
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-purple-900 to-indigo-950 relative">
      {/* Enhanced animated background particles */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className={`particle absolute w-2 h-2 rounded-full ${
            i % 4 === 0 ? 'bg-purple-400/30' :
            i % 4 === 1 ? 'bg-blue-400/30' :
            i % 4 === 2 ? 'bg-indigo-400/30' :
            'bg-pink-400/30'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(2px)',
            boxShadow: i % 4 === 0 ? '0 0 20px rgba(168, 85, 247, 0.4)' :
                       i % 4 === 1 ? '0 0 20px rgba(96, 165, 250, 0.4)' :
                       i % 4 === 2 ? '0 0 20px rgba(99, 102, 241, 0.4)' :
                       '0 0 20px rgba(244, 114, 182, 0.4)'
          }}
        />
      ))}

      {/* Multiple floating graph decorations */}
      <div 
        ref={graphRef}
        className="absolute right-10 top-10 opacity-30"
        style={{ transform: 'rotate(-15deg)' }}
      >
        <svg width="150" height="80" viewBox="0 0 150 80">
          <path
            d="M0 60 Q 37.5 20, 75 40 T 150 30"
            fill="none"
            stroke="rgba(147, 197, 253, 0.7)"
            strokeWidth="4"
            style={{ filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.5))' }}
          />
        </svg>
      </div>

      <div 
        ref={graph2Ref}
        className="absolute left-10 top-20 opacity-30"
      >
        <BarChart2 size={100} className="text-purple-400/50" style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.4))' }} />
      </div>

      <div 
        ref={graph3Ref}
        className="absolute right-20 bottom-20 opacity-30"
      >
        <PieChart size={80} className="text-indigo-400/50" style={{ filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.4))' }} />
      </div>

      <div className="absolute left-1/4 bottom-1/4 opacity-20">
        <Database size={40} className="text-blue-400/50" style={{ filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.4))' }} />
      </div>

      <div className="absolute right-1/3 top-1/4 opacity-20">
        <Cpu size={50} className="text-purple-400/50" style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))' }} />
      </div>

      <div className="h-full flex flex-col md:flex-row items-center justify-between p-8 gap-8">
        {/* Enhanced Hero Section */}
        <motion.div 
          className="flex-1 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-12 h-12 text-blue-400 animate-pulse" />
            <Activity className="w-8 h-8 text-purple-400 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mb-6 animate-pulse drop-shadow-[0_0_25px_rgba(147,197,253,0.3)] text-center">
            Social Pulse AI
          </h1>
          <p className="text-blue-200 text-xl md:text-2xl mb-4 drop-shadow-[0_0_10px_rgba(147,197,253,0.2)] text-center">
            Experience the future of conversation with our advanced AI-powered platform
          </p>
          <p className="text-purple-200 text-lg md:text-xl mb-8 drop-shadow-[0_0_10px_rgba(168,85,247,0.2)] text-center">
            Analyze • Understand • Optimize
          </p>
          <div className="flex justify-center">
            <motion.button
              onClick={onGetStarted}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(147, 197, 253, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 text-blue-300 rounded-2xl hover:bg-blue-400/20 transition-all duration-300 inline-flex items-center gap-3 border border-blue-400/30 shadow-[0_0_15px_rgba(147,197,253,0.2)]"
            >
              <Bot className="w-6 h-6" />
              Start Chatting Now
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div 
          className="flex-1 grid grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="glass-card p-6 rounded-2xl hover:bg-blue-400/10 transition-colors duration-300 shadow-[0_0_20px_rgba(96,165,250,0.15)]"
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(96, 165, 250, 0.25)' }}
          >
            <Brain className="text-blue-400 w-10 h-10 mb-3 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
            <h3 className="text-xl font-bold text-blue-300 mb-2">AI Analysis</h3>
            <p className="text-blue-200 text-sm">Deep learning powered insights</p>
          </motion.div>

          <motion.div 
            className="glass-card p-6 rounded-2xl hover:bg-purple-400/10 transition-colors duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(168, 85, 247, 0.25)' }}
          >
            <TrendingUp className="text-purple-400 w-10 h-10 mb-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            <h3 className="text-xl font-bold text-purple-300 mb-2">Smart Analytics</h3>
            <p className="text-purple-200 text-sm">Real-time data visualization</p>
          </motion.div>

          <motion.div 
            className="glass-card p-6 rounded-2xl hover:bg-indigo-400/10 transition-colors duration-300 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(99, 102, 241, 0.25)' }}
          >
            <Shield className="text-indigo-400 w-10 h-10 mb-3 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Secure & Private</h3>
            <p className="text-indigo-200 text-sm">Enterprise-grade protection</p>
          </motion.div>

          <motion.div 
            className="glass-card p-6 rounded-2xl hover:bg-blue-400/10 transition-colors duration-300 shadow-[0_0_20px_rgba(96,165,250,0.15)]"
            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(96, 165, 250, 0.25)' }}
          >
            <Zap className="text-blue-400 w-10 h-10 mb-3 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
            <h3 className="text-xl font-bold text-blue-300 mb-2">Lightning Fast</h3>
            <p className="text-blue-200 text-sm">Instant insights & analysis</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
