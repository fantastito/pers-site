import React, { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery'

import { fetchPhotos } from '../flickrAPI';
import { shuffleArray } from '../utils/shuffle';;

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const userId = '200388503@N03';
    const getPhotos = async () => {
      const photosFromFlickr = await fetchPhotos(userId);
      const shuffledPhotos = shuffleArray(photosFromFlickr);
      setPhotos(shuffledPhotos);
    };
    getPhotos();
  }, []);

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-4 pb-8 font-bold text-center">PHOTOGRAPHY</h1>
      {photos.length === 0 ? (
        <p className='text-xl text-center'>📷 Well this is embarrasing... 🤷🏼‍♂️</p>
      ) : (
        <Gallery photos={photos} />
      )}
    </div>
  );
};

export default Photos;
