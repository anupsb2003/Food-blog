import { useEffect, useRef } from "react";
import "./ManifestoSection.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GiThermometerCold } from "react-icons/gi";
import { PiNumberCircleEightBold } from "react-icons/pi";
import { RiMicLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 92%",
          end: "top 40%",
          scrub: 1.2,
        },
      });

      tl.from(".manifesto-section", {
        opacity: 0,
        scale: 0.98,
        duration: 1.5,
        ease: "power3.out",
        immediateRender: false,
      });

      tl.from(
        ".manifesto-glow",
        {
          scale: 0,
          opacity: 0,
          rotate: 120,
          duration: 1.8,
          ease: "power4.out",
          immediateRender: false,
        },
        "-=1"
      );

      tl.from(
        ".manifesto-quote",
        {
          x: -100,
          y: -40,
          opacity: 0,
          rotate: -5,
          duration: 1.6,
          ease: "power4.out",
          immediateRender: false,
        },
        "-=1"
      );

      tl.from(
        ".quote-mark",
        {
          scale: 0,
          rotate: -180,
          opacity: 0,
          duration: 1,
          ease: "back.out(2)",
          immediateRender: false,
        },
        "-=1"
      );

      tl.from(
        ".manifesto-quote p",
        {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          immediateRender: false,
        },
        "-=0.8"
      );

      tl.from(
        ".manifesto-content",
        {
          y: 80,
          scale: 0.94,
          opacity: 0,
          duration: 1.7,
          ease: "power4.out",
          immediateRender: false,
        },
        "-=1.2"
      );

      tl.from(
        ".manifesto-label",
        {
          y: 40,
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "back.out(2)",
          immediateRender: false,
        },
        "-=1"
      );

      tl.from(
        ".manifesto-content p",
        {
          y: 40,
          opacity: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          immediateRender: false,
        },
        "-=0.8"
      );

      tl.from(
        ".manifesto-stats",
        {
          x: 100,
          y: -40,
          opacity: 0,
          rotate: 5,
          duration: 1.6,
          ease: "power4.out",
          immediateRender: false,
        },
        "-=1.5"
      );

      tl.from(
        ".stat-item",
        {
          x: 40,
          opacity: 0,
          stagger: 0.25,
          duration: 1.2,
          ease: "power4.out",
          immediateRender: false,
        },
        "-=1"
      );

      tl.from(
        ".stat-icon",
        {
          scale: 0,
          rotate: 180,
          opacity: 0,
          stagger: 0.2,
          duration: 0.9,
          ease: "back.out(2)",
          immediateRender: false,
        },
        "-=1"
      );

      tl.from(
        ".stat-text h3",
        {
          y: 20,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
        },
        "-=0.9"
      );

      tl.from(
        ".stat-text span",
        {
          y: 15,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
        },
        "-=0.8"
      );

      gsap.to(".manifesto-quote", {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".manifesto-content", {
        y: 10,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".manifesto-stats", {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".manifesto-quote", {
        x: -12,
        y: -16,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".manifesto-content", {
        y: -28,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".manifesto-stats", {
        x: 12,
        y: -16,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".manifesto-glow", {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="manifesto-section" ref={sectionRef}>
      <div className="manifesto-glow"></div>

      <div className="manifesto-container">
        {/* LEFT */}
        <div className="manifesto-quote">
          <div className="quote-mark">“</div>

          <p>
            Traditional cooking is often done without measurements, but it
            carries deep knowledge through smell, sound, colour, timing, and
            experience. This blog explains the science behind those instincts.
          </p>
        </div>

        {/* CENTER */}
        <div className="manifesto-content">
          <span className="manifesto-label">
            WHY THIS EXISTS
          </span>

          <p>
            There are many food blogs, but this one is built around a
            different purpose: helping people understand food more clearly
            through science, culture, and honest observation.
          </p>

          <p>
            This is not only a recipe site. It is a journal of curiosity —
            part food science, part cultural memory, part consumer awareness,
            and part storytelling.
          </p>
        </div>

        {/* RIGHT */}
        <div className="manifesto-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <PiNumberCircleEightBold />
            </div>

            <div className="stat-text">
              <h3>8</h3>
              <span>Content pillars</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <GiThermometerCold />
            </div>

            <div className="stat-text">
              <h3>140°</h3>
              <span>Cooking science reference</span>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <RiMicLine />
            </div>

            <div className="stat-text">
              <h3>1</h3>
              <span>Unique editorial voice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}