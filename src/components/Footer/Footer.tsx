import { FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 Darshan Ponikar</p>
      <p>Built with intention. No templates.</p>
    </footer>
  );
};
