import styles from "styles/social.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Social({ iconSize = "initial" }) {
  return (
    <ul className={styles.list} style={{ "--icon-size": iconSize }}>
      <li>
        <a href="https://twitter.com/kyoya_r08" target="blank">
          <FontAwesomeIcon icon={faXTwitter} />
          <span className="sr-only">X</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/kyoya7869" target="blank">
          <FontAwesomeIcon icon={faInstagram} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/Kyoya67" target="blank">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  );
}
