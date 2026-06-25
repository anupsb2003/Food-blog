import { useEffect } from "react";
import gsap from "gsap";
import "./Contact.css";

import ChefImage from "../../assets/Contact.png";

function Contact() {
  useEffect(() => {

  gsap.fromTo(
    ".contact-title",
    {
      y: 200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,

      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".contact-left",
    {
      x: -150,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,

      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 85%",
        end: "top 40%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".contact-form",
    {
      x: 150,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,

      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 85%",
        end: "top 40%",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".input-group",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,

      stagger: 0.15,

      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 85%",
        end: "top 40%",
        scrub: true,
      },
    }
  );

  gsap.to(".contact-title", {
    y: -120,

    scrollTrigger: {
      trigger: ".contact",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

}, []);

  return (
    <section className="contact">

      <h1 className="contact-title">
        Let's Stay in
        <br />
        Touch
      </h1>

      <div className="contact-container">

        <div className="contact-left">

          <p>
            Ready to elevate your next meal or
            event? Contact us for a personalized
            consultation and discover how our
            culinary creations can make your
            occasion extraordinary.
          </p>

          <div className="contact-image">
            <img
              src={ChefImage}
              alt="Chef"
            />
          </div>

        </div>

        <form className="contact-form">

          <div className="name-row">

            <div className="input-group">
              <label>
                First Name
              </label>

              <input
                type="text"
                placeholder=""
              />
            </div>

            <div className="input-group">
              <label>
                Last Name
              </label>

              <input
                type="text"
                placeholder=""
              />
            </div>

          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
            />
          </div>

          <div className="input-group">
            <label>Subject</label>

            <input
              type="text"
            />
          </div>

          <div className="input-group">
            <label>Message</label>

            <textarea rows={6} />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Submit
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;