import React, { memo } from "react";
import homeSliderJPG from "../../images/homeSlider.jpg";
import homeLaddersJPG from "../../images/homeLadders.jpg";
import { useEffect } from "react";
import { useRef } from "react";
import gsap, { Power1 } from "gsap";
import { TimelineMax } from "gsap/all";

gsap.registerPlugin(TimelineMax);

function HomePage() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      const img = imageRef.current;
      var freewayEaseTween = new TimelineMax();
      // set initial CSS autoAlpha to 0
      // GSAP handles the cross browser vendor prefixes
      freewayEaseTween
        .set(img, { backgroundSize: "150% 150%" })
        // animate CSS autoAlpha to 1
        .to(img, 2, {
          backgroundSize: "-=100% -=50%",
          autoRound: false,
          ease: Power1.easeOut,
        })
        .play();
    }
  }, []);

  return (
    <>
      <div className="home-first">
        <div style={{ position: "absolute", bottom: 75, left: 25 }}>
          <h1>
            <b>Criamos os seus sonhos</b>
          </h1>
        </div>
        <div
          className="sim"
          ref={imageRef}
          style={{
            background: `url(${homeLaddersJPG}) `,
            backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: " 150% 150%",
          }}
        />
      </div>
      <div className="home-second">
        <img alt="home-parque-gif" src={homeSliderJPG} />
      </div>
    </>
  );
}

export default memo(HomePage);
