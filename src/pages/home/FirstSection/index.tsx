import React, { memo, useRef } from "react";
import homeLaddersJPG from "../../../images/homeLadders.jpg";
import { useMount } from "react-use";
import { gsap, Power2 } from "gsap";

function FirstSection() {
  const imageContainerRef = useRef(null);
  const bannerContainerRef = useRef(null);

  useMount(() => {
    const img = imageContainerRef.current;
    const banner = bannerContainerRef.current;
    if (img && banner) {
      const gsapTimeline = gsap.timeline({ paused: false });

      // image zoom efect
      gsapTimeline
        .from(img, {
          duration: 3,
          transform: "scale(1.1)",
          ease: Power2.easeIn,
        })
        // text appear animation
        .from(
          banner,
          {
            duration: 3,
            y: -50,
            opacity: 0,
            ease: Power2.easeIn,
          },
          0,
        );
    }
  });

  return (
    <div className="first-section">
      <div className="img-container">
        <div
          className="img"
          ref={imageContainerRef}
          style={{
            backgroundImage: `url(${homeLaddersJPG}) `,
          }}
        >
          <div className="mask" />
        </div>
      </div>
      <div ref={bannerContainerRef} className="banner">
        Criamos os seus sonhos
      </div>
    </div>
  );
}

export default memo(FirstSection);
