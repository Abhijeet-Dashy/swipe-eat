import { categories } from "../data";
import { Search } from "lucide-react";

const ExplorePage = () => {
  const exploreImages = Array(15).fill(null).map((_, i) => (
    `https://images.unsplash.com/photo-${1540000000000 + i * 200000}?auto=format&fit=crop&w=300&q=80`
  ));

  return (
    <div className="min-h-full bg-black text-white pb-20">
      {/* Search Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-md p-4 pt-6 border-b border-white/5">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Search cravings, creators, tags..." 
            className="w-full bg-neutral-900/80 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
      </div>

      {/* Categories Carousel */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3">Discover Categories</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 snap-x no-scrollbar">
          {categories.map((cat, i) => (
            <div key={i} className="flex-shrink-0 snap-start bg-neutral-900/50 border border-white/10 rounded-2xl p-4 w-32 flex flex-col items-center justify-center gap-2 hover:bg-neutral-800 transition-colors cursor-pointer">
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-xs font-semibold">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Grid - Masonry style mockup */}
      <div className="px-1 mt-2">
        <h2 className="text-lg font-bold mb-3 px-3">Trending Near You</h2>
        <div className="grid grid-cols-3 gap-1">
          {exploreImages.map((img, i) => (
            <div 
              key={i} 
              className={`relative bg-neutral-900 group overflow-hidden ${i % 5 === 0 ? "col-span-2 row-span-2 aspect-[3/4]" : "col-span-1 aspect-square"}`}
            >
              <img src={img} alt="Explore item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                <span className="text-white text-[10px] font-bold line-clamp-1">Spicy Ramen 🔥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
