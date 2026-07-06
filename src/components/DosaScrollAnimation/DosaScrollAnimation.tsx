import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import "./DosaScrollAnimation.css";

gsap.registerPlugin(ScrollTrigger);

// IMPORT FRAMES
const frameModules = import.meta.glob(
  "../../assets/DosaAnimation/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
);

// SORT FRAMES
const frames = Object.entries(frameModules)
  .sort(([a], [b]) => {
    const getNumber = (path: string) => {
      const match = path.match(/(\d+)/);

      return match ? parseInt(match[1], 10) : 0;
    };

    return getNumber(a) - getNumber(b);
  })
  .map(([, value]) => value as string);

const TOTAL_FRAMES = frames.length;

export default function DosaScrollAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [frame, setFrame] = useState(0);

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/dosa-navigation");
  };

  useEffect(() => {
    // PRELOAD
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const updateFrame = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;

      const rect = section.getBoundingClientRect();

      const scrollableHeight =
        section.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const currentScroll = -rect.top;

      const progress = Math.min(
        Math.max(currentScroll / scrollableHeight, 0),
        1
      );

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * (TOTAL_FRAMES - 1))
      );

      setFrame(frameIndex);
    };

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateFrame();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateFrame);

    updateFrame();

    // HERO CONTENT FADE
    gsap.to(".dosa-content", {
      opacity: 0,
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: ".dosa-scroll-section",
        start: "top top",
        end: "top+=180 top",
        scrub: true,
      },
    });

    // FLOATING LABEL
    gsap.to(".dosa-floating-note", {
      y: -40,
      rotate: -3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // SPICES FLOAT
    gsap.to(".spice", {
      y: -30,
      stagger: 0.2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // LABELS PARALLAX
    gsap.to(".science-label", {
      yPercent: -80,
      ease: "none",
      scrollTrigger: {
        trigger: ".dosa-scroll-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateFrame
      );

      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  if (!frames.length) {
    return <div>No frames found</div>;
  }

  return (
    <section
      ref={sectionRef}
      className="dosa-scroll-section"
      style={{
        height: `${TOTAL_FRAMES * 1.5}vh`,
      }}
    >
      <div className="sticky-container">

        {/* IMAGE SEQUENCE */}
        <img
          src={frames[frame]}
          className="dosa-image"
          alt=""
          draggable={false}
        />

        {/* DARK OVERLAY */}
        <div className="dosa-overlay"></div>

        {/* FLOATING SPICES */}
        <div className="spice spice-1"></div>
        <div className="spice spice-2"></div>
        <div className="spice spice-3"></div>

        {/* SCIENCE LABELS */}
        <div className="science-label label-1">
          FERMENTATION
        </div>

        <div className="science-label label-2">
          MAILLARD REACTION
        </div>

        <div className="science-label label-3">
          NATURAL FLAVORING
        </div>

        {/* CONTENT */}
        <div className="dosa-content">

          <h3 className="dosa-tag">
            A FOOD SCIENCE JOURNAL
          </h3>

          <h1 className="dosa-title">

            <span className="dosa-line">
              Every meal
            </span>

            <span className="dosa-line">
              has a secret
            </span>

            <span className="dosa-line">
              the label
            </span>

            <span className="dosa-line">
              never tells you.
            </span>

          </h1>

          <p className="dosa-description">
            A food science journal exploring
            the gap between what we eat and
            what we actually understand about
            food, ingredients, labels,
            cooking methods, and culture.
          </p>

          <div className="dosa-buttons">

            <button
              className="dosa-primary"
              onClick={handleOnClick}
            >
              Start Reading
            </button>

            <button className="dosa-secondary">
              Label Lab
            </button>

          </div>

        </div>

        {/* FLOATING NOTE */}
        <div className="dosa-floating-note">

          <div className="note-glow"></div>

          <span className="note-line">
            The browning you taste
          </span>

          <span className="note-line">
            but never question.
          </span>

          <small>
            Food reaction / cooking science reference
          </small>

        </div>

      </div>
    </section>
  );
}