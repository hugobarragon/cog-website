import React, { useState } from "react";
import { Layout, Menu, Row, Col, Dropdown, Grid } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useMount } from "react-use";
import { gsap, Power2 } from "gsap";
import ScrollTriggerPlugin from "gsap/ScrollTrigger";
import { HomeOutlined, AuditOutlined } from "@ant-design/icons";

gsap.registerPlugin(ScrollTriggerPlugin);

const { Header } = Layout;
const { useBreakpoint } = Grid;

const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    link: "/home",
    title: "Home",
  },
  {
    key: "projects",
    icon: <AuditOutlined />,
    link: "/projects",
    title: "Projetos",
  },
  {
    key: "about",
    icon: null,
    link: "/about",
    title: "Sobre",
  },
];

function TopBarHeader() {
  const screens = useBreakpoint();
  const [activeTopbarScroll, setAciveTopBarScroll] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState("home");

  useMount(() => {
    const gsapTimeline = gsap.timeline({});

    // appear effect
    gsapTimeline.from(
      ".site-header",
      {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: Power2.easeInOut,
      },
      0,
    );

    // topbar fill
    gsapTimeline.to(
      ".site-header",
      {
        backgroundColor: "white",
        boxShadow: "black 0px -12px 18px 12px",
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: ".site-header",
          start: "top -50",
          end: "100%",
          scrub: true,
        },
        onStart: () => {
          setAciveTopBarScroll(true);
        },
        onReverseComplete: () => {
          setAciveTopBarScroll(false);
        },
      },
      0,
    );
  });

  return (
    <Header className="site-header">
      <Row justify="space-between">
        <Col
          span={4}
          className={`logo ${activeTopbarScroll ? "text-to-black" : ""}`}
        >
          <Link to="/home">COGarquitectos</Link>
        </Col>
        {screens.sm ? (
          <Col span={6}>
            <Menu
              mode="horizontal"
              onClick={({ key }) => {
                setSelectedMenuKey(key);
              }}
              selectedKeys={[selectedMenuKey]}
            >
              {menuItems.map((data) => (
                <Menu.Item
                  key={data.key}
                  className={
                    activeTopbarScroll && selectedMenuKey !== data.key
                      ? "text-to-black"
                      : ""
                  }
                >
                  <Link to={data.link}>
                    {data.icon}
                    &nbsp;&nbsp;
                    <b>{data.title}</b>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Col>
        ) : (
          <Col span={2} className="mobile-btn">
            <Dropdown
              overlay={
                <Menu
                  onClick={({ key }) => {
                    setSelectedMenuKey(key);
                  }}
                  selectedKeys={[selectedMenuKey]}
                >
                  {menuItems.map((data) => (
                    <Menu.Item key={data.key}>
                      <Link to={data.link}>
                        {data.icon}
                        &nbsp;&nbsp;
                        <b>{data.title}</b>
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomRight"
            >
              <MenuOutlined
                className={activeTopbarScroll ? "text-to-black" : ""}
              />
            </Dropdown>
          </Col>
        )}
      </Row>
    </Header>
  );
}

export default TopBarHeader;
