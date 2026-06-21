import { FC, useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Darshan Ponikar</div>
      <ul className={`${styles.links} ${open ? styles.open : ""}`}>
        <li><a href="#work" onClick={close}>Work</a></li>
        <li><a href="#who" onClick={close}>About</a></li>
        <li><a href="#books" onClick={close}>Books</a></li>
        <li><a href="#contact" onClick={close}>Contact</a></li>
      </ul>
      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
};
