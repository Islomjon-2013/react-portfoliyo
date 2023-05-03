import React from "react";
import Img from "../images/me.jpeg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about__box">
          <div className=" about__image">
            <img src={Img} alt="" />
          </div>
          <div className=" about__inner">
            <div className="section-title  ">
              {" "}
              <h2>About</h2>
            </div>

            <h3>Khulkar Siddikova</h3>
            <p>
              I am Khulkar.I am from Uzbekistan.I am married.I have three
              children.I have been living in New York for 4 years now. I have a
              higher education. I studied at the institute in the field of
              defectology and worked in a kindergarten for 5 years.After coming
              to America, I decided to change my profession.I have taken coding
              lessons and I really enjoy what I do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
