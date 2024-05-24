import axios from 'axios';

const FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY;

export const fetchPhotos = async (userId) => {
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&user_id=${userId}&format=json&nojsoncallback=1`;
  
  try {
    const response = await axios.get(url);
    console.log('API Response:', response);
    if (response.data && response.data.photos && response.data.photos.photo) {
      const photos = response.data.photos.photo.map(photo => {
        return {
          src: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
          width: 4,  // Default value, update as needed
          height: 3, // Default value, update as needed
          title: photo.title
        };
      });
      console.log('Mapped Photos:', photos); 
      return photos;
    } else {
      console.error('Unexpected API response format', response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching photos from Flickr", error);
    return [];
  }
};
