import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-neutral-900 rounded-t-3xl p-6 z-50 border-t border-white/10 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-xl font-bold">Select Delivery Partner</h3>
              <button onClick={onClose} className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {/* Swiggy Card */}
              <button 
                onClick={() => handleProviderClick("swiggy")}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30 rounded-2xl hover:bg-orange-500/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">
                    S
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white font-bold text-lg">Swiggy</span>
                    <span className="text-neutral-400 text-sm">Fastest delivery in 20 mins</span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-orange-500 group-hover:bg-orange-500 transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                </div>
              </button>

              {/* Zomato Card */}
              <button 
                onClick={() => handleProviderClick("zomato")}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/30 rounded-2xl hover:bg-red-500/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg">
                    Z
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white font-bold text-lg">Zomato</span>
                    <span className="text-neutral-400 text-sm">Delivery in 35 mins</span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-red-500 group-hover:bg-red-500 transition-colors"></div>
              </button>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
               <span className="text-neutral-400">Craving {category}?</span>
               <span className="text-white font-bold">Checkout directly →</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
