import { userProfile } from "../data";
import { Settings, Grid, Bookmark, Heart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("likes");

  // Mock grid data
  const gridItems = Array(12).fill(null).map((_, i) => (
    `https://images.unsplash.com/photo-${1550000000000 + i * 100000}?auto=format&fit=crop&w=400&q=80`
  ));

  return (
    <div className="min-h-full bg-black text-white pb-24 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-center p-4 pt-6 border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-20">
        <h1 className="text-xl font-black tracking-tight">{userProfile.handle}</h1>
        <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10">
          <Settings size={20} className="text-white" />
        </button>
      </div>

      {/* Profile Info */}
      <div className="p-6 flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative mb-5"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-full blur-md opacity-50" />
          <img 
            src={userProfile.avatar} 
            alt={userProfile.name} 
            className="relative w-28 h-28 rounded-full border-4 border-black p-1 object-cover bg-gradient-to-tr from-orange-500 to-rose-500"
          />
        </motion.div>
        
        <h2 className="text-2xl font-black mb-1">{userProfile.name}</h2>
        <p className="text-neutral-400 text-sm mb-6 text-center max-w-xs font-medium leading-relaxed">
          {userProfile.bio}
        </p>
        
        <div className="flex justify-center gap-10 w-full mb-8">
          <div className="flex flex-col items-center group">
            <span className="font-black text-xl group-hover:text-orange-400 transition-colors">{userProfile.stats.following}</span>
            <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-1">Following</span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="font-black text-xl group-hover:text-orange-400 transition-colors">{userProfile.stats.followers}</span>
            <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-1">Followers</span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="font-black text-xl group-hover:text-orange-400 transition-colors">{userProfile.stats.likes}</span>
            <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mt-1">Likes</span>
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/10 text-white py-3 rounded-xl font-semibold transition-all shadow-lg active:scale-95">
            Edit Profile
          </button>
          <button className="flex-1 bg-gradient-to-r from-orange-500/10 to-rose-500/10 hover:from-orange-500/20 hover:to-rose-500/20 text-orange-400 border border-orange-500/30 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(249,115,22,0.1)] active:scale-95">
            Creator Dashboard
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 px-2">
        <button 
          onClick={() => setActiveTab("likes")}
          className={`flex-1 flex justify-center py-4 relative transition-colors ${activeTab === "likes" ? "text-white" : "text-neutral-600 hover:text-neutral-400"}`}
        >
          <Grid size={22} className={activeTab === "likes" ? "text-orange-500" : ""} />
          {activeTab === "likes" && (
            <motion.div layoutId="tab-indicator" className="absolute bottom-0 w-1/2 h-0.5 bg-orange-500 rounded-t-full shadow-[0_-2px_10px_rgba(249,115,22,0.5)]" />
          )}
        </button>
        <button 
          onClick={() => setActiveTab("saved")}
          className={`flex-1 flex justify-center py-4 relative transition-colors ${activeTab === "saved" ? "text-white" : "text-neutral-600 hover:text-neutral-400"}`}
        >
          <Bookmark size={22} className={activeTab === "saved" ? "text-orange-500" : ""} />
          {activeTab === "saved" && (
            <motion.div layoutId="tab-indicator" className="absolute bottom-0 w-1/2 h-0.5 bg-orange-500 rounded-t-full shadow-[0_-2px_10px_rgba(249,115,22,0.5)]" />
          )}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5 sm:gap-1 mt-0.5">
        {gridItems.map((img, i) => (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            key={i} 
            className="aspect-[3/4] bg-neutral-900 relative group overflow-hidden cursor-pointer"
          >
            <img src={img} alt="Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <div className="flex items-center gap-1 font-bold drop-shadow-lg text-sm">
                <span className="text-white">1.2K</span>
                <Heart size={14} className="fill-white text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
