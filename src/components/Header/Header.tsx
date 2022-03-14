import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="backdrop-blur-2xl sticky top-0">
      <nav className="container mx-auto w-full flex items-center h-14">
        <h2 className="sf text-3xl font-bold">Darshan Ponikar</h2>
      </nav>
    </div>
  );
};
