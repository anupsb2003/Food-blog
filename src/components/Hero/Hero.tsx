import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroImage from "../../assets/Hero.png";

import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  tl.fromTo(
    ".fsHero-tag",
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
    }
  )
    .fromTo(
      ".fsHero-title",
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )
    .fromTo(
      ".fsHero-description",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
      }
    )
    .fromTo(
      ".fsHero-buttons button",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
      }
    )
    .fromTo(
      ".fsHero-footer",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );

  gsap.to(".fsHero-content", {
    y: -180,
    scrollTrigger: {
      trigger: ".fsHero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".fsHero-background", {
    scale: 1.2,
    scrollTrigger: {
      trigger: ".fsHero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".fsHero-footer", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".fsHero-section",
      start: "top top",
      end: "bottom center",
      scrub: true,
    },
  });
}, []);

  return (
    <section className="fsHero-section">
      <div
        className="fsHero-background"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      />

      <div className="fsHero-overlay" />
      <div className="fsHero-content">
        <span className="fsHero-tag">
          A FOOD SCIENCE JOURNAL
        </span>
        <h1 className="fsHero-title">
          <span className="fsHero-titleLine">
            Every meal has
          </span>

          <span className="fsHero-titleLine">
            a secret the label
          </span>

          <span className="fsHero-titleLine">
            never tells you.
          </span>
        </h1>
        <p className="fsHero-description">
          Exploring food science, ingredients,
          cooking culture, labels, traditional
          methods and honest food reviews.
        </p>

        <div className="fsHero-buttons">
          <button className="fsHero-primaryButton">
            Start Reading
          </button>

          <button className="fsHero-secondaryButton">
            Label Lab
          </button>
        </div>
      </div>

      <div className="fsHero-footer">
        <span>Scroll For More</span>
        <span>Est. 2026</span>
      </div>
    </section>
  );
}

export default Hero;