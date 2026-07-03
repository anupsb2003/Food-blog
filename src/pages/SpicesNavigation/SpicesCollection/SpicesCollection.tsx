import "./SpicesCollection.css";
import pepperImg from "../../../assets/pepper.png";
import cardamomImg from "../../../assets/cardamom.png";
import chilliImg from "../../../assets/chilli.png";
import turmericImg from "../../../assets/turmeric.png";

export default function SpicesCollection() {
  const spices = [
    {
      image: pepperImg,
      tag: "BOLD & WOODY",
      title: "Tellicherry Pepper",
      description: "The King of Spices.",
    },
    {
      image: cardamomImg,
      tag: "FLORAL & CITRUS",
      title: "Alleppey Cardamom",
      description: "Aromatic Intensity.",
    },
    {
      image: chilliImg,
      tag: "SMOKY & SHARP",
      title: "Guntur Chilli",
      description: "Sun-dried perfection.",
    },
    {
      image: turmericImg,
      tag: "EARTHY & VIBRANT",
      title: "Wayanad Turmeric",
      description: "Golden Curcumin Rich.",
    },
  ];

  return (
    <section className="spiceCollection">
      {/* HEADER */}
      <div className="spiceCollectionHeader">
        <div className="spiceLine"></div>

        <span className="spiceIcon">❦</span>

        <div className="spiceLine"></div>
      </div>

      <h2 className="spiceCollectionTitle">
        Signature Collections
      </h2>

      {/* CARDS */}
      <div className="spiceCollectionGrid">
        {spices.map((spice, index) => (
          <div
            className="spiceCard"
            key={index}
          >
            <div className="spiceCardImage">
              <img
                src={spice.image}
                alt={spice.title}
              />
            </div>

            <span className="spiceTag">
              {spice.tag}
            </span>

            <h3 className="spiceCardTitle">
              {spice.title}
            </h3>

            <p className="spiceCardDescription">
              {spice.description}
            </p>

            <button className="spiceExploreBtn">
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}