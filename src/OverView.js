import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";

const OverView = ({ hotelName, stars, location, rating, votes }) => (
  <div className="overview">
    <HotelName hotelName={hotelName} />
    <GetStars stars={stars} />
    <OverViewLocation location={location} />
    <OverviewRating rating={rating} votes={votes} />
  </div>
);

const GetStars = ({ stars }) => {
  let starArray = [];
  for (let i = 0; i < stars; i++) {
    starArray.push(<RiStarSFill className="overview__stars__icon" key={i} />);
  }
  return <div className="overview__stars">{starArray}</div>;
};

const OverviewRating = ({ rating, votes }) => (
  <>
    <div className="overview__rating">
      <div className="overview__rating__average">{rating} </div>
      <span className="overview__rating__count">{votes} votes</span>
    </div>
  </>
);

const OverViewLocation = ({ location }) => (
  <>
    <div className="overview__location">
      <ImLocation className="overview__location__icon" />
      <span className="overview__location__name">{location}</span>
    </div>
  </>
);

const HotelName = ({ hotelName }) => (
  <div className="overview__heading">{hotelName}</div>
);

export default OverView;
