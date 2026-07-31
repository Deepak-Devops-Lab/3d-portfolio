import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello, I'm</h2>

            <h1>
              DEEPAK
              <br />
              <span>KUMAR TANTI</span>
            </h1>

            <p className="landing-summary">
              B.Tech CSE student focused on AWS Cloud, Linux administration,
              DevOps automation and scalable infrastructure.
            </p>

            <div className="landing-badges">
              <span>AWS Cloud</span>
              <span>Linux</span>
              <span>Git</span>
              <span>Docker</span>
              <span>Terraform</span>
              <span>Python</span>
            </div>

            <div className="landing-actions">
              <a
                href="#work"
                className="landing-button landing-primary-button"
                data-cursor="disable"
              >
                View Projects
              </a>

              <a
                href="/Deepak-Kumar-Tanti-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="landing-button landing-secondary-button"
                data-cursor="disable"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="landing-info">
            <h3>AWS • Linux • DevOps</h3>

            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cloud</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>

            <h2>
              <div className="landing-h2-info">Automation</div>
              <div className="landing-h2-info-1">Infrastructure</div>
            </h2>
          </div>
        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;