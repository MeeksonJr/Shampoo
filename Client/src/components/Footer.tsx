import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import "./Footer.css"
import "./../App.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:example@example.com">
          <FaEnvelope />
        </a>
        <a href="tel:+123456789">
          <FaPhone />
        </a>
      </div>
      <p>&copy; 2024 ShampooApp. All rights reserved.</p>
    </footer>
  );
}
