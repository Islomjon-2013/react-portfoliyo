import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Header = () => {
  return (
    <div className="header__wraper" id="home">
      <div className="main__info">
        <h1>
          The world of programming is <br /> one of the most beautiful worlds.
        </h1>
        <ReactTypingEffect
          className="typed"
          text={["FRONT END WEB DEVELOPER", " REACT DEVELOPER!!!"]}
        />
        <br />
        <ReactTypingEffect
          text={[" FRONT END WEB DEVELOPER", "REACT DEVELOPER!!!"]}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={i % 2 === 0 ? { color: "white" } : {}}
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Header;
