import './styles.css';
import { useState } from 'react';
import { MyModal } from './MyModal';

export const ImageGalleryItem = ({
  imageData: { webformatURL, tags, largeImageURL },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <div>
      <li onClick={toggleModal} className="imageGalleryItem">
        <img className="imageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
      <MyModal
        largeImage={largeImageURL}
        tags={tags}
        onClose={toggleModal}
        isOpen={isModalOpen}
      />
    </div>
  );
};
