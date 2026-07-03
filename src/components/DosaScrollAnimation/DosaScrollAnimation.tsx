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
    // PRELOAD IMAGES
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

    // CONTENT FADES IMMEDIATELY ON SCROLL
    gsap.to(".dosa-content", {
      opacity: 0,
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: ".dosa-scroll-section",
        start: "top top",
        end: "top+=80 top",
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

    <img
        src={frames[frame]}
        className="dosa-image"
        alt=""
        draggable={false}
    />

    <div className="dosa-content">

        {/* <h3 className="dosa-tag">
            SOUTH INDIAN EXPERIENCE
        </h3> */}

        <h1 className="dosa-title">
  <span className="dosa-line">Taste the</span>
  <span className="dosa-line">art of</span>
  <span className="dosa-line">authentic</span>
  <span className="dosa-line">dosa</span>
</h1>

        <p className="dosa-description">
            A cinematic food experience crafted
            with texture, flavor and motion.
        </p>

        <div className="dosa-buttons">
            <button className="dosa-primary" onClick={handleOnClick}>
                Explore
            </button>

            <button className="dosa-secondary" >
                Watch Story
            </button>
        </div>

    </div>

</div>
    </section>
  );
}