import React, { FC } from "react";

interface LabelProps {
  text: string;

  variant: "success" | "danger" | "neutral";
}

const LabelStyle: Record<LabelProps["variant"], string> = {
  success: "bg-green-600",
  neutral: "bg-yellow-600",
  danger: "bg-red-600",
};
export const Label: FC<LabelProps> = ({ text, variant }) => {
  return (
    <div
      className={`font-medium px-3 rounded text-white text-sm ${LabelStyle[variant]}`}
    >
      {text}
    </div>
  );
};
