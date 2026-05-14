import { useState, useRef, useEffect } from "react";
import { Heart, MessageCircle, Share2, Bookmark, CheckCircle2 } from "lucide-react";
import OrderModal from "./OrderModal";
import { motion } from "framer-motion";

const ReelCard = ({ reel }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Intersection observer could be added here to play/pause based on visibility
  
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
    <div className="relative h-full w-full snap-start bg-neutral-950 flex justify-center items-center">
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
      
      {/* Top Gradient */}
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Bottom Gradient for Text Legibility */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Right Interaction Sidebar */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-10">
        <button className="flex flex-col items-center gap-1" onClick={() => setIsLiked(!isLiked)}>
          <div className="p-2 bg-black/20 backdrop-blur-md rounded-full">
            <Heart size={28} className={isLiked ? "fill-red-500 text-red-500" : "text-white"} />
          </div>
          <span className="text-white text-xs font-semibold">{reel.likes}</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <div className="p-2 bg-black/20 backdrop-blur-md rounded-full">
            <MessageCircle size={28} className="text-white" />
          </div>
          <span className="text-white text-xs font-semibold">{reel.comments}</span>
        </button>

        <button className="flex flex-col items-center gap-1" onClick={() => setIsSaved(!isSaved)}>
          <div className="p-2 bg-black/20 backdrop-blur-md rounded-full">
            <Bookmark size={28} className={isSaved ? "fill-yellow-500 text-yellow-500" : "text-white"} />
          </div>
          <span className="text-white text-xs font-semibold">Save</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="p-2 bg-black/20 backdrop-blur-md rounded-full">
            <Share2 size={28} className="text-white" />
          </div>
          <span className="text-white text-xs font-semibold">{reel.shares}</span>
        </button>
      </div>

      {/* Left Info Section */}
      <div className="absolute left-4 bottom-8 right-20 flex flex-col gap-3 z-10">
        {/* Creator Info */}
        <div className="flex items-center gap-2">
          <img 
            src={reel.creator.avatar} 
            alt={reel.creator.name} 
            className="w-10 h-10 rounded-full border border-white/20 object-cover"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-sm">{reel.creator.name}</span>
              {reel.creator.verified && <CheckCircle2 size={14} className="text-blue-400 fill-blue-400/20" />}
            </div>
            <span className="text-white/80 text-xs">{reel.creator.followers}</span>
          </div>
          <button className="ml-2 px-3 py-1 border border-white/40 rounded-full text-white text-xs font-semibold backdrop-blur-sm">
            Follow
          </button>
        </div>

        {/* Video Title & Tags */}
        <div>
          <h2 className="text-white font-semibold text-base line-clamp-2">{reel.title}</h2>
          <div className="flex gap-2 mt-1">
            {reel.tags.map(tag => (
              <span key={tag} className="text-orange-400 text-sm font-medium">{tag}</span>
            ))}
          </div>
        </div>

        {/* Order Now CTA */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOrderModalOpen(true)}
          className="mt-2 w-full max-w-[200px] bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
        >
          <span>🍔 Order Now</span>
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
