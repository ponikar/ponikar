import React, { FC } from "react";
import styles from "./card.module.css";

interface ContentProps {
  contentLine: number;
}

export const Content: FC<ContentProps> = ({ children, contentLine }) => {
  return (
    // @ts-ignore
    <p style={{ "--line": contentLine }} className={styles.content_container}>
      {children}
    </p>
  );
};
