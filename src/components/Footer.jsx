import React from "react";
import githubMark from "../assets/images/github-mark-white.png";
import linkedIn from "../assets/images/LI-Logo.png";

function Footer() {
  return (
    <footer>
      <nav>
        <a
          href="https://github.com/snabaj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubMark} id="github" alt="github repo" />
        </a>
        <a
          href="https://www.linkedin.com/in/stella-nabajja-09052535b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} id="linkedin" alt="linkedin profile" />
        </a>
      </nav>
      {/* <a href="mailto:snabajja@gmail.com">📧</a> */}
      {/* <a href="tel:+85">Phone</a> */}
      <p>&copy; 2025 Stella Nabajja. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
