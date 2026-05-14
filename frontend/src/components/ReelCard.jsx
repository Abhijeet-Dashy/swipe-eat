import { motion } from "framer-motion";

const ReelCard = ({ reel }) => {
//   const handleSwipe = () => {
//     window.location.href = `https://www.swiggy.com/search?query=${reel.category}`;
//   };
  return (
    <div>
      <motion.div
        drag="x"
        onDragEnd={(e, info) => {
          if (info.offset.x > 120) {
            handleSwipe();
          }
        }}
        className="relative h-screen w-full snap-start bg-black"
      >
        <video
          src={reel.video}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-10 left-5 text-white">
          <h1 className="text-3xl font-bold">{reel.title}</h1>
          <p className="text-lg">Swipe right to order</p>
        </div>
        // Instead of a complex swipe handler, try a dedicated button
        <button
          onClick={() =>
            window.open(
              `https://www.swiggy.com/search?query=${reel.category}`,
              "_blank",
            )
          }
          className="absolute right-4 bottom-20 bg-orange-500 p-3 rounded-full"
        >
          🍔 Order
        </button>
      </motion.div>
    </div>
  );
};

export default ReelCard;
