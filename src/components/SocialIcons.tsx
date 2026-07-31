import { useEffect } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
} from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";

import HoverLinks from "./HoverLinks";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");

    if (!social) {
      return;
    }

    const cleanupFunctions: Array<() => void> = [];

    social.querySelectorAll("span").forEach((item) => {
      const element = item as HTMLElement;
      const link = element.querySelector("a");

      if (!link) {
        return;
      }

      let animationFrameId = 0;
      let rect = element.getBoundingClientRect();

      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = mouseX;
      let currentY = mouseY;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      const handleMouseMove = (event: MouseEvent) => {
        rect = element.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const isInside =
          x >= 0 &&
          x <= rect.width &&
          y >= 0 &&
          y <= rect.height;

        if (isInside) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", handleMouseMove);
      updatePosition();

      cleanupFunctions.push(() => {
        document.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationFrameId);
      });
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="icons-section">
      <div
        className="social-icons"
        data-cursor="icons"
        id="social"
      >
        <span>
          <a
            href="https://github.com/Deepak-Devops-Lab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Deepak's GitHub profile"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </span>

        <span>
          <a
            href="mailto:dk.kumar201306@gmail.com"
            aria-label="Send an email to Deepak"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </span>

        <span>
          <a
            href="https://deepakdevops.site"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Deepak's portfolio website"
            title="Portfolio"
          >
            <FaGlobe />
          </a>
        </span>
      </div>

      <a
        className="resume-button"
        href="/Deepak-Kumar-Tanti-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Deepak Kumar Tanti's resume"
      >
        <HoverLinks text="RESUME" />

        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;