import "./SpicesEthical.css";

import PepperImg from "../../../assets/pepper.png";
import FarmerImg from "../../../assets/farmer.png";

import { FiShield } from "react-icons/fi";
import { PiPlant } from "react-icons/pi";

export default function SpicesEthical() {
  return (
    <section className="ethicalSection">
      <div className="spiceCollectionHeader">
        <div className="spiceLine"></div>

        <span className="spiceIcon">❦</span>

        <div className="spiceLine"></div>
      </div>
      <div className="ethicalContainer">

        {/* LEFT CONTENT */}
        <div className="ethicalLeft">

          <span className="ethicalTag">
            ETHICAL PROVENANCE II
          </span>

          <h2 className="ethicalTitle">
            A Direct Journey:
            <br />
            <span>Farmer to Table</span>
          </h2>

          {/* ITEM 1 */}
          <div className="ethicalItem">

            <div className="ethicalIcon">
              <FiShield />
            </div>

            <div className="ethicalText">
              <h3>Batch Traceability</h3>

              <p>
                By bypassing traditional trade
                auctions, we ensure that every
                jar can be traced back to the
                specific plot and harvest date.
                This level of transparency
                guarantees the highest
                medicinal-grade potency.
              </p>
            </div>

          </div>

          {/* ITEM 2 */}
          <div className="ethicalItem">

            <div className="ethicalIcon">
              <PiPlant />
            </div>

            <div className="ethicalText">
              <h3>Sustainable Agroforestry</h3>

              <p>
                Our partners practice
                biodiversity-first farming.
                Pepper vines climb natural
                shade trees while cardamom
                thrives in the understory,
                preserving the delicate
                Western Ghats ecosystem.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGES */}
        <div className="ethicalRight">

          <div className="ethicalGlass">

            <div className="ethicalSmallImage">
              <img
                src={PepperImg}
                alt=""
              />
            </div>

            <div className="ethicalLargeImage">
              <img
                src={FarmerImg}
                alt=""
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}