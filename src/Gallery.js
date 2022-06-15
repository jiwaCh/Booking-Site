import React from "react";

const Gallery = ({ imageNames }) => {
  return (
    <div className="gallery">
      {imageNames.map((hotelName, key) => (
        <HotelImage name={hotelName} key={key} />
      ))}
    </div>
  );
};

const HotelImage = ({ name }) => {
  return (
    <figure className="gallery__item">
      <img
        src={require(`./img/${name}.jpg`)}
        alt=""
        className="gallery__item__photo"
      ></img>
    </figure>
  );
};

export default Gallery;
