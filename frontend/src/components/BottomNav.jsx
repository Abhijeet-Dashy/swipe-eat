import { NavLink } from "react-router-dom";
import { Home, Compass, Plus, Bell, User } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

const BottomNav = () => {
  const navItems = [
    { name: "Home", path: "/feed", icon: Home },
    { name: "Explore", path: "/explore", icon: Compass },
    { name: "Upload", path: "/upload", icon: Plus, isAction: true },
    { name: "Alerts", path: "/notifications", icon: Bell },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
      <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-around px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.isAction) {
            return (
              <NavLink key={item.name} to={item.path} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full blur group-hover:opacity-100 opacity-70 transition-opacity" />
                <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-orange-500 to-rose-500 rounded-full text-white shadow-lg shadow-orange-500/30 transform group-hover:scale-105 transition-transform">
                  <Icon size={24} strokeWidth={2.5} />
                </div>
              </NavLink>
            );
          }

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  "relative flex flex-col items-center justify-center w-12 h-12 transition-colors",
                  isActive ? "text-orange-500" : "text-neutral-400 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10"
                  >
                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" : ""} />
                  </motion.div>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill" 
                      className="absolute inset-0 bg-white/5 rounded-full" 
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
