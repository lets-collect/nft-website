/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Footer from "./footer/footer";
import Header from "./header/header";
// import Social from "./header/socials"

export const Layout = (props: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Header />
      <br/>
      {/* <Social/> */}
      {props.children}
      <Footer />
      <a href="#" className="scrollToTop mb-0">
        <i className="icofont-stylish-up"></i>
      </a>
    </div>
  );
};
