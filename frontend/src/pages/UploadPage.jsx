import { useState } from "react";
import { UploadCloud, Image as ImageIcon, X } from "lucide-react";
import { categories } from "../data";

const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="min-h-full bg-black text-white pb-20 p-4">
      <h1 className="text-2xl font-bold mb-6 pt-2">New Reel</h1>

      {/* Upload Area */}
      <div 
        className={`w-full aspect-[4/3] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center mb-6 transition-colors ${dragActive ? "border-orange-500 bg-orange-500/10" : "border-white/20 bg-neutral-900/50"}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrag}
      >
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
          <UploadCloud size={32} className={dragActive ? "text-orange-500" : "text-neutral-400"} />
        </div>
        <p className="font-bold text-lg mb-1">Select Video</p>
        <p className="text-neutral-500 text-sm mb-4">or drag and drop file</p>
        <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full text-sm font-semibold transition-colors">
          Browse Files
        </button>
      </div>

      {/* Form Details */}
      <div className="flex flex-col gap-5">
        <div>
          <label className="text-sm font-semibold text-neutral-400 mb-2 block">Caption</label>
          <textarea 
            placeholder="Describe your dish... #tags" 
            className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all min-h-[100px]"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-neutral-400 mb-2 block">Food Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${selectedCategory === cat.name ? "bg-orange-500 border-orange-500 text-white" : "bg-transparent border-white/20 text-neutral-400 hover:border-white/50"}`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-neutral-400 mb-2 block">Thumbnail</label>
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
            <div className="w-24 h-32 flex-shrink-0 border border-white/20 rounded-xl bg-neutral-900 flex flex-col items-center justify-center gap-2 text-neutral-500 snap-start cursor-pointer hover:bg-white/5 transition-colors">
              <ImageIcon size={24} />
              <span className="text-[10px] font-semibold uppercase">Upload</span>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-24 h-32 flex-shrink-0 border border-white/10 rounded-xl bg-neutral-900 snap-start overflow-hidden relative">
                <img src={`https://images.unsplash.com/photo-${1550000000000 + i * 50000}?auto=format&fit=crop&w=150&q=80`} alt="thumb" className="w-full h-full object-cover opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Publish Button */}
      <div className="fixed bottom-16 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl py-4 shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-transform">
          Publish Reel
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
