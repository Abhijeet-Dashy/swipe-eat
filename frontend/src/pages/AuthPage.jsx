import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/feed");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" 
          alt="Food Background" 
          className="w-full h-full object-cover opacity-30 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative z-10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="text-3xl font-black tracking-tighter flex items-center justify-center gap-1 mb-2">
            <span className="text-orange-500">Food</span>Reel
          </div>
          <p className="text-neutral-400 text-sm">
            {isLogin ? "Welcome back, foodie." : "Join the ultimate food discovery platform."}
          </p>
        </div>

        <div className="flex bg-black/40 rounded-full p-1 mb-8">
          <button 
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${isLogin ? "bg-white text-black shadow-md" : "text-white hover:text-orange-400"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${!isLogin ? "bg-white text-black shadow-md" : "text-white hover:text-orange-400"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
            />
          )}
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
          />
          
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl py-3 mt-4 hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20"
          >
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-neutral-500 text-xs mb-4">Or continue with</p>
          <div className="flex gap-4 justify-center">
            <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
              <span className="font-bold text-white">G</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
              <span className="font-bold text-white">f</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
