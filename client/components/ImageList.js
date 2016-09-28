import React, {Component} from 'react';
import ImageDetail from './ImageDetail';


const IMAGES = [
  {title: 'Pen', link: 'http://dummyimage.com/600x400' },
  {title: 'Pine Tree', link: 'http://dummyimage.com/600x500' },
  {title: 'Mug', link: 'http://dummyimage.com/600x600' }
]


// Creeate our image list component
const ImageList = (props) => {
  // {image} is the same as image={image} with ES6 we can shorten that
  const RenderedImages = IMAGES.map( (image) => <ImageDetail image={image} /> );

  return (
    <ul>
      {RenderedImages}
    </ul>
  );
}

export default ImageList;
