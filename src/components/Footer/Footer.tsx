import React from "react";

export const Footer = () => {
  return (
    <div className="bg-white border-t">
      <footer className="px-2 py-4 container sm:flex-row flex-col mx-auto flex sm:justify-between bg-white">
        <h5 className="sm:text-left text-center">Darshan Ponikar</h5>

        <div className="text-gray-500 sm:text-left text-center">
          Made this with NextJS. ❤️
        </div>
      </footer>
    </div>
  );
};
