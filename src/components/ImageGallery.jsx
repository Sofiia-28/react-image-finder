import './styles.css';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="imageGallery">
      {images
      .flatMap(imagesArr => imagesArr)
      .map(image => {
          return <ImageGalleryItem key={image.id} imageData={image} />;
        })
      }
    </ul>
  );
};
