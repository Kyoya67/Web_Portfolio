import { useState } from "react";
import styles from "styles/navi.module.css";
import Link from "next/link";

function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">TOP</span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link href="/">
            <div onClick={closeNav}>Profile</div>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <div onClick={closeNav}>Works</div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div onClick={closeNav}>Contact</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
