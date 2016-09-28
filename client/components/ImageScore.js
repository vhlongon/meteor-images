import React, {Component} from 'react';

// Creeate our image list component
// or we could destructur the param like { image: { link, title } }
// and use the props in the como like {link} and {title}
const ImageScore = (props) => {
  const {ups, downs} = props;
  const upsPercent = `${100 * (ups / (ups + downs))}%`;
  const downsPercent = `${100 * (downs / (ups + downs))}%`;
  //props.ups is the number of up votes
  //props.downs is the number of down votes
  return (
    <div>
      Ups/Downs
      <div className="progress">
        <div style={{width: upsPercent}} className="progress-bar progress-bar-success progress-bar-striped"></div>
        <div style={{width: downsPercent}} className="progress-bar progress-bar-danger progress-bar-striped"></div>
      </div>
    </div>
  );
}

export default ImageScore;
