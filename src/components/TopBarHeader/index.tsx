import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function TopBarHeader() {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Row justify="space-between" align="middle">
        <Col span={2}>
          <Link to="/home">
            <h1>
              <b style={{ color: "white", fontSize: "20pt" }}>COGarquitectos</b>
            </h1>
          </Link>
        </Col>
        <Col span={6}>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home">
              <Link to="/home">
                <b>Home</b>
              </Link>
            </Menu.Item>
            <Menu.Item key="projects">
              <Link to="/projects">
                <b>Projetos</b>
              </Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">
                <b>Sobre</b>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}

export default TopBarHeader;
