import { BarChart3, TrendingUp, Users, DollarSign, Upload, Sparkles } from "lucide-react";
import { categories } from "../data";
import { motion } from "framer-motion";

const CreatorDashboard = () => {
  return (
    <div className="min-h-full bg-black text-white pb-24 p-4 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-2 relative z-10">
        <div>
          <h1 className="text-2xl font-black tracking-tight flex items-center gap-2">
            Creator Hub
            <Sparkles size={18} className="text-orange-400" />
          </h1>
          <p className="text-neutral-400 text-sm font-medium mt-1">Welcome back, Maria.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white hover:bg-neutral-200 text-black p-2 sm:px-4 rounded-xl flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          <Upload size={20} />
          <span className="font-bold hidden sm:inline">New Reel</span>
        </motion.button>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 gap-3 mb-8 relative z-10">
        <div className="glass-panel p-5 rounded-[1.5rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex justify-between items-start mb-3 relative z-10">
            <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Total Views</span>
            <div className="p-1.5 bg-green-500/10 rounded-lg">
              <TrendingUp size={16} className="text-green-400" />
            </div>
          </div>
          <div className="text-3xl font-black mb-2 relative z-10 tracking-tight">1.2M</div>
          <div className="text-[10px] font-bold text-green-400 bg-green-500/10 inline-block px-2 py-1 rounded-md relative z-10 border border-green-500/20">
            +15% vs last 28 days
          </div>
        </div>

        <div className="glass-panel p-5 rounded-[1.5rem] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex justify-between items-start mb-3 relative z-10">
            <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Engagement</span>
            <div className="p-1.5 bg-blue-500/10 rounded-lg">
              <Users size={16} className="text-blue-400" />
            </div>
          </div>
          <div className="text-3xl font-black mb-2 relative z-10 tracking-tight">8.4%</div>
          <div className="text-[10px] font-bold text-green-400 bg-green-500/10 inline-block px-2 py-1 rounded-md relative z-10 border border-green-500/20">
            +2.1% vs last 28 days
          </div>
        </div>
        
        <div className="glow-border rounded-[1.5rem] col-span-2">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-[1.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-[40px] pointer-events-none" />
            <div className="flex justify-between items-start mb-2 relative z-10">
              <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Est. Earnings</span>
              <div className="p-1.5 bg-orange-500/10 rounded-lg">
                <DollarSign size={16} className="text-orange-400" />
              </div>
            </div>
            <div className="text-5xl font-black mb-2 relative z-10 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-500">
              $4,250
            </div>
            <div className="text-xs font-medium text-orange-400 relative z-10 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Eligibility pending for Creator Fund
            </div>
          </div>
        </div>
      </div>

      {/* Trending Categories Section */}
      <h2 className="text-lg font-bold mb-4 relative z-10">Trending in Your Niche</h2>
      <div className="glass-panel rounded-2xl p-2 mb-8 relative z-10">
        {categories.slice(0, 3).map((cat, i) => (
          <div key={i} className="flex justify-between items-center p-3 hover:bg-white/[0.03] rounded-xl transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-white/90">{cat.name}</span>
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-wide">High Demand</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-colors">
              <BarChart3 size={14} className="text-neutral-400 group-hover:text-orange-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Uploads */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <h2 className="text-lg font-bold">Recent Uploads</h2>
        <button className="text-orange-400 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">View All</button>
      </div>
      
      <div className="grid grid-cols-2 gap-3 relative z-10">
        {[1, 2].map((i) => (
          <motion.div 
            whileHover={{ y: -4 }}
            key={i} 
            className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg"
          >
            <div className="absolute top-2 left-2 bg-rose-500 text-white text-[9px] font-black tracking-widest px-2 py-1 rounded-md z-10 shadow-lg">LIVE</div>
            <img 
              src={`https://images.unsplash.com/photo-${1560000000000 + i * 100000}?auto=format&fit=crop&w=400&q=80`} 
              alt="Thumbnail" 
              className="w-full aspect-[3/4] object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-3">
               <h3 className="text-sm font-bold line-clamp-2 mb-1.5 drop-shadow-md">Spicy Noodle Challenge 🔥</h3>
               <div className="flex gap-2 text-[10px] font-bold text-white/90">
                  <span className="bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-white shadow-sm border border-white/10">👁️ 125K</span>
                  <span className="bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-white shadow-sm border border-white/10">❤️ 12K</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreatorDashboard;
