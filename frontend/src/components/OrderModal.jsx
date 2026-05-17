import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const OrderModal = ({ isOpen, onClose, category }) => {
  if (!isOpen) return null;

  const handleProviderClick = (provider) => {
    let url = "";
    if (provider === "swiggy") {
      url = `https://www.swiggy.com/search?query=${category}`;
    } else {
      url = `https://www.zomato.com/search?q=${category}`;
    }
    window.open(url, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85vw] sm:w-[400px] bg-neutral-900/95 backdrop-blur-xl rounded-l-3xl p-6 z-50 border-l border-white/10 shadow-[auto_-20px_50px_rgba(0,0,0,0.8)] flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-white text-xl font-black tracking-tight">Checkout With</h3>
              <button onClick={onClose} className="p-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {/* Swiggy Card */}
              <button 
                onClick={() => handleProviderClick("swiggy")}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30 rounded-2xl hover:bg-orange-500/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center font-black text-white text-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover:scale-105 transition-transform">
                    S
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white font-bold text-lg">Swiggy</span>
                    <span className="text-neutral-400 text-xs font-medium">Fastest delivery in 20 mins</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-orange-500/50 group-hover:bg-orange-500/20 transition-colors flex items-center justify-center">
                  <ExternalLink size={14} className="text-orange-500" />
                </div>
              </button>

              {/* Zomato Card */}
              <button 
                onClick={() => handleProviderClick("zomato")}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/30 rounded-2xl hover:bg-red-500/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center font-black text-white text-xl shadow-[0_0_15px_rgba(239,68,68,0.4)] group-hover:scale-105 transition-transform">
                    Z
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white font-bold text-lg">Zomato</span>
                    <span className="text-neutral-400 text-xs font-medium">Delivery in 35 mins</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-red-500/50 group-hover:bg-red-500/20 transition-colors flex items-center justify-center">
                  <ExternalLink size={14} className="text-red-500" />
                </div>
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center bg-white/5 -mx-6 -mb-6 p-6 rounded-bl-3xl">
               <span className="text-neutral-400 text-sm font-medium">Craving <span className="text-white font-bold">{category || "this"}</span>?</span>
               <span className="text-white font-bold text-sm bg-white/10 px-3 py-1.5 rounded-full border border-white/10">Order Now →</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
