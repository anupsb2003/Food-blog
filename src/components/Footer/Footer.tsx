import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

function Footer() {

  useEffect(() => {

    gsap.fromTo(
      ".footer-title",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: ".social-banner",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".footer-left",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: ".footer-main",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".footer-contact",
      {
        y: 150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: ".footer-main",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".footer-newsletter",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,

        scrollTrigger: {
          trigger: ".footer-main",
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.to(".footer-title", {
      y: -150,

      scrollTrigger: {
        trigger: ".social-banner",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".social-icons", {
      y: -80,

      scrollTrigger: {
        trigger: ".footer-main",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".footer-main",
      {
        scale: 0.9,
      },
      {
        scale: 1,

        scrollTrigger: {
          trigger: ".footer-main",
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

  }, []);

  return (
    <footer className="footer">

      <section className="social-banner">
        <h1 className="footer-title">
          Follow Us On
          <br />
          Social
        </h1>
      </section>

      <section className="footer-main">

        <div className="footer-left">
          <h2>
            Taste Adventure
            <br />
            Starts Here
          </h2>

          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Email</h3>
          <p>foodlab@gmail.com</p>

          <h3>Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="footer-newsletter">
          <p>
            Subscribe to our newsletter
            and receive updates on food
            science, reviews and stories.
          </p>

          <input
            type="email"
            placeholder="Email Address"
          />

          <button>
            Sign Up
          </button>
        </div>

      </section>

      <div className="footer-bottom">
        © 2026 FoodLab. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;