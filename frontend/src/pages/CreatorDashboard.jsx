import { BarChart3, TrendingUp, Users, DollarSign, Upload, MoreVertical } from "lucide-react";
import { categories } from "../data";

const CreatorDashboard = () => {
  return (
    <div className="min-h-full bg-black text-white pb-20 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <div>
          <h1 className="text-2xl font-bold">Creator Hub</h1>
          <p className="text-neutral-400 text-sm">Welcome back, Maria.</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-xl flex items-center gap-2 transition-colors">
          <Upload size={20} />
          <span className="font-bold hidden sm:inline">New Reel</span>
        </button>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-neutral-900/50 border border-white/5 p-4 rounded-2xl">
          <div className="flex justify-between items-start mb-2">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">Total Views</span>
            <TrendingUp size={16} className="text-green-500" />
          </div>
          <div className="text-3xl font-black mb-1">1.2M</div>
          <div className="text-xs text-green-500 bg-green-500/10 inline-block px-2 py-0.5 rounded-full">+15% vs last 28 days</div>
        </div>

        <div className="bg-neutral-900/50 border border-white/5 p-4 rounded-2xl">
          <div className="flex justify-between items-start mb-2">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">Engagement</span>
            <Users size={16} className="text-green-500" />
          </div>
          <div className="text-3xl font-black mb-1">8.4%</div>
          <div className="text-xs text-green-500 bg-green-500/10 inline-block px-2 py-0.5 rounded-full">+2.1% vs last 28 days</div>
        </div>
        
        <div className="bg-neutral-900/50 border border-white/5 p-4 rounded-2xl col-span-2">
          <div className="flex justify-between items-start mb-2">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">Est. Earnings</span>
            <DollarSign size={16} className="text-neutral-500" />
          </div>
          <div className="text-4xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">$4,250</div>
          <div className="text-xs text-neutral-400">Eligibility pending for Creator Fund</div>
        </div>
      </div>

      {/* Trending Categories Section */}
      <h2 className="text-lg font-bold mb-4">Trending in Your Niche</h2>
      <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-4 mb-8">
        {categories.slice(0, 3).map((cat, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">
                {cat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">{cat.name}</span>
                <span className="text-xs text-green-400">High Engagement</span>
              </div>
            </div>
            <BarChart3 size={16} className="text-neutral-500" />
          </div>
        ))}
      </div>

      {/* Recent Uploads */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Recent Uploads</h2>
        <button className="text-orange-500 text-sm font-semibold">View All</button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {[1, 2].map((i) => (
          <div key={i} className="bg-neutral-900 border border-white/5 rounded-xl overflow-hidden relative">
            <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">LIVE</div>
            <img 
              src={`https://images.unsplash.com/photo-${1560000000000 + i * 100000}?auto=format&fit=crop&w=300&q=80`} 
              alt="Thumbnail" 
              className="w-full aspect-[3/4] object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-3">
               <h3 className="text-sm font-bold line-clamp-2 mb-1">Spicy Noodle Challenge 🔥</h3>
               <div className="flex gap-2 text-xs text-neutral-300">
                  <span>👁️ 125K</span>
                  <span>❤️ 12K</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorDashboard;
