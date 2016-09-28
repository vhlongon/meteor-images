import React, {Component} from 'react';

// Creeate our image list component
// or we could destructur the param like { image: { link, title } }
// and use the props in the como like {link} and {title}
const ImageDetail = ({image}) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={image.link} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {image.title}
        </h4>
      </div>
    </li>
  );
}

export default ImageDetail;
