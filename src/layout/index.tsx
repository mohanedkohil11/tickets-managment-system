import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.scss";
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
