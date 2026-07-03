import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

import "./CoffeeScrollAnimation.css";

// IMPORT FRAMES
const frameModules = import.meta.glob(
  "../../assets/CoffeeAnimation/*.{jpg,jpeg,png,webp}",
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

      return match
        ? parseInt(match[1], 10)
        : 0;
    };

    return getNumber(a) - getNumber(b);
  })
  .map(([, value]) => value as string);

const TOTAL_FRAMES = frames.length;

export default function CoffeeScrollAnimation() {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  const [frame, setFrame] = useState(0);

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/coffee-navigation");
  };

  useEffect(() => {
    // PRELOAD IMAGES
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // FRAME UPDATE
    const updateFrame = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;

      const rect =
        section.getBoundingClientRect();

      const scrollableHeight =
        section.offsetHeight -
        window.innerHeight;

      if (scrollableHeight <= 0) return;

      const currentScroll = -rect.top;

      const progress = Math.min(
        Math.max(
          currentScroll /
            scrollableHeight,
          0
        ),
        1
      );

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(
          progress * (TOTAL_FRAMES - 1)
        )
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

    window.addEventListener(
      "scroll",
      handleScroll
    );

    window.addEventListener(
      "resize",
      updateFrame
    );

    updateFrame();

    // CONTENT ENTRY
    gsap.fromTo(
      ".spices-content",
      {
        opacity: 0,
        x: 80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateFrame
      );
    };
  }, []);

  if (!frames.length) {
    return (
      <div className="spices-noFrames">
        No Frames Found
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="spices-scrollSection"
      style={{
        height: `${TOTAL_FRAMES * 1.2}vh`,
      }}
    >
      <div className="spices-container">

        {/* LEFT SIDE */}

        <div className="spices-contentSide">

          <div className="spices-content">

            <span className="spices-tag">
  CINEMATIC COFFEE
  <br />
  EXPERIENCE
</span>

<h1 className="spices-title">
  Crafted
  <br />
  for true
  <br />
  coffee
  <br />
  lovers
</h1>

<p className="spices-description">
  Experience rich aroma,
  smooth textures and
  cinematic storytelling
  inspired by handcrafted
  premium coffee culture.
</p>
           

            <div className="spices-buttons">

              <button
                className="spices-primaryBtn"
                onClick={handleExplore}
              >
                Explore
              </button>

              <button className="spices-secondaryBtn">
                Watch Story
              </button>

            </div>

          </div>

        </div>
        <div className="spices-imageSide">

          <div className="spices-imageWrapper">
            <img
              src={frames[frame]}
              className="spices-image"
              alt=""
              draggable={false}
            />
          </div>

        </div>

        {/* RIGHT SIDE */}

      </div>
    </section>
  );
}