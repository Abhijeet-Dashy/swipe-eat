import { categories } from "../data";
import { Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ExplorePage = () => {
  const exploreImages = Array(15).fill(null).map((_, i) => (
    `https://images.unsplash.com/photo-${1540000000000 + i * 200000}?auto=format&fit=crop&w=400&q=80`
  ));

  return (
    <div className="min-h-full bg-black text-white pb-24">
      {/* Search Header */}
      <div className="sticky top-0 z-30 bg-black/60 backdrop-blur-xl p-4 pt-6 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-white/5 border border-white/10 rounded-2xl flex items-center overflow-hidden transition-all focus-within:bg-white/10 focus-within:border-white/20">
            <Search size={20} className="text-neutral-400 ml-4 group-focus-within:text-orange-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Search cravings, creators, tags..." 
              className="w-full bg-transparent py-3.5 px-3 text-sm font-medium text-white placeholder-neutral-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Categories Carousel */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Sparkles size={18} className="text-orange-400" />
            Discover
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar -mx-5 px-5">
          {categories.map((cat, i) => (
            <motion.div 
              whileTap={{ scale: 0.95 }}
              key={i} 
              className="flex-shrink-0 snap-start bg-white/[0.03] border border-white/10 rounded-3xl p-5 w-32 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.08] transition-all cursor-pointer shadow-lg hover:shadow-orange-500/10 group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{cat.icon}</span>
              <span className="text-xs font-bold tracking-wide text-neutral-300 group-hover:text-white transition-colors">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trending Grid - Masonry style */}
      <div className="px-2 mt-2">
        <h2 className="text-lg font-bold mb-4 px-3 flex items-center gap-2">
          🔥 Trending Near You
        </h2>
        <div className="grid grid-cols-3 gap-1.5 md:gap-2">
          {exploreImages.map((img, i) => {
            const isLarge = i % 7 === 0;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 10) * 0.05 }}
                whileHover={{ scale: 0.98 }}
                key={i} 
                className={`relative bg-neutral-900 rounded-xl overflow-hidden group cursor-pointer ${isLarge ? "col-span-2 row-span-2 aspect-[3/4]" : "col-span-1 aspect-square"}`}
              >
                <img src={img} alt="Explore item" className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-700 ease-out" />
                
                {/* Always-on subtle gradient, deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-5 h-5 rounded-full bg-white/20 border border-white/40 overflow-hidden shrink-0">
                       <img src={`https://i.pravatar.cc/100?img=${i+1}`} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white/90 text-[10px] font-medium truncate">{isLarge ? "Chef Maria" : "Foodie"}</span>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-bold line-clamp-1 drop-shadow-md">
                    {isLarge ? "Incredible Spicy Ramen Bowl 🔥" : "Quick Bite"}
                  </span>
                  
                  {isLarge && (
                    <div className="mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-white font-semibold">12K ❤️</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
