import React, { FC, useState } from "react";
import { Info, X } from "react-feather";

export const Alert: FC = ({ children }) => {
  const [show, setShow] = useState(true);
  return show ? (
    <div className="w-full flex items-center gap-2 my-4 p-3 default_shadow border">
      <Info className="self-start w-16 h-16" />
      <p className="text-sm">{children}</p>

      <X
        className="ml-auto cursor-pointer w-16 h-16"
        onClick={() => setShow(false)}
        size={22}
      />
    </div>
  ) : (
    <div />
  );
};
