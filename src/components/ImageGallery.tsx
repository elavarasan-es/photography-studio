import 'lightgallery/css/lightgallery.css';
import LightGallery from 'lightgallery/react';

type Props = {
  images: string[];
};

export default function ImageGallery({ images }: Props) {
  return (
    <LightGallery speed={500}>
      {images.map((src, idx) => (
        <a
          href={src}
          key={idx}
          className="w-40 h-40 m-2 inline-block rounded shadow hover:opacity-80 transition"
        >
          <img
            src={src}
            className="w-full h-full object-cover rounded"
          />
        </a>
      ))}
    </LightGallery>
  );
}
