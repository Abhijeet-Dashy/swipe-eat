import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/feed");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden selection:bg-orange-500/30">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        
        {/* Abstract shapes or mesh */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
      </div>

      <Link to="/" className="absolute top-6 left-6 z-20 text-neutral-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
        <ArrowLeft size={20} />
        Back to Home
      </Link>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", damping: 25 }}
        className="w-full max-w-md glass-panel rounded-[2rem] p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="text-3xl font-black tracking-tighter flex items-center justify-center gap-1 mb-2">
            <span className="text-orange-500">Food</span>Reel
          </div>
          <p className="text-neutral-400 text-sm font-medium">
            {isLogin ? "Welcome back, foodie." : "Join the ultimate food discovery platform."}
          </p>
        </div>

        <div className="flex bg-black/40 rounded-full p-1.5 mb-8 border border-white/5 relative">
          <motion.div 
            className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            animate={{ left: isLogin ? "6px" : "calc(50%)" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <button 
            className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-colors relative z-10 ${isLogin ? "text-black" : "text-white hover:text-orange-400"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-colors relative z-10 ${!isLogin ? "text-black" : "text-white hover:text-orange-400"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glow-border rounded-xl">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:bg-white/10 transition-all font-medium backdrop-blur-md"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="glow-border rounded-xl">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:bg-white/10 transition-all font-medium backdrop-blur-md"
            />
          </div>
          
          <div className="glow-border rounded-xl">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:bg-white/10 transition-all font-medium backdrop-blur-md"
            />
          </div>
          
          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-xs font-semibold text-neutral-400 hover:text-orange-400 transition-colors">Forgot Password?</a>
            </div>
          )}
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold rounded-xl py-4 mt-2 shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
          >
            {isLogin ? "Log In" : "Create Account"}
          </motion.button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-5">Or continue with</p>
          <div className="flex gap-4 justify-center">
            <button className="w-12 h-12 rounded-full glass-button flex items-center justify-center hover:scale-110 transition-all">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full glass-button flex items-center justify-center hover:scale-110 transition-all">
               <img src="https://www.svgrepo.com/show/475647/apple-color.svg" alt="Apple" className="w-5 h-5 invert" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
