"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import MenuData from "../../data/MegaMenu.json";
import CourseLayout from "./NavProps/CourseLayout";
import PageLayout from "./NavProps/PageLayout";
import ElementsLayout from "./NavProps/ElementsLayout";
import addImage from "../../public/images/service/mobile-cat.jpg";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "Courses", label: "Courses" },
    { id: "Teachers", label: "Teachers" },
    { id: "Testimonials", label: "Testimonials" },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      // threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
        // observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        {sections.map((section) => (
          <li
            key={section.id}
            className="with-megamenu has-menu-child-item position-static"
          >
            <a
              className={`${
                activeSection === section.id ? "active" : ""
              } cursor-pointer`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
