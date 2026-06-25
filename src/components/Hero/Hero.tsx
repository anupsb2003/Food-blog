import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroImage from "../../assets/Hero.png";
import BurgerVideo from "../../assets/Burger.mp4";

import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-tag", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
      .from(
        ".hero-title",
        {
          y: 150,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.5"
      )
      .from(
        ".hero-description",
        {
          y: 80,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      )
      .from(
        ".hero-buttons",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".hero-video",
        {
          x: 300,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=1"
      );

    gsap.to(".hero-content", {
      y: -180,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".hero-video", {
      y: -250,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".hero-bg", {
      scale: 1.2,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".hero-footer", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      />

      <div className="hero-overlay" />

      {/* <div className="hero-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={BurgerVideo} type="video/mp4" />
        </video>
      </div> */}

      <div className="hero-content">
        <span className="hero-tag">
          A FOOD SCIENCE JOURNAL
        </span>

        <h1 className="hero-title">
          Every meal has
          <br />
          a secret the label
          <br />
          never tells you.
        </h1>

        <p className="hero-description">
          Exploring food science, ingredients,
          cooking culture, labels, traditional
          methods and honest food reviews.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Reading
          </button>

          <button className="secondary-btn">
            Label Lab
          </button>
        </div>
      </div>

      <div className="hero-footer">
        <span>Scroll For More</span>
        <span>Est. 2026</span>
      </div>
    </section>
  );
}

export default Hero;