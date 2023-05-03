import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IMAGE1 from "../images/cards.png";
import IMAGE2 from "../images/figma.png";
import IMAGE3 from "../images/forecast.png";
import IMAGE4 from "../images/login.png";
import IMAGE5 from "../images/movie.png";
import IMAGE6 from "../images/muslim.png";
import IMAGE7 from "../images/timer.png";
import IMAGE8 from "../images/weather.png";
import IMAGE9 from "../images/animal.png";
import IMAGE10 from "../images/children.png";
import IMAGE11 from "../images/interest.png";
import IMAGE12 from "../images/kubik.png";
const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="work" id="work">
      <div className="container">
        <div className="section-title">
          <h2>My Work</h2>
        </div>
        <Slider {...settings}>
          <div className="col">
            <a href="https://expandingcardfile.netlify.app">
              <img src={IMAGE1} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://nimble-pastelito-bb35b8.netlify.app">
              <img src={IMAGE2} alt="" />
            </a>
          </div>

          <div className="col">
            <a href="https://rainbow-pony-33809f.netlify.app/">
              <img src={IMAGE3} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://fabulous-salmiakki-5e8053.netlify.app">
              <img src={IMAGE4} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://react-moviessamar.netlify.app">
              {" "}
              <img src={IMAGE5} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://muslimcalendar.netlify.app">
              <img src={IMAGE6} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://stopwatchtimerfile.netlify.app">
              <img src={IMAGE7} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://stellular-bonbon-7dc336.netlify.app/">
              <img src={IMAGE8} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://ovozlisliderbllll.netlify.app">
              <img src={IMAGE9} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://genuine-cactus-142c33.netlify.app/">
              <img src={IMAGE10} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://checkedbutton.netlify.app">
              <img src={IMAGE11} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="https://chic-brioche-30349d.netlify.app">
              <img src={IMAGE12} alt="" />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Work;
