import MasonryGallery from '../../components/MasonryGallery';
import { useParams } from 'react-router-dom';
import { gallerData } from '../../constants/Images';

function Gallery() {
  const { category } = useParams();

  const photos = category ? gallerData[category] : null;

  if (!photos) {
    return (
      <div className="text-center py-[10%] text-3xl">
        {' '}
        No Images found on this category.
      </div>
    );
  }

  return (
    <div>
      <div className="text-center text-3xl py-8 bg-[#BA9E52] text-white font-pacifico">
        {photos.title}
      </div>
      <MasonryGallery images={photos.images} />
    </div>
  );
}

export default Gallery;
