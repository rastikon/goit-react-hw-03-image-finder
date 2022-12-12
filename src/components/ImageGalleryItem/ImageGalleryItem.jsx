import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { smallImage, largeImage } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <li className="ImageGalleryItem" onClick={this.toggleModal}>
          <img src={smallImage} className="ImageGalleryItem-image" alt="tags" />
        </li>
        {isModalOpen && (
          <Modal closeModal={this.toggleModal}>
            {' '}
            <img src={largeImage} alt="tags" />
          </Modal>
        )}
      </>
    );
  }
}
