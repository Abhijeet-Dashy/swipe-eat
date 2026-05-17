import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative selection:bg-orange-500/30">
      {/* Dynamic Ambient Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 lg:px-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-black tracking-tighter flex items-center gap-1"
        >
          <span className="text-orange-500">Food</span>Reel
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <Link to="/auth" className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors">Login</Link>
          <div className="glow-border rounded-full">
            <Link to="/auth" className="px-5 py-2.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] block">
              Get Started
            </Link>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-32 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-orange-400 text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles size={14} className="text-orange-400" />
              <span>The Next Generation of Food Delivery</span>
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-6">
            Watch. Crave. <br />
            <span className="text-gradient">
              Order Instantly.
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Swipe through mouth-watering reels from top creators. See something you like? Have it delivered to your door in minutes with a single tap.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link 
              to="/feed" 
              className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Play size={20} className="fill-black group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Start Swiping</span>
            </Link>
            
            <Link 
              to="/creator" 
              className="w-full sm:w-auto px-8 py-4 glass-button rounded-full font-semibold text-lg flex items-center justify-center gap-2 group"
            >
              <span>For Creators</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Mock App Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 60, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 5 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", damping: 20 }}
          className="mt-24 relative w-full max-w-sm mx-auto perspective-1000"
        >
          {/* Glow Behind Phone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-rose-500/30 blur-[80px] rounded-full" />
          
          <div className="relative rounded-[3rem] border-[6px] border-neutral-900/80 bg-black aspect-[9/19] overflow-hidden shadow-2xl shadow-orange-900/40 transform rotate-y-[-10deg] glass-panel">
             <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80" alt="App Preview" className="w-full h-full object-cover opacity-90 scale-105" />
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30" />
                  <div className="flex flex-col gap-1">
                    <div className="w-24 h-3 bg-white/30 backdrop-blur-md rounded-full" />
                    <div className="w-16 h-2 bg-white/20 backdrop-blur-md rounded-full" />
                  </div>
                </div>
                <div className="w-full h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <div className="w-1/3 h-2 bg-white/50 rounded-full" />
                </div>
             </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;
