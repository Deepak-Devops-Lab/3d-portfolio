import { useCallback, useState } from "react";
import {
  MdArrowBack,
  MdArrowForward,
  MdOpenInNew,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

import WorkImage from "./WorkImage";
import "./styles/Work.css";

const projects = [
  {
    title: "AWS Auto Scaling Web Application",
    category: "Highly Available Cloud Infrastructure",
    description:
      "Designed a scalable AWS web hosting environment that automatically increases or decreases EC2 capacity according to application demand. CloudWatch alarms monitor CPU utilization and trigger scaling actions.",
    tools:
      "AWS EC2 • Auto Scaling • Launch Template • ALB • CloudWatch • IAM",
    image: "/images/aws.webp",
    github: "https://github.com/Deepak-Devops-Lab",
    liveDemo: "",
  },
  {
    title: "Linux Apache Web Hosting",
    category: "Linux Server Administration",
    description:
      "Deployed and configured an Apache web server on Linux, managed website files and permissions, enabled remote access through SSH and practised virtual-host configuration.",
    tools:
      "Linux • Apache • SSH • WinSCP • Virtual Hosts • Security Groups",
    image: "/images/linux.webp",
    github: "https://github.com/Deepak-Devops-Lab",
    liveDemo: "",
  },
  {
    title: "Route 53 Custom Domain Hosting",
    category: "DNS and Cloud Website Deployment",
    description:
      "Connected a custom domain with an AWS-hosted website by configuring Route 53 hosted zones, nameservers and DNS records. Practised domain mapping and DNS troubleshooting.",
    tools:
      "Route 53 • DNS • GoDaddy • EC2 • Apache • Custom Domain",
    image: "/images/github.webp",
    github: "https://github.com/Deepak-Devops-Lab",
    liveDemo: "https://deepakdevops.site",
  },
  {
    title: "EC2 and S3 Secure Integration",
    category: "IAM-Based Cloud Storage Access",
    description:
      "Connected an EC2 instance securely with Amazon S3 using an IAM role instead of permanent access keys. Practised AWS CLI operations, Linux permissions and S3 bucket mounting.",
    tools:
      "AWS EC2 • Amazon S3 • IAM Role • AWS CLI • s3fs • Linux",
    image: "/images/terraform.webp",
    github: "https://github.com/Deepak-Devops-Lab",
    liveDemo: "",
  },
  {
    title: "Git Secret Detection Hook",
    category: "Source-Code Security Automation",
    description:
      "Created a pre-commit security workflow that scans files for passwords, private keys and sensitive patterns before allowing a Git commit, helping prevent accidental secret exposure.",
    tools:
      "Git • Git Hooks • Python • Regex • GitHub • Security Automation",
    image: "/images/python.webp",
    github: "https://github.com/Deepak-Devops-Lab",
    liveDemo: "",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) {
        return;
      }

      setIsAnimating(true);
      setCurrentIndex(index);

      window.setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    },
    [currentIndex, isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={project.title}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <p className="carousel-description">
                          {project.description}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">
                            Tools &amp; Technologies
                          </span>

                          <p>{project.tools}</p>
                        </div>

                        <div className="project-actions">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-button project-github-button"
                            data-cursor="disable"
                            aria-label={`Open ${project.title} GitHub repository`}
                          >
                            <FaGithub />
                            View GitHub Repository
                          </a>

                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-button project-live-button"
                              data-cursor="disable"
                              aria-label={`Open ${project.title} live demo`}
                            >
                              <MdOpenInNew />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={`${project.title} project preview`}
                        link={project.github}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.title}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${project.title}`}
                aria-current={index === currentIndex ? "true" : undefined}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;