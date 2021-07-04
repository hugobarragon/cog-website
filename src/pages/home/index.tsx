import React, { memo } from "react";
import homeSliderJPG from "../../images/homeSlider.jpg";
import homeLaddersJPG from "../../images/homeLadders.jpg";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap, Power1 } from "gsap";

function HomePage() {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (imageContainerRef.current) {
      const img = imageContainerRef.current;
      var freewayEaseTween = gsap.timeline({ paused: false });
      // set initial CSS autoAlpha to 0
      // GSAP handles the cross browser vendor prefixes
      freewayEaseTween
        .set(img, { transform: "scale(1.1)" })
        // animate CSS to tranform 1 smooth
        .to(img, 5, {
          transform: "scale(1)",
          autoRound: false,
          ease: Power1.easeOut,
        })
        .play();
    }
  }, []);

  return (
    <div className="home-page">
      <div className="first-section">
        <div className="img-container">
          <div
            className="img"
            ref={imageContainerRef}
            style={{
              backgroundImage: `url(${homeLaddersJPG}) `,
            }}
          />
        </div>
        <div className="banner">Criamos os seus sonhos</div>
      </div>
      <div className="second-section">
        <img alt="home-parque-gif" src={homeSliderJPG} />
      </div>
    </div>
  );
}

export default memo(HomePage);
