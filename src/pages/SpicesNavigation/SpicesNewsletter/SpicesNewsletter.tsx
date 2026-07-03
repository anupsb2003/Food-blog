import "./SpicesNewsletter.css";

export default function SpicesNewsletter() {
  return (
    <section className="spiceNews">
      
      
      <div className="spiceNewsContent">

        <span className="spiceNewsTag">
          Join the Trade
        </span>

        <h2 className="spiceNewsTitle">
          Experience the Difference of
          <br />
          Freshly Milled Heritage
        </h2>

        {/* FORM */}
        <form className="spiceNewsForm">

          <input
            type="email"
            placeholder="Your email address"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

        <p className="spiceNewsDescription">
          Join our inner circle for seasonal
          harvest releases and rare spice updates.
        </p>

      </div>

    </section>
  );
}