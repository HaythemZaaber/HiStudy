"use client";

import Image from "next/image";
import Link from "next/link";

import img from "../../public/images/testimonial/client-02.png";

import CallToAction from "../Call-To-Action/CallToAction";
import ServiceEleven from "../Services/Service-Eleven";

import CardFive from "../Cards/Card-Five";
import CounterTwo from "../Counters/Counter-Two";
import Pricing from "../Pricing/Pricing";
import TeamFour from "../Team/TeamFour";
import Testimonial from "../Testimonials/Testimonial";
import Gallery from "../Gallery/Gallery";
import About from "@/components/Abouts/About";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import sal from "sal.js";
import Card from "../Cards/Card";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useRef } from "react";

const Home = ({ blogs }) => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        id="home"
        ref={section1Ref}
        className="bg-cover  rbt-banner-area rbt-banner-4 bg-center  header-transperent-spacer bg-[url('/images/bg/bg-image.jpg')]"
        style={{ paddingTop: "140px" }}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content text-start">
                  <div className="inner">
                    <h1 className="title">
                      Transform Your Future with <br /> Expert-Led Online
                      Courses.
                    </h1>
                    <p className="description">
                      Join thousands of learners and gain new skills <br /> from
                      the comfort of your home.
                    </p>

                    <div className="slider-btn">
                      <Link
                        className="rbt-btn radius rbt-marquee-btn marquee-text-y"
                        href="#"
                      >
                        <span data-text="Get Started Today">
                          Get Started Today
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        ref={section2Ref}
        className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1"
      >
        <div className="container">
          <ParallaxProvider>
            <About />
          </ParallaxProvider>
        </div>
      </div>
      <div
        id="Curriculum"
        ref={section3Ref}
        className="rbt-course-area bg-color-light rbt-section-gap "
      >
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Our Curriculum
                </span>
                <h2 className="title">Our Curriculum</h2>
                <p className="description has-medium-font-size mt--20">
                  There are many variations of passages of the Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ServiceEleven isTitle={false} />
            </div>
          </div>
        </div>
      </div>
      <div
        id="Counter"
        ref={section4Ref}
        className="rbt-counterup-area bg-color-white rbt-section-gap"
      >
        <CounterTwo />
      </div>
      <div
        id="Courses"
        ref={section4Ref}
        className="rbt-course-area bg-color-light rbt-section-gap "
      >
        <div className="container">
          <div className="row mb--55 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-pink-opacity">
                  Top Popular Course
                </span>
                <h2 className="title">
                  Most Popular <span className="color-primary">Courses</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="load-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn rbt-switch-btn bg-primary-opacity"
                  href="/course-filter-one-toggle"
                >
                  <span data-text="View All Course">View All Course</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <Card
              col="col-lg-4 col-md-6 col-sm-12 col-12"
              mt=""
              start={0}
              end={6}
              isDesc={true}
              isUser={true}
            />
          </div>
        </div>
      </div>
      <div
        id="Prices"
        ref={section5Ref}
        className="rbt-team-area bg-color-white rbt-section-gap"
      >
        <Pricing title="Histudy Course Plan" tag="COURSE PRICING" />
      </div>
      <div
        id="Teachers"
        ref={section6Ref}
        className="rbt-team-area bg-color-light rbt-section-gap"
      >
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Instructor
                </span>
                <h2 className="title">Meet Our Teacher.</h2>
                <p className="description has-medium-font-size mt--20">
                  There are many variations of passages of the Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
              </div>
            </div>
          </div>
          <TeamFour isHead={false} />
          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--60 text-center">
                <a className="rbt-btn rbt-marquee-btn" href="#">
                  <span data-text="View All Teacher">View All Teacher</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Testimonial"
        ref={section7Ref}
        className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden"
      >
        <div className="wrapper mb--60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                  <h2 className="title">
                    People like histudy education. <br /> No joking - Parents
                    Review Here!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>
      <div className="rbt-team-area bg-color-light rbt-section-gap">
        <TestimonialFour />
      </div>
      <Gallery />
    </>
  );
};

export default Home;
