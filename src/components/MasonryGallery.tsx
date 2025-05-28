import { Key } from 'react';
import Masonry from 'react-masonry-css';

const MasonryGallery = ({ images }: { images: string[] }) => {
  const breakpointColumnsObj = {
    default: 3,
    768: 2,
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 py-12">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-x-6"
        columnClassName="flex flex-col space-y-6"
      >
        {images.map((src: string, index: Key) => (
          <img
            loading="lazy"
            key={index}
            src={src}
            alt={`Image ${index}`}
            className="w-full rounded-sm shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:rounded-3xl"
          />
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryGallery;
