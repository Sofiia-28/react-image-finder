import './styles.css';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className="imageGallery">
      {images.map(image => {
        return <ImageGalleryItem key={image.id} imageData={image} />;
      })}
    </ul>
  );
};
