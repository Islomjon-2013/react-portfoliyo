import React from "react";

const Skills = () => {
  return (
    <div className="skill" id="skills">
      <div className="container">
        <div className="section-title">
          <h2 className="text-center text-light">Skills</h2>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <h2 className="text-center skill-title">
              My Skills and Experiences
            </h2>
            <div className="about__skills">
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
                    <li>
                      {" "}
                      <span>REACT.JS</span>{" "}
                    </li>
                    <li>
                      {" "}
                      <span>GITHUB</span>{" "}
                    </li>
                  </li>
                </ul>

                <ul>
                  <li>
                    {" "}
                    <span> TERMINAL</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span> EDITOR</span>{" "}
                  </li>{" "}
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
                  <li>
                    {" "}
                    <span>RESPONSIVE</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span>FLEXBOX</span>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div>
              <div class="bar">
                <div class="info">
                  <span>HTML</span>
                  <span>95%</span>
                </div>
                <div class="line-html"></div>
              </div>
              <div class="bar">
                <div class="info">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div class="line-css"></div>
              </div>
              <div class="bar">
                <div class="info">
                  <span>JAVA SCRIPT</span>
                  <span>80%</span>
                </div>
                <div class="line-java-script"></div>
              </div>

              <div class="bar">
                <div class="info">
                  <span>React</span>
                  <span>85%</span>
                </div>
                <div class="react"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
