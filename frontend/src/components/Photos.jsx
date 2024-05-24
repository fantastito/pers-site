import React from 'react';
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    width: 1,
    height: 1,
  },
  // Add more photo objects here
];

function Photos() {
  return (
    <div>
      <div id="photos-content" className="bg-white text-black pt-4 sm:pt-4 md:pt-4 lg:pt-4 px-5 pb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">PHOTOGRAPHY</h1>
      </div>
      <Gallery photos={photos} />
    </div>
  );
}

export default Photos;
