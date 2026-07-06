import "./PhotoEssay.css";

import {
  RiFlaskLine,
  RiFireLine,
  RiLeafLine,
  RiCupLine,
  RiFileList3Line,
  RiBookOpenLine,
  RiSunFoggyLine,
} from "react-icons/ri";

const photoTiles = [
  {
    id: "01",

    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop",

    icon: <RiSunFoggyLine />,

    caption:
      "The golden hour — traditional food and slow cooking",

    hover:
      "Every colour in a kitchen can carry a scientific explanation.",
  },

  {
    id: "02",

    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=1400&auto=format&fit=crop",

    icon: <RiFireLine />,

    caption:
      "Spice heat series",

    hover:
      "Heat is not just flavour. It is a sensory signal the body learns to enjoy.",
  },

  {
    id: "03",

    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1400&auto=format&fit=crop",

    icon: <RiFileList3Line />,

    caption:
      "Label Lab — field work",

    hover:
      "The truth is often on the label. It just needs to be translated clearly.",
  },

  {
    id: "04",

    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1400&auto=format&fit=crop",

    icon: <RiLeafLine />,

    caption:
      "Herb chemistry",

    hover:
      "Fresh herbs release aroma through volatile compounds when they meet heat.",
  },

  {
    id: "05",

    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1400&auto=format&fit=crop",

    icon: <RiFlaskLine />,

    caption:
      "The browning moment",

    hover:
      "This shade of brown is where flavour becomes chemistry.",
  },

  {
    id: "06",

    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop",

    icon: <RiCupLine />,

    caption:
      "Coffee / beverage ritual",

    hover:
      "A good brew is an extraction process with time, temperature, and ratio.",
  },

  {
    id: "07",

    image:
      "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=1400&auto=format&fit=crop",

    icon: <RiBookOpenLine />,

    caption:
      "Lab and kitchen notes",

    hover:
      "The lab explains the cooking, and the cooking gives meaning to the lab.",
  },
];

export default function PhotoEssay() {

  return (

    <section className="photo-essay-section">

      {/* GLOWS */}

      <div className="essay-glow glow-left"></div>
      <div className="essay-glow glow-right"></div>

      {/* TOP */}

      <div className="essay-header">

        <span>
          PHOTO ESSAY
        </span>

        <h2>
          Moments where
          food becomes
          memory, chemistry,
          and culture.
        </h2>

      </div>

      {/* UNIQUE GRID */}

      <div className="essay-grid">

        {photoTiles.map((item, index) => (

          <div
            key={item.id}
            className={`essay-card card-${index + 1}`}
            style={{
              backgroundImage:
                `url(${item.image})`,

              animationDelay:
                `${index * 0.1}s`,
            }}
          >

            {/* GLASS */}

            <div className="essay-glass"></div>

            {/* DARK */}

            <div className="essay-overlay"></div>

            {/* CONTENT */}

            <div className="essay-content">

              <div className="essay-top">

                <div className="essay-icon">
                  {item.icon}
                </div>

                <small>
                  {item.id}
                </small>

              </div>

              <div className="essay-bottom">

                <h3>
                  {item.caption}
                </h3>

                <div className="essay-hover">

                  <span>
                    {item.hover}
                  </span>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}