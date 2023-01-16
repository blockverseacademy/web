import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadImageComp = ({ alt,height,width,src, className, data }) => (
  <div>
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src} // use normal <img> attributes as props
      width={width}
      className={className}
      />
    <span>{data}</span>
  </div>
);

export default LazyLoadImageComp;