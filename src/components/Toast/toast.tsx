import React, { FC, useState } from "react";

interface ToastProps {
  text: string;
}
export const Toast: FC<ToastProps> = ({ text }) => {
  return (
    <div
      role="alert"
      className="default_shadow text-sm p-2 lg:min-w-[300px] min-w-[90%] z-20 fixed left-5 bottom-5 mx-auto bg-white"
    >
      {text}
    </div>
  );
};
