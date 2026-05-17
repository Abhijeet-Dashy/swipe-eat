import { reels } from "../data";
import ReelCard from "../components/ReelCard";

const FeedPage = () => {
  return (
    <div className="h-[calc(100vh-64px)] w-full overflow-y-scroll snap-y snap-mandatory bg-black no-scrollbar">
      {reels.map((reel) => (
        <ReelCard key={reel.id} reel={reel} />
      ))}
    </div>
  );
};

export default FeedPage;
