import { NavLink } from "react-router-dom";
import { Home, Compass, PlusSquare, Bell, User } from "lucide-react";
import clsx from "clsx";

const BottomNav = () => {
  const navItems = [
    { name: "Home", path: "/feed", icon: Home },
    { name: "Explore", path: "/explore", icon: Compass },
    { name: "Upload", path: "/upload", icon: PlusSquare },
    { name: "Notifications", path: "/notifications", icon: Bell },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center justify-around z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                "flex flex-col items-center justify-center w-full h-full text-xs gap-1 transition-colors",
                isActive ? "text-orange-500" : "text-neutral-400 hover:text-white"
              )
            }
          >
            <Icon size={24} strokeWidth={2.5} />
            <span className="scale-90 origin-bottom">{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default BottomNav;
