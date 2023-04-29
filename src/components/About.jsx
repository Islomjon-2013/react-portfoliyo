import React from "react";
import Img from "./girl.png";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__box">
          <div className=" about__image">
            <img src={Img} alt="" />
          </div>
          <div className=" about__inner">
            <h2>About</h2>
            <h3>Khulkar Siddikova</h3>
            <p>
              I am Khulkar.I am from Uzbekistan.I am married.I have three
              children.I have been living in New York for 4 years now. I have a
              higher education. I studied at the institute in the field of
              defectology and worked in a kindergarten for 5 years.After coming
              to America, I decided to change my profession.I have taken coding
              lessons and I really enjoy what I do.
            </p>
            <div className="about__skills">
              <h2>Skills</h2>
              <div className="box__list-group">
                <ul>
                  <li>
                    <span>HTML 5</span>
                  </li>
                  <li>
                    {" "}
                    <span>CSS3</span>{" "}
                  </li>
                  <li>
                    <span>JAVA SCRIPT</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span> BOOTSTRAP 5</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <span>REACT.JS</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span>GITHUB</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span> TERMINAL</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span> EDITOR</span>{" "}
                  </li>
                </ul>
                <ul>
                  {" "}
                  <li>
                    {" "}
                    <span>FIGMA</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span> NETLIFY</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span>BEM</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span> TAILWIND.CSS</span>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <span>MATERIAL UI</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span> API</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span> REDUX</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span>REDUX TOOLKIT</span>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    {" "}
                    <span>RESPONSIVE</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span>FLEXBOX</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span> SEO</span>{" "}
                  </li>
                  <li>
                    <span>HOSTING</span>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
