// HolyTrinity.tsx

import "./holyTrinity.css";

const pairings = [
  {
    title: "Coconut Chutney",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    description:
      "Freshly grated coconut tempered with crackling mustard seeds, dried red chilies, and aromatic curry leaves. Cool, creamy, and essential.",
  },
  {
    title: "Signature Sambar",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1200&auto=format&fit=crop",
    description:
      "A soulful lentil stew slow-cooked with drumsticks, pearl onions, and our secret blend of 14 stone-ground spices. The heartbeat of the meal.",
  },
  {
    title: "Tomato Thokku",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
    description:
      "A tangy and spicy slow-reduced relish. Made by sautéing tomatoes and onions for hours until they reach a jam-like, punchy consistency.",
  },
];

export default function HolyTrinity() {
  return (
    <section className="holy-section">

      {/* Background Glow */}
      <div className="holy-glow"></div>

      {/* HEADER */}
      <div className="holy-header">

        <p className="holy-tag">
          ESSENTIAL PAIRINGS
        </p>

        <h1 className="holy-title">
          The Holy Trinity
        </h1>

        <p className="holy-subtitle">
          A dosa is never alone. It exists in perfect harmony
          with these three pillars of South Indian flavor.
        </p>
      </div>

      {/* CARDS */}
      <div className="holy-grid">

        {pairings.map((item, index) => (
          <div className="holy-card" key={index}>

            <div className="holy-image-wrapper">

              <img
                src={item.image}
                alt={item.title}
                className="holy-image"
              />

              <div className="image-overlay"></div>

              <h2 className="holy-card-title">
                {item.title}
              </h2>
            </div>

            <p className="holy-description">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}