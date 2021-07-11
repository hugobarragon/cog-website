import React, { memo, useRef } from "react";
import { Row, Col, Card } from "antd";
import { useMount } from "react-use";
import { gsap } from "gsap";
import ScrollTriggerPlugin from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTriggerPlugin);

function HomePage() {
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const bannerRef = useRef(null);

  const cardsData = [
    {
      id: "3d",
      imgUrl:
        "https://thumbs.gfycat.com/ThoroughFelineEnglishsetter-size_restricted.gif",
      desc: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: "draw",
      imgUrl:
        "https://blogdaarquitetura.com/wp-content/uploads/2015/04/desenho-de-quarto-blog-da-arquitetura-560x389.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: "planta",
      imgUrl:
        "https://arquitetoleandroamaral.com/wp-content/uploads/2019/12/planta-de-arquitetura.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  useMount(() => {
    if (cardsRef.current) {
      gsap.from(bannerRef.current, {
        scrollTrigger: {
          trigger: bannerRef.current,
          end: "top center",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 3,
        ease: "none",
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 3,
        ease: "none",
        stagger: 1,
        delay: 3,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top bottom",
          end: "top 60%",
          scrub: true,
        },
      });
    }
  });

  return (
    <Row
      className="second-section"
      align="middle"
      justify="center"
      gutter={[6, 24]}
    >
      <Col ref={bannerRef} span={24} className="title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </Col>
      {cardsData.map((data, i) => (
        <Col
          key={data.id}
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
          sm={24}
          md={12}
          lg={8}
          className="card-col"
        >
          <Card hoverable cover={<img alt="card" src={data.imgUrl} />}>
            {data.desc}
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default memo(HomePage);
