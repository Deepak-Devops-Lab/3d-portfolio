import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">
          I am a B.Tech Computer Science Engineering student at Noida
          International University with a strong interest in DevOps, AWS Cloud,
          Linux administration and automation. I enjoy learning through
          practical projects and understanding how applications are deployed,
          monitored and scaled in real-world environments.
        </p>

        <p className="para">
          My hands-on experience includes AWS EC2, IAM, S3, Route 53,
          CloudWatch, Auto Scaling, Elastic Beanstalk, Linux, Apache, Git,
          GitHub, GitLab, networking and AWS CLI.
        </p>

        <p className="para">
          I am currently improving my skills in Docker, Jenkins, Terraform,
          CI/CD, Bash and Python automation. My career goal is to work as a
          DevOps Engineer, AWS Cloud Engineer or Linux Administrator.
        </p>
      </div>
    </div>
  );
};

export default About;