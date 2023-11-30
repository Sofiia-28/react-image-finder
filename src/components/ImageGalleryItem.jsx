import './styles.css';
import { Component } from 'react';
import { MyModal } from './MyModal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const {
      imageData: { webformatURL, tags, largeImageURL },
    } = this.props;
    return (
      <div>
        <li onClick={this.toggleModal} className="imageGalleryItem">
          <img
            className="imageGalleryItem-image"
            src={webformatURL}
            alt={tags}
          />
        </li>
        <MyModal
          largeImage={largeImageURL}
          tags={tags}
          onClose={this.toggleModal}
          isOpen={this.state.isModalOpen}
        />
      </div>
    );
  }
}
