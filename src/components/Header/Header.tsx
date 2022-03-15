import React, { FC } from "react";
import { Button } from "../Input/button";

export const Header: FC = () => {
  return (
    <div className="fixed border-b w-full top-0">
      <nav className="container mx-auto w-full flex justify-between items-center h-16">
        <h2 className="sf text-3xl font-bold">Darshan Ponikar</h2>

        <Button>Say Hi! 👋🏻</Button>
      </nav>
    </div>
  );
};
