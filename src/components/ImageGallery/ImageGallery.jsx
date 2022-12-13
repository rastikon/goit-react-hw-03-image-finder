import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map(hit => (
        <ImageGalleryItem
          key={hit.id}
          alt={hit.tags}
          smallImage={hit.webformatURL}
          largeImage={hit.largeImageURL}
        />
      ))}
    </ul>
  );
}
