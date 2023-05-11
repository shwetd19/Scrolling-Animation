import React, { Component } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: true,
      lerp: 0.1,
      repeat: true,
      direction: "horizontal",
      initPosition: { x: 0, y: 0 },
      getDirection: true,
      getSpeed: true,
      class: "is-reveal",
    });

    this.scroll.on("scroll", (args) => {
      const { x, y } = args.scroll;
    });
  }

  componentWillUnmount() {
    this.scroll.destroy();
  }

  render() {
    const imageSources = ["./car-2.png", "./car-2.png"];
    const images = imageSources.map((source, index) => (
      <div className="images-stack__item" key={index}>
        <img
          src={source}
          className="images-stack__image"
          alt={`Car ${index}`}
        />
      </div>
    ));

    return (
      <div>
        <div className="hero-section">
          <div
            id="scroll-container"
            className="scroll-container"
            data-scroll-container
          >
            <div className="images-stack" data-scroll-section>
              {images}
            </div>
          </div>
        </div>
        <div className="scrollbar">
          <div className="scrollbar-track"></div>
          <div className="scrollbar-thumb"></div>
        </div>
        <div className="progress-bar">
          <div className="profile-wrapper">
            <img src="./profile.png" alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
