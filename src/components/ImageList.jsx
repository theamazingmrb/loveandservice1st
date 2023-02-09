import React from 'react';
import { ImgDiv } from './Container.styled';
// Import all images from the folder as an object with image filenames as keys
function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../assets/headshots/', false, /\.(png|jpe?g|svg)$/));
const ImageList = () => {
  // Get an array of all keys in the images object
  const imageKeys = Object.keys(images);

  return (
    <div>
      {imageKeys.map((key) => {
        // Get the path of the image
        const imagePath = images[key];

        return (
          <div key={key}>
            <ImgDiv src={imagePath} alt={key} />
            <p>{key}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;