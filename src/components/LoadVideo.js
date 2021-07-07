import React from 'react';
import video1 from '../videos/video.mp4';
import video2 from '../videos/video.webm';

const LoadVideo = () => {
  return (
    <div className='bgVideo'>
      <video className='bgVideo__content' autoPlay loop muted>
        <source src={video1} />
        <source src={video2} />
        Your Browser Doesn't support The Video
      </video>
    </div>
  );
};

export default LoadVideo;
