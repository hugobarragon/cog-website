import React, { useState } from "react";
import { Layout, Menu, Row, Col, Dropdown, Grid } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useMount, useWindowScroll } from "react-use";
import { gsap, Power2 } from "gsap";
import { HomeOutlined, AuditOutlined } from "@ant-design/icons";

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
  const [selectedMenuKey, setSelectedMenuKey] = useState("home");
  const { y } = useWindowScroll();

  const scrolling = y > 0;

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
  });

  return (
    <Header
      className={`site-header ${scrolling ? "site-header-scrolling" : ""}`}
    >
      <Row justify="space-between">
        <Col span={4} className={`logo ${scrolling ? "text-to-black" : ""}`}>
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
                    scrolling && selectedMenuKey !== data.key
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
              <MenuOutlined className={scrolling ? "text-to-black" : ""} />
            </Dropdown>
          </Col>
        )}
      </Row>
    </Header>
  );
}

export default TopBarHeader;
