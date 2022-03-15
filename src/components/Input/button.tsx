import React, { FC } from "react";

export const BlockButton: FC = ({ children }) => {
  return (
    <button className="bg-black font-light text-sm p-2 text-white">
      {children}
    </button>
  );
};

export const Button: FC = ({ children }) => {
  return (
    <button className="bg-black text-white text-sm font-light px-4 p-2">
      {children}
    </button>
  );
};
