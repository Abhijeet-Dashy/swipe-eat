import { userProfile } from "../data";
import { Settings, Grid, Bookmark } from "lucide-react";
import { useState } from "react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("likes");

  // Mock grid data
  const gridItems = Array(12).fill(null).map((_, i) => (
    `https://images.unsplash.com/photo-${1550000000000 + i * 100000}?auto=format&fit=crop&w=300&q=80`
  ));

  return (
    <div className="min-h-full bg-black text-white pb-20">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white/10">
        <h1 className="text-xl font-bold">{userProfile.handle}</h1>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Settings size={24} />
        </button>
      </div>

      {/* Profile Info */}
      <div className="p-6 flex flex-col items-center">
        <img 
          src={userProfile.avatar} 
          alt={userProfile.name} 
          className="w-24 h-24 rounded-full border-2 border-orange-500 p-1 object-cover mb-4"
        />
        <h2 className="text-2xl font-bold">{userProfile.name}</h2>
        <p className="text-neutral-400 text-sm mt-1 mb-4 text-center max-w-xs">{userProfile.bio}</p>
        
        <div className="flex justify-center gap-8 w-full mb-6">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{userProfile.stats.following}</span>
            <span className="text-xs text-neutral-500">Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{userProfile.stats.followers}</span>
            <span className="text-xs text-neutral-500">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{userProfile.stats.likes}</span>
            <span className="text-xs text-neutral-500">Likes</span>
          </div>
        </div>

        <div className="flex gap-3 w-full">
          <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg font-semibold transition-colors">
            Edit Profile
          </button>
          <button className="flex-1 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 border border-orange-500/30 py-2 rounded-lg font-semibold transition-colors">
            Creator Dashboard
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10">
        <button 
          onClick={() => setActiveTab("likes")}
          className={`flex-1 flex justify-center py-4 border-b-2 transition-colors ${activeTab === "likes" ? "border-orange-500 text-orange-500" : "border-transparent text-neutral-500 hover:text-white"}`}
        >
          <Grid size={24} />
        </button>
        <button 
          onClick={() => setActiveTab("saved")}
          className={`flex-1 flex justify-center py-4 border-b-2 transition-colors ${activeTab === "saved" ? "border-orange-500 text-orange-500" : "border-transparent text-neutral-500 hover:text-white"}`}
        >
          <Bookmark size={24} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 mt-1">
        {gridItems.map((img, i) => (
          <div key={i} className="aspect-[3/4] bg-neutral-900 relative group overflow-hidden">
            <img src={img} alt="Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-bold">1.2K 🤍</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
