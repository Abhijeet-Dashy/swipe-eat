import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const MobileLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-black text-white overflow-hidden relative">
      <main className="flex-1 w-full h-full overflow-y-auto pb-16">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default MobileLayout;
