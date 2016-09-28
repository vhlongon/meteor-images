import React, {Component} from 'react';
import ImageDetail from './ImageDetail';


// Creeate our image list component
const ImageList = (props) => {
  // {image} is the same as image={image} with ES6 we can shorten that
  // first we filter out image objs that are actually albums and then build the return html with the valid ones
  const RenderedImages = props.images.filter(image => !image.is_album)
    .map( (image, i) => <ImageDetail image={image} key={i} /> );

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
}

export default ImageList;
