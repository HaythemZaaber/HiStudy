"use client";

import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import Home from "@/components/homepage/Homepage";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleEight from "@/components/Header/HeaderStyle-Eight";

const HomePage = ({ getBlog }) => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleEight headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <Home blogs={getBlog} />

          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default HomePage;
