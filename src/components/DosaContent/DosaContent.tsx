import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DosaVideo from "../../assets/DosaBackground.mp4";
import "./DosaContent.css";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function DosaContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          videoRef.current
        ) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      },
      {
        threshold: 0.8,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showContent) return;

    gsap.fromTo(
      ".dosa-content",
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: ".dosa-section",
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      }
    );

    gsap.to(".dosa-content", {
      opacity: 0,
      y: -150,

      scrollTrigger: {
        trigger: ".dosa-section",
        start: "center center",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, [showContent]);

  const handleVideoEnd = () => {
    setShowContent(true);

    setTimeout(() => {
      const tl = gsap.timeline();

      tl.to(".dosa-tag", {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })

        .to(".dosa-title-line1", {
          opacity: 1,
          y: 0,
          duration: 0.75,
        })

        .to(".dosa-title-line2", {
          opacity: 1,
          y: 0,
          duration: 0.75,
        })

        .to(".dosa-description", {
          opacity: 1,
          y: 0,
          duration: 0.6,
        })

        .to(".feature-1", {
          opacity: 1,
          x: 0,
          duration: 0.5,
        })

        .to(".feature-2", {
          opacity: 1,
          x: 0,
          duration: 0.5,
        })

        .to(".feature-3", {
          opacity: 1,
          x: 0,
          duration: 0.5,
        })

        .to(".feature-4", {
          opacity: 1,
          x: 0,
          duration: 0.5,
        })

        .to(".dosa-btn", {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "back.out(1.7)",
        });
    }, 100);
  };
  const navigate = useNavigate();

  const handleOnClick = () => {
    setTimeout(() => {
      navigate("/dosa-navigation");
    }, 1000);
  };

  return (
    <section
      ref={sectionRef}
      className="dosa-section"
    >
      <video
        ref={videoRef}
        className="dosa-video"
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      >
        <source
          src={DosaVideo}
          type="video/mp4"
        />
      </video>

      <div className="video-overlay" />

      {showContent && (
        <div className="dosa-content">
          <span className="dosa-tag">
            SOUTH INDIAN HERITAGE
          </span>

          <h1 className="dosa-title">
            <span className="dosa-title-line1">
              The Art Of
            </span>
            <br />
            <span className="dosa-title-line2">
              Perfect Dosa
            </span>
          </h1>

          <p className="dosa-description">
            A crispy golden delight crafted
            from fermented rice and lentils.
            Every dosa tells a story of
            tradition, culture and authentic
            South Indian flavors.
          </p>

          <div className="dosa-features">
            <div className="feature feature-1">
              ✓ Crispy Texture
            </div>

            <div className="feature feature-2">
              ✓ Traditional Recipe
            </div>

            <div className="feature feature-3">
              ✓ Fresh Ingredients
            </div>

            <div className="feature feature-4">
              ✓ Authentic Taste
            </div>
          </div>

          <button className="dosa-btn" onClick={handleOnClick}>
            Explore More
          </button>
        </div>
      )}
    </section>
  );
}

export default DosaContent;