import { useState } from 'react';
import { lightbox } from './data';
import './styles.css';

const images = lightbox;

const App = () => {
  const [lightBoxDisplay, setLightBoxDisplay ] = useState(false);
  const [imageToShow, setImageToShow] = useState('');

  const showImage = (image) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(image);
    
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const imageCards = images.map((image, index) => {
    return (
      <img key={index} className='image-card' src={image} onClick={() => showImage(image)} />
    )
  });
  
  return (
    <div className="container">
      <h1>Hello World !</h1>
      <div className='image'>{imageCards}</div>
      { lightBoxDisplay 
        ? 
        <div id="lightbox">
          <img src={imageToShow} id='lightbox-img' alt="" />
        </div>
        : '' }
    </div>
  );
};

// https://medium.com/swlh/creating-a-simple-lightbox-from-scratch-in-react-caea84f90960

export default App;
