import { useState } from "react";
import "./Carousel.css";

import Product1 from "../../assets/matcha.png";

import Berry from "../../assets/berry.png";
import Strawberry from "../../assets/strawberry.png";
import Cherry from "../../assets/cherry.png";

export default function ProductCarousel() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const x =
      (e.clientX / window.innerWidth - 0.5) * 40;

    const y =
      (e.clientY / window.innerHeight - 0.5) * 40;

    setMouseX(x);
    setMouseY(y);
  };

  return (
    <section
      className="showcase"
      onMouseMove={handleMove}
    >
      <div className="showcase-container">

        <div
          className="card card-1"
          style={{
            transform: `translate(${mouseX}px, ${mouseY}px) rotate(-25deg)`
          }}
        >
          <img src={Berry} alt="" />
        </div>

        <div
          className="card card-2"
          style={{
            transform: `translate(${mouseX * 0.8}px, ${mouseY * 0.8}px) rotate(-15deg)`
          }}
        >
          <img src={Strawberry} alt="" />
        </div>

        

        <div
          className="card card-4"
          style={{
            transform: `translate(${mouseX * -1}px, ${mouseY * -1}px) rotate(25deg)`
          }}
        >
          <img src={Cherry} alt="" />
        </div>

        <div
          className="center-product"
          style={{
            transform: `
              translate(
                ${mouseX * 0.3}px,
                ${mouseY * 0.3}px
              )
            `
          }}
        >
          <img
            src={Product1}
            alt="Product"
          />

          <h2>Original</h2>

          <button>
            ₹199
          </button>
        </div>

        <h1 className="showcase-title">
          Choose your Matcha Tea
        </h1>

      </div>
    </section>
  );
}