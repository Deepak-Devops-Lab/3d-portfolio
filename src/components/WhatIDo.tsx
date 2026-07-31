import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (element: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = element;
  };

  useEffect(() => {
    const clickHandlers: Array<{
      container: HTMLDivElement;
      handler: () => void;
    }> = [];

    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (!container) {
          return;
        }

        container.classList.remove("what-noTouch");

        const handler = () => handleClick(container);

        container.addEventListener("click", handler);
        clickHandlers.push({ container, handler });
      });
    }

    return () => {
      clickHandlers.forEach(({ container, handler }) => {
        container.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>

          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />

              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* AWS and Linux card */}
          <div
            className="what-content what-noTouch"
            ref={(element) => setRef(element, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />

                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AWS &amp; LINUX</h3>

              <h4>Cloud Infrastructure and Server Administration</h4>

              <p>
                I build and configure AWS cloud resources and Linux servers
                through practical projects. My work includes website
                deployment, domain configuration, access management,
                monitoring and scalable cloud infrastructure.
              </p>

              <h5>Skills &amp; tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">AWS EC2</div>
                <div className="what-tags">Amazon S3</div>
                <div className="what-tags">AWS IAM</div>
                <div className="what-tags">Route 53</div>
                <div className="what-tags">CloudWatch</div>
                <div className="what-tags">Auto Scaling</div>
                <div className="what-tags">AWS CLI</div>
                <div className="what-tags">Linux</div>
                <div className="what-tags">Apache</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* DevOps and automation card */}
          <div
            className="what-content what-noTouch"
            ref={(element) => setRef(element, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVOPS &amp; AUTOMATION</h3>

              <h4>Building Reliable Deployment Workflows</h4>

              <p>
                I use Git and GitHub to manage source code and I am developing
                practical knowledge of containers, CI/CD, infrastructure as
                code and automation. My goal is to build repeatable, secure and
                monitored deployment workflows.
              </p>

              <h5>Skills &amp; tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">GitLab</div>
                <div className="what-tags">Bash</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Docker — Learning</div>
                <div className="what-tags">Jenkins — Learning</div>
                <div className="what-tags">Terraform — Learning</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  const isActive = container.classList.contains("what-content-active");
  const parent = container.parentElement;

  if (!parent) {
    return;
  }

  const siblings = Array.from(parent.children).filter(
    (element): element is HTMLDivElement =>
      element instanceof HTMLDivElement &&
      element.classList.contains("what-content")
  );

  siblings.forEach((sibling) => {
    sibling.classList.remove("what-content-active", "what-sibling");
  });

  if (!isActive) {
    container.classList.add("what-content-active");

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.add("what-sibling");
      }
    });
  }
}