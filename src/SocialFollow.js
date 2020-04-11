import React from "react";
import styles from "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="info">
      <div className="info1">
        <h4>Created by:</h4>
        <h3>Harshit Kumar</h3>
      </div>
      <div className="info2">
        <h4>Follow me on:</h4>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/harshitkumar2503/"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.github.com/HarshitChauhan/"
            className="github social"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
