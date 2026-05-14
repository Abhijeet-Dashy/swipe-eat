import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* Background Gradient */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-orange-600/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 relative z-10">
        <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <span className="text-orange-500">Food</span>Reel
        </div>
        <div className="flex gap-4">
          <Link to="/auth" className="px-4 py-2 text-sm font-semibold hover:text-orange-400 transition-colors">Login</Link>
          <Link to="/auth" className="px-4 py-2 text-sm font-bold bg-white text-black rounded-full hover:bg-neutral-200 transition-colors">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-wide backdrop-blur-md">
            The New Era of Food Discovery
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Watch. Crave. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Order Instantly.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Discover mouth-watering food reels from top creators, and order exactly what you see with a single tap via Swiggy or Zomato.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/feed" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
            >
              <Play size={20} className="fill-white" />
              Explore Reels
            </Link>
            <Link 
              to="/creator" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Become a Creator
            </Link>
          </div>
        </motion.div>

        {/* Mock App Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24 relative w-full max-w-sm mx-auto perspective-1000"
        >
          <div className="relative rounded-[2.5rem] border-[8px] border-neutral-900 bg-black aspect-[9/19] overflow-hidden shadow-2xl shadow-orange-500/20 transform rotate-y-[-10deg] rotate-x-[5deg]">
             <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80" alt="App Preview" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="w-3/4 h-8 bg-white/20 backdrop-blur-md rounded-lg mb-2"></div>
                <div className="w-1/2 h-4 bg-white/20 backdrop-blur-md rounded-lg mb-4"></div>
                <div className="w-full h-12 bg-orange-500 rounded-xl"></div>
             </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;
