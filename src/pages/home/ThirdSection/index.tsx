import React, { memo, useRef } from "react";
import { useMount } from "react-use";
import { gsap } from "gsap";
import ScrollTriggerPlugin from "gsap/ScrollTrigger";
import homeSliderJPG from "../../../images/homeSlider.jpg";

gsap.registerPlugin(ScrollTriggerPlugin);

function HomePage() {
  const bannerRef = useRef(null);

  useMount(() => {
    if (bannerRef.current) {
      gsap.from(bannerRef.current, {
        opacity: 0,
        y: 50,
        duration: 3,
        ease: "none",
        stagger: 1,
        delay: 3,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top bottom",
          end: "top 60%",
          scrub: true,
        },
      });
    }
  });

  return (
    <div
      className="third-section"
      style={{ backgroundImage: `url(${homeSliderJPG})` }}
    >
      <div className="mask">
        <div ref={bannerRef} className="title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </div>
      </div>
    </div>
  );
}

export default memo(HomePage);
