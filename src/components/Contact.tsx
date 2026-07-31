import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
          <h4>Connect</h4>

<p>
  📧 dk.kumar201306@gmail.com
</p>

<p>
  📱 +91 9871621149
</p>

<h4>Education</h4>

<p>
  B.Tech Computer Science Engineering
</p>

<p>
  Noida International University
</p>

<p>
  CGPA: 7.50
</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Deepak-Devops-Lab"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
  href="mailto:dk.kumar201306@gmail.com"
  data-cursor="disable"
  className="contact-social"
>
  Email <MdArrowOutward />
</a>
<a
  href="/Deepk-Kumar-Tanti-Resume.pdf"
  target="_blank"
  rel="noreferrer"
  data-cursor="disable"
  className="contact-social"
>
  Resume <MdArrowOutward />
</a>
<a
  href="http://deepakdevops.site"
  target="_blank"
  rel="noreferrer"
  data-cursor="disable"
  className="contact-social"
>
  Portfolio <MdArrowOutward />
</a>
          </div>
          <div className="contact-box">
            <h2>
              Built with ❤️ by <br /> by <span>Deepak Kumar Tanti</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
