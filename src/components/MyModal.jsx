import Modal from 'react-modal';
import './styles.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

export const MyModal = ({ largeImage, tags, onClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <img
        onClick={onClose}
        src={largeImage}
        alt={tags}
        className="modal-image"
      />
    </Modal>
  );
};
