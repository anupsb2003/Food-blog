import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./AboutSection.css";

import {
  RiFlaskLine,
  RiRestaurant2Line,
  RiFileList3Line,
  RiLeafLine,
  RiFireLine,
  RiBookOpenLine,
  RiMicroscopeLine,
  RiCupLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const tags = [
  {
    name: "Food Science",
    icon: <RiFlaskLine />,
  },

  {
    name: "Food Culture",
    icon: <RiBookOpenLine />,
  },

  {
    name: "Ingredient Study",
    icon: <RiLeafLine />,
  },

  {
    name: "Label Reading",
    icon: <RiFileList3Line />,
  },

  {
    name: "Fermentation",
    icon: <RiMicroscopeLine />,
  },

  {
    name: "Browning Reaction",
    icon: <RiFireLine />,
  },

  {
    name: "Traditional Cooking",
    icon: <RiRestaurant2Line />,
  },

  {
    name: "Food Reviews",
    icon: <RiCupLine />,
  },
];

export default function AboutSection() {

  const sectionRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".about-panel",
        {
          y: 120,
          opacity: 0,
          scale: 0.92,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,

          duration: 1.4,

          ease: "power4.out",

          scrollTrigger: {
            trigger: ".about-wrapper",
            start: "top 78%",
            end: "bottom 20%",

            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".about-tag",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,

          stagger: 0.08,

          duration: 1,

          ease: "power3.out",

          scrollTrigger: {
            trigger: ".about-tags",
            start: "top 88%",
          },
        }
      );

      gsap.fromTo(
        ".floating-orb",
        {
          y: 0,
        },
        {
          y: -40,

          duration: 4,

          repeat: -1,

          yoyo: true,

          ease: "sine.inOut",
        }
      );

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      ref={sectionRef}
      className="about-wrapper"
    >

      {/* GLOW */}

      <div className="about-glow glow-1"></div>
      <div className="about-glow glow-2"></div>

      {/* FLOATING ORBS */}

      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>

      {/* MAIN PANEL */}

      <div className="about-panel">

        {/* LEFT */}

        <div className="about-left">

          <span className="about-mini">
            THE PERSON BEHIND THIS
          </span>

          <h2 className="about-heading">

            I grew up around cooking
            that rarely used
            measurements.
            <br />
            <span>
              Now I study the science
              of why those methods
              worked.
            </span>

          </h2>

          <p className="about-description">

            The author is someone who
            connects traditional cooking
            knowledge with food science.

            This blog exists because
            there is a gap between
            kitchen instinct and
            scientific explanation.

            Every entry is written
            for people who eat with
            love and think with
            curiosity.

          </p>

          <p className="about-description second">

            It is for readers who
            want to understand
            ingredients, labels,
            cooking methods,
            food products,
            and food culture
            more clearly.

          </p>

          {/* TAGS */}

          <div className="about-tags">

            {tags.map((tag, index) => (

              <div
                className="about-tag"
                key={index}
              >

                <span>
                  {tag.icon}
                </span>

                {tag.name}

              </div>

            ))}

          </div>

          {/* BUTTON */}

          <button className="about-btn">

            Read the full story

            <RiArrowRightUpLine />

          </button>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <div className="quote-card">

            <div className="quote-line"></div>

            <h3>

              “Science gave me
              the words for what
              traditional cooking
              already knew.”

            </h3>

          </div>

          <div className="science-circle">

            <div className="circle-inner">

              <span>
                FOOD
              </span>

              <span>
                SCIENCE
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}