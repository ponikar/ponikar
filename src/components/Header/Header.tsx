import React, { FC } from "react";
import { Button } from "../Input/button";
import styles from "./header.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.header_container}>
      <nav className="container mx-auto w-full flex justify-between items-center h-16">
        <h2 className="sf text-3xl font-bold">Darshan Ponikar</h2>

       <a href="#say_hi">
       <Button>
          Say Hi! <span className={styles.wave_hand}>✋</span>
        </Button>
       </a>
      </nav>
    </div>
  );
};
