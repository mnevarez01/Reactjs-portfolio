import React from 'react';
import pic1 from '../../../public/assets/pic1'


function Portfolio() {
  return (
    <>
      <h2>Alewery</h2>
      <img href='https://mighty-depths-48025.herokuapp.com/' src={pic1} alt='Alewery' />
      <p>A site that contains all beers from your local breweries! To all breweries have your beers accessible to all!</p>
      <h2>COVID Quarantainment</h2>
      <img href="https://mnevarez01.github.io/tmtg/" src={pic2} alt='Covid' />
      <p>A While facing hard times building a website that is interactive and distracting to the mind.</p>
      <h2>Alewery</h2>
      <img href="https://mnevarez01.github.io/APIWeatherInterface/" src={pic3} alt='Weather' />
      <p>Using the weather API you are able to look for weather for any city and have your searches saved.</p>
    </>
  )
}
export default Portfolio;
