"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import logo from "../../../public/images/logo/logo.png";

import { useAppContext } from "@/context/Context";
import HeaderRightTwo from "../Header-Right/HeaderRight-Two";
import Search from "../Offcanvas/Search";
import Category from "../Category/Category";

const HeaderSix = ({
  gapSpaceBetween,
  sticky,
  navigationEnd,
  btnClass,
  btnText,
}) => {
  const { mobile, setMobile } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "Courses", label: "Courses" },
    { id: "Teachers", label: "Teachers" },
    { id: "Testimonials", label: "Testimonials" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "about", "Courses", "Teachers", "Testimonials"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${sticky} ${
          isSticky ? "rbt-sticky" : ""
        }`}
      >
        <div className="container">
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      width={152}
                      height={50}
                      priority={true}
                      alt="Education Logo Images"
                    />
                  </Link>
                </div>
              </div>
              <div className="header-info d-none d-lg-block">
                <Category />
              </div>
            </div>
            <div className="rbt-main-navigation d-none d-xl-block">
              <nav className="mainmenu-nav onepagenav">
                <ul className="mainmenu">
                  {sections.map((sec, i) => (
                    <li
                      className={currentSection === sec.id ? "current" : ""}
                      key={i}
                    >
                      <ScrollLink
                        to={sec.id}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        style={{ cursor: "pointer" }}
                      >
                        {sec.label}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <HeaderRightTwo
              userType="Admin"
              btnText="Enroll Now"
              btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
            />
          </div>
        </div>
        <Search />
      </div>
    </>
  );
};

export default HeaderSix;
