import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import "./index.css";
import TopBarHeader from "./components/TopBarHeader";
import { BrowserRouter } from "react-router-dom";
import LayoutContentRouter from "./router";

const { Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter basename="/cog-website">
      <Layout className="layout">
        <TopBarHeader />
        <Content>
          <div className="site-layout-content">
            <LayoutContentRouter />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Created by Hugo Barragon
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
