import { useState, useRef } from "react";
import { Heart, MessageCircle, Share2, Bookmark, CheckCircle2 } from "lucide-react";
import OrderModal from "./OrderModal";
import { motion } from "framer-motion";

const ReelCard = ({ reel }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative h-full w-full snap-start bg-black flex justify-center items-center overflow-hidden">
      <video
        ref={videoRef}
        src={reel.video}
        autoPlay
        muted
        loop
        playsInline
        onClick={togglePlay}
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Top Ambient Light (Soft) */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Bottom Gradient for Text Legibility (Deep and Smooth) */}
      <div className="absolute bottom-0 w-full h-72 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

      {/* Right Interaction Sidebar */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-10">
        <motion.button 
          whileTap={{ scale: 0.8 }}
          className="flex flex-col items-center gap-1 group" 
          onClick={() => setIsLiked(!isLiked)}
        >
          <div className="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full group-hover:bg-white/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <Heart size={26} className={`transition-colors ${isLiked ? "fill-rose-500 text-rose-500" : "text-white group-hover:text-rose-400"}`} />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">{reel.likes}</span>
        </motion.button>
        
        <motion.button whileTap={{ scale: 0.8 }} className="flex flex-col items-center gap-1 group">
          <div className="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full group-hover:bg-white/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <MessageCircle size={26} className="text-white group-hover:text-blue-400 transition-colors" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">{reel.comments}</span>
        </motion.button>

        <motion.button 
          whileTap={{ scale: 0.8 }}
          className="flex flex-col items-center gap-1 group" 
          onClick={() => setIsSaved(!isSaved)}
        >
          <div className="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full group-hover:bg-white/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <Bookmark size={26} className={`transition-colors ${isSaved ? "fill-amber-400 text-amber-400" : "text-white group-hover:text-amber-300"}`} />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">Save</span>
        </motion.button>

        <motion.button whileTap={{ scale: 0.8 }} className="flex flex-col items-center gap-1 group">
          <div className="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full group-hover:bg-white/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <Share2 size={26} className="text-white group-hover:text-green-400 transition-colors" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">{reel.shares}</span>
        </motion.button>
      </div>

      {/* Left Info Section */}
      <div className="absolute left-4 bottom-8 right-24 flex flex-col gap-4 z-10">
        {/* Creator Info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={reel.creator.avatar} 
              alt={reel.creator.name} 
              className="w-11 h-11 rounded-full border-2 border-orange-500 object-cover shadow-[0_0_10px_rgba(249,115,22,0.5)]"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-base drop-shadow-md">{reel.creator.name}</span>
              {reel.creator.verified && <CheckCircle2 size={16} className="text-blue-400 fill-blue-400/20" />}
            </div>
            <span className="text-white/80 text-xs font-medium">{reel.creator.followers}</span>
          </div>
          <button className="ml-2 px-4 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-xs font-bold backdrop-blur-md transition-colors">
            Follow
          </button>
        </div>

        {/* Video Title & Tags */}
        <div className="pr-2">
          <h2 className="text-white font-medium text-sm leading-snug line-clamp-2 drop-shadow-md">{reel.title}</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {reel.tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-full text-orange-400 text-xs font-bold border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Order Now CTA */}
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOrderModalOpen(true)}
          className="mt-2 w-full max-w-[220px] bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-shadow border border-white/10"
        >
          <span className="text-lg">🍔</span>
          <span className="tracking-wide">Order Now</span>
        </motion.button>
      </div>

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
        category={reel.category} 
      />
    </div>
  );
};

export default ReelCard;
