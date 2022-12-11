import { Component } from 'react';
// import FetchImage from 'services/image-api';

export default class ImageGalleryItem extends Component {
  render() {
    const { smallImage, largeImage } = this.props;

    return (
      <div>
        <li className="ImageGalleryItem">
          <img src={smallImage} className="ImageGalleryItem-image" />
        </li>
      </div>
    );
  }
}
