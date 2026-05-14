import ReelCard from "./components/ReelCard";
import { reels } from "./data";
import "./index.css";

function App() {
  return (
    <>
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {reels.map((reel) => (
        <ReelCard key={reel.id} reel={reel} />
      ))}
    </div>
    </>
  );
}

export default App;
