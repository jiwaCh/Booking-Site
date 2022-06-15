import "./scss/main.scss";
import OverView from "./OverView";
import Gallery from "./Gallery";
import { FiSearch, FiMap } from "react-icons/fi";
import { ImBookmark } from "react-icons/im";
import { FaCarSide } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { BsFillChatFill, BsFillHouseFill } from "react-icons/bs";

//dummy data
const notificationAlert = { bookmark: 11, text: 3 };
const currentUsername = "Jiwa Chhetri";
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

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.",
  "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam",
];
const hotelImgName = ["hotel_night", "hotel_water", "hotel_bed"];

const recommenderUserName = ["Jack", "Harry", "Sam", "Sara"];

const recommend = { recommendBy: "Travis", totalRecommender: 5 };

const App = () => {
  return (
    <div className="container">
      <header class="header">
        <img src={require(`./img/jiwaCh.jpg`)} alt="" class="logo" />
        <SearchBar />
        <nav class="user-nav">
          <Notification
            bookmark={notificationAlert.bookmark}
            text={notificationAlert.text}
            currentUsername={currentUsername}
          />
        </nav>
      </header>

      <div class="content">
        <SideBar />
        <main class="hotel-view">
          <Gallery imageNames={hotelImgName} />
          <OverView
            hotelName={"Sunset Lodge"}
            stars={5}
            location={"Cabo San Lucas"}
            rating={9.8}
            votes={521}
          />

          <div class="detail">
            <div class="description">
              {paragraphs.map((paragraph) => (
                <p class="paragraph">{paragraph}</p>
              ))}
              <HotelFacilities facilities={hotelFacilities} />
              <div class="recommend">
                <Recommend
                  recommendBy={recommend.recommendBy}
                  totalRecommender={recommend.totalRecommender}
                />
                <RecommenderPhotos userName={recommenderUserName} />
              </div>
            </div>

            <div class="user-reviews">
              {review.map(({ title, name, date, rating }) => (
                <Review title={title} name={name} date={date} rating={rating} />
              ))}
              <button class="btn-inline">
                Show all <span>&rarr;</span>
              </button>
            </div>
          </div>
          <CallToAction />
        </main>
      </div>
    </div>
  );
};

export default App;

const SearchBar = () => (
  <form action="#" class="search">
    <input type="text" class="search__input" placeholder="Search hotels" />
    <button class="search__button">
      <FiSearch className="search__icon" />
    </button>
  </form>
);

const Notification = ({ bookmark, text, currentUsername }) => (
  <>
    <div class="user-nav__icon-box">
      <ImBookmark className="user-nav__icon" />
      <span class="user-nav__notification">{bookmark}</span>
    </div>
    <div class="user-nav__icon-box">
      <BsFillChatFill className="user-nav__icon" />
      <span class="user-nav__notification">{text}</span>
    </div>
    <div class="user-nav__user">
      <img
        src={require("./img/jiwa_profile.jpg")}
        alt=""
        class="user-nav__user-photo"
      />
      <span class="user-nav__user-name">{currentUsername}</span>
    </div>
  </>
);

const Recommend = ({ recommendBy, totalRecommender }) => (
  <p class="recommend__count">
    {recommendBy} and {totalRecommender} other friends recommend this hotel.
  </p>
);

const CallToAction = () => {
  return (
    <div class="cta">
      <h2 class="cta__book-now">
        Good news! We have 4 free rooms for your selected dates!
      </h2>
      <button class="btn">
        <span class="btn__visible">Book now</span>
        <span class="btn__invisible">Only 4 rooms left</span>
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

const SideBar = () => (
  <nav class="sidebar">
    <ul class="side-nav">
      <li class="side-nav__item side-nav__item--active">
        <a href="#" class="side-nav__link">
          <BsFillHouseFill className="side-nav__icon" />
          <span>Hotel</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <IoMdAirplane className="side-nav__icon" />
          <span>Flight</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <FaCarSide className="side-nav__icon" />
          <span>Car rental</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <FiMap className="side-nav__icon" />
          <span>Tours</span>
        </a>
      </li>
    </ul>
    <div class="legal">© 2022 created by Jiwa</div>
  </nav>
);

const Review = ({ title, name, date, rating }) => {
  return (
    <div className="review">
      <blockquote className="review__text">{title}</blockquote>
      <figcaption className="review__user">
        <img
          src={require(`./img/${name}.jpg`)}
          alt=""
          className="review__photo"
        />
        <div className="review__user-box">
          <p className="review__user-name">{name}</p>
          <p className="review__user-date">{date}</p>
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
