import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS & Linux Software Trainee</h4>
                <h5>SO INFOTECH (P) LTD.</h5>
              </div>

              <h3>2026</h3>
            </div>

            <p>
              Gaining hands-on experience with AWS and Linux administration,
              including EC2, IAM, S3, AWS CLI, Route 53, CloudWatch, Apache web
              servers, networking and cloud deployment practices.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science Engineering</h4>
                <h5>Noida International University</h5>
              </div>

              <h3>Present</h3>
            </div>

            <p>
              Pursuing B.Tech in Computer Science Engineering with a CGPA of
              7.50. Alongside academics, I am building practical knowledge in
              DevOps, AWS Cloud, Linux, networking, Git and automation.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS Cloud Projects</h4>
                <h5>Independent Hands-on Practice</h5>
              </div>

              <h3>2026</h3>
            </div>

            <p>
              Built projects involving EC2 web servers, Auto Scaling,
              CloudWatch alarms, custom domain configuration with Route 53,
              IAM-based S3 access and Linux website hosting.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Linux & Git Practice Lab</h4>
                <h5>VMware, GitHub and GitLab</h5>
              </div>

              <h3>2026</h3>
            </div>

            <p>
              Practised Linux networking, package management, Apache virtual
              hosts, SSH, Git repositories, branching, commits, remote
              repositories and basic pre-commit secret detection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;