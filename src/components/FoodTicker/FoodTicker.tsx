import "./FoodTicker.css";

const tickerItems = [
  "Food Science Journal",
  "Label Lab — Weekly",
  "Browning Files",
  "Kitchen Decoded",
  "Field Notes",
  "Final Verdict",
  "Ingredient Stories",
  "Food Culture",
  "Honest Food Reviews",
];

export default function FoodTicker() {
  return (
    <section className="foodTicker">

      <div className="tickerFade left"></div>
      <div className="tickerFade right"></div>

      <div className="tickerTrack">

        {/* FIRST SET */}
        <div className="tickerGroup">
          {tickerItems.map((item, index) => (
            <div className="tickerItem" key={index}>
              <span>{item}</span>
              <div className="tickerDot"></div>
            </div>
          ))}
        </div>

        {/* DUPLICATE FOR INFINITE LOOP */}
        <div className="tickerGroup">
          {tickerItems.map((item, index) => (
            <div className="tickerItem" key={index}>
              <span>{item}</span>
              <div className="tickerDot"></div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}