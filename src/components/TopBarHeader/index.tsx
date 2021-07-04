import React from "react";
import { Layout, Menu, Row, Col, Dropdown, Grid } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const menu = (
  <Menu defaultSelectedKeys={["home"]}>
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
);

function TopBarHeader() {
  const screens = useBreakpoint();
  return (
    <Header className="site-header">
      <Row justify="space-between" align="middle">
        <Col span={2} className="logo">
          <Link to="/home">COGarquitectos</Link>
        </Col>
        {screens.sm ? (
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
        ) : (
          <Col span={2} className="mobile-btn">
            <Dropdown overlay={menu} placement="bottomRight">
              <MenuOutlined />
            </Dropdown>
          </Col>
        )}
      </Row>
    </Header>
  );
}

export default TopBarHeader;
