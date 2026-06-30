// CrunchSection.tsx

import "./crunchSection.css";

const crunchData = [
  {
    number: "01",
    title: "Precision Heat",
    description:
      "Our heavy cast-iron tawas are seasoned for decades, maintaining a uniform 220°C that ensures the dosa is cooked from edge to center simultaneously.",
  },
  {
    number: "02",
    title: "Paper Thin Edge",
    description:
      "Using a traditional spreading technique, our chefs achieve a thickness of just 0.5mm at the edges, creating a translucent, shatteringly crisp rim.",
  },
  {
    number: "03",
    title: "Clarified Perfection",
    description:
      "Pure cow ghee is drizzled as the batter sets, caramelizing the sugars and proteins into a deep sienna gold with a rich, nutty finish.",
  },
];

export default function CrunchSection() {
  return (
    <section className="crunch-section">
      {/* Background Glow */}
      <div className="crunch-glow"></div>

      {/* HEADER */}
      <div className="crunch-header">
        <p className="crunch-tag">THE GOLDEN RATIO</p>

        <h1 className="crunch-title">
          The Science of Crunch
        </h1>

        <div className="title-line"></div>
      </div>

      {/* CARDS */}
      <div className="crunch-grid">
        {crunchData.map((item, index) => (
          <div
            className="crunch-card"
            key={index}
          >
            <span className="card-number">
              {item.number}
            </span>

            <h2>{item.title}</h2>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}