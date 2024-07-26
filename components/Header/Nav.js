"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import MenuData from "../../data/MegaMenu.json";

import CourseLayout from "./NavProps/CourseLayout";
import PageLayout from "./NavProps/PageLayout";
import ElementsLayout from "./NavProps/ElementsLayout";

import addImage from "../../public/images/service/mobile-cat.jpg";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="with-megamenu has-menu-child-item position-static">
          <a
            className={`${
              activeMenuItem === "home" ? "open" : ""
            } cursor-pointer`}
            // onClick={() => toggleMenuItem("home")}
            onClick={() => scrollToSection("home")}
            // href="#home"
          >
            Home
          </a>
        </li>

        <li className="with-megamenu has-menu-child-item">
          <a
            className={`${
              activeMenuItem === "courses" ? "open" : ""
            } cursor-pointer`}
            onClick={() => scrollToSection("about")}
            // href="#about"
          >
            About
          </a>
        </li>

        <li className="has-dropdown has-menu-child-item">
          <a
            className={`${
              activeMenuItem === "dashboard" ? "open" : ""
            } cursor-pointer`}
            onClick={() => scrollToSection("Curriculum")}
          >
            Curriculum
            {/* <i className="feather-chevron-down"></i> */}
          </a>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <a
            className={`${
              activeMenuItem === "pages" ? "open" : ""
            } cursor-pointer`}
            onClick={() => scrollToSection("Counter")}
          >
            Counter
            {/* <i className="feather-chevron-down"></i> */}
          </a>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <a
            className={`${
              activeMenuItem === "elements" ? "open" : ""
            } cursor-pointer`}
            onClick={() => scrollToSection("Courses")}
          >
            Courses
            {/* <i className="feather-chevron-down"></i> */}
          </a>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <a
            className={`${
              activeMenuItem === "blog" ? "open" : ""
            } cursor-pointer`}
            onClick={() => scrollToSection("Prices")}
          >
            Prices
            {/* <i className="feather-chevron-down"></i> */}
          </a>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <a
            className={`${
              activeMenuItem === "blog" ? "open" : ""
            } cursor-pointer`}
            onClick={() => scrollToSection("Teachers")}
          >
            Teachers
          </a>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <a
            className={`${
              activeMenuItem === "blog" ? "open" : ""
            } cursor-pointer`}
            onClick={() => scrollToSection("Testimonial")}
          >
            Testimonial
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
