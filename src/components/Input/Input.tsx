import React, { FC, InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
}
export const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>
      <input type="text" className={styles.input} {...props} />
    </div>
  );
};

export const TextArea: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>
      <textarea className={styles.input} {...props} />
    </div>
  );
};
