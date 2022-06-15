import "./scss/main.scss";
import OverView from "./OverView";
import Gallery from "./Gallery";
import { FiSearch, FiMap } from "react-icons/fi";
import { ImBookmark } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { BsFillChatFill, BsFillHouseFill } from "react-icons/bs";

//dummy data
const review = [
  {
    title:
      "Maecenas facilisis eget metus et viverra. Aenean et faucibus mi, vel congue mauris.",
    name: "Harry",
    date: "8th May 2020",
    rating: "10",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis euismod metus",
    name: "Sara",
    date: "15th June 20202",
    rating: "9.4",
  },
];

const hotelFacilities = [
  " Poolside bar",
  "Water purification system",
  "Swimming pool / Jacuzzi",
  "Free Wifi",
  "Outside catering service",
  "Pets allowed",
  "Sunset boat trip",
  "24-Hour room service",
];

const hotelImgName = ["hotel_night", "hotel_water", "hotel_bed"];

const recommenderUserName = ["Jack", "Harry", "Sam", "Sara"];

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={require("./img/jiwaCh.jpg")} alt="jiwaCh" className="logo" />
        <div className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels"
          />
          <FiSearch className="search__btn" />
        </div>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <ImBookmark className="user-nav__icon-box__icon" />
            <span className="user-nav__icon-box__notification">11</span>
          </div>
          <div className="user-nav__icon-box">
            <BsFillChatFill className="user-nav__icon-box__icon" />
            <span className="user-nav__icon-box__notification">2</span>
          </div>
          <div className="user-nav__user-box">
            <img
              src={require("./img/jiwa_profile.jpg")}
              alt=""
              className="user-nav__user-box__photo"
            />
            <span className="user-nav__user-box__user-name">Jiwa</span>
          </div>
        </nav>
      </header>
      <div className="content">
        <nav className="sidebar">
          <li className="sidebar__list">
            <a href="#" className="sidebar__list__item">
              <BsFillHouseFill className="sidebar__list__item_icon" />
              <span>Hotel</span>
            </a>
            <a href="#" className="sidebar__list__item">
              <IoMdAirplane className="sidebar__list__item_icon" />
              <span>Flight</span>
            </a>
            <a href="#" className="sidebar__list__item">
              <FaCarSide className="sidebar__list__item_icon" />
              <span>Car Rental</span>
            </a>
            <a href="#" className="sidebar__list__item">
              <FiMap className="sidebar__list__item_icon" />
              <span>Tours</span>
            </a>
          </li>
          <div className="sidebar__created"> © 2022 created by Jiwa</div>
        </nav>
        <main className="hotel-view">
          <Gallery imageNames={hotelImgName} />
          <OverView
            hotelName={"Sunset Lodge"}
            stars={5}
            location={"Cabo San Lucas"}
            rating={9.8}
            votes={521}
          />

          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                tristique nisi, viverra egestas dolor. Aenean in neque lorem.
                Nulla consequat elit at fermentum finibus. Morbi id mauris
                volutpat quam rhoncus dignissim eu id ex. Donec fringilla, ex ac
                sagittis porta, felis dolor mollis felis, at sagittis dui lorem
                in ante.
              </p>
              <p className="paragraph">
                Etiam lectus augue, molestie a convallis id, congue sit amet
                est. Proin accumsan, mauris porttitor aliquam aliquam, magna
                enim vestibulum ipsum, et vestibulum nisi eros eget risus. Nunc
                sed lectus ac lacus cursus sollicitudin.
              </p>
              <HotelFacilities facilities={hotelFacilities} />
              <div className="recommend">
                <p className="recommend__count">
                  Travis and 8 other friends recommend this hotel.
                </p>
                <RecommenderPhotos userName={recommenderUserName} />
              </div>
            </div>
            <div className="user-review">
              {review.map(({ title, name, date, rating }) => (
                <Review title={title} name={name} date={date} rating={rating} />
              ))}
              <button className="__btn-inline">
                <span className="__text">Show all</span>
                <AiOutlineArrowRight className="__icon" />
              </button>
            </div>
          </div>
          <CallToAction />
        </main>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="cta">
      <h2 className="cta__book-now">
        Good news! We have 4 rooms for your selected date.
      </h2>
      <button className="cta__btn">
        <span className="cta__btn__visible">Book now</span>
        <span className="cta__btn__invisible">Only 4 rooms left</span>
      </button>
    </div>
  );
};

const HotelFacilities = ({ facilities }) => {
  return (
    <ul className="list">
      {facilities.map((facility) => (
        <li className="list__item">{facility}</li>
      ))}
    </ul>
  );
};
const Review = ({ title, name, date, rating }) => {
  return (
    <div className="review">
      <blockquote className="review__text">{title}</blockquote>
      <figcaption className="review__user">
        <img
          src={require(`./img/${name}.jpg`)}
          alt=""
          className="review__user__photo"
        />
        <div className="review__user__info">
          <p className="review__user__info__name">{name}</p>
          <p className="review__user__info__date">{date}</p>
        </div>
        <div className="review__rating">{rating}</div>
      </figcaption>
    </div>
  );
};

const RecommenderPhotos = ({ userName }) => (
  <div className="recommend__friends">
    {userName.map((user, key) => (
      <img
        src={require(`./img/${user}.jpg`)}
        alt=""
        className="recommend__photo"
        key={key}
      />
    ))}
  </div>
);

export default App;
