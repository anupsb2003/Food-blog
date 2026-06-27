import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CoffeeVideo from "../../assets/CoffeBackground.mp4";
import CoffeeCup from "../../assets/CoffeImage.png";
import "./CoffeeContent.css";

gsap.registerPlugin(ScrollTrigger);

function CoffeeContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
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
      ".coffee-content",
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".coffee-section",
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      }
    );

    gsap.to(".coffee-content", {
      opacity: 0,
      y: -150,
      scrollTrigger: {
        trigger: ".coffee-section",
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
      tl.fromTo(
        ".coffee-image",
        {
          opacity: 0,
          x: -200,
          scale: 0.6,
          rotation: -15,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "power4.out",
        }
      )

        .to(".coffee-tag", {
          opacity: 1,
          y: 0,
          duration: 1,
        })

      tl.to(".coffee-tag", {
        opacity: 1,
        y: 0,
        duration: 0,
      })
        .to(".coffee-title-line1", {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(".coffee-title-line2", {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(".coffee-description", {
          opacity: 1,
          y: 0,
          duration: 1,
        })
        .to(".feature-1", {
          opacity: 1,
          x: 0,
          duration: 1,
        })
        .to(".feature-2", {
          opacity: 1,
          x: 0,
          duration: 1,
        })
        .to(".feature-3", {
          opacity: 1,
          x: 0,
          duration: 1,
        })
        .to(".feature-4", {
          opacity: 1,
          x: 0,
          duration: 1,
        })
        .to(".coffee-btn", {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        });
    }, 100);
  };

  return (
    <section ref={sectionRef} className="coffee-section">
      <video
        ref={videoRef}
        className="coffee-video"
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      >
        <source src={CoffeeVideo} type="video/mp4" />
      </video>

      <div className="video-overlay" />

      {showContent && (
        <>
          <div className="coffee-image">
            <img
              src={CoffeeCup}
              alt="Coffee Cup"
            />
          </div>

          <div className="coffee-content">
            <span className="coffee-tag">
              PREMIUM COFFEE EXPERIENCE
            </span>

            <h1 className="coffee-title">
              <span className="coffee-title-line1">
                Freshly Brewed
              </span>
              <br />
              <span className="coffee-title-line2">
                Perfect Coffee
              </span>
            </h1>

            <p className="coffee-description">
              Experience the rich aroma of freshly brewed coffee
              made from carefully selected premium beans.
              Every cup delivers warmth, energy and an
              unforgettable taste crafted for true coffee lovers.
            </p>

            <div className="coffee-features">
              <div className="feature feature-1">
                ☕ Freshly Brewed
              </div>

              <div className="feature feature-2">
                🌱 Premium Beans
              </div>

              <div className="feature feature-3">
                ❤️ Rich Aroma
              </div>

              <div className="feature feature-4">
                ⭐ Smooth Flavor
              </div>
            </div>

            <button className="coffee-btn">
              Explore Coffee
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default CoffeeContent;