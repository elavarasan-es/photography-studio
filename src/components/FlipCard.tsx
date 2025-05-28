import { motion } from 'framer-motion';
import { useState } from 'react';

interface Card {
  imageTitle: string;
  image: string;
  backTitle: string;
  backText: string;
}

interface FlipCardProps {
  card: Card;
}

export default function FlipCard({ card }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(prev => !prev);
  };

  return (
    <div
      className="w-full h-[20rem]"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => window.innerWidth > 768 && setFlipped(true)}
      onMouseLeave={() => window.innerWidth > 768 && setFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className="h-full w-full flex flex-col">
            <h2 className="text-white text-3xl font-bold absolute z-10 p-2 w-full text-center">
              {card.imageTitle}
            </h2>
            <img
              src={card.image}
              alt="Front"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-black text-white rounded-xl flex flex-col items-center justify-center p-4 text-center"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <h2 className="text-xl font-semibold mb-2">{card.backTitle}</h2>
          <p className="text-sm">{card.backText}</p>
        </div>
      </motion.div>
    </div>
  );
}
