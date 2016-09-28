import React, {Component} from 'react';

// Creeate our image list component
// or we could destructur the param like { image: { link, title } }
// and use the props in the como like {link} and {title}
const ImageDetail = ({image}) => {
  return (
    <li>
      <img src={image.link} />
      {image.title}
    </li>
  );
}

export default ImageDetail;
