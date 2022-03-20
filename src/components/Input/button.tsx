import React, { FC } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
}
export const BlockButton: FC<ButtonProps> = ({
  children,
  isLoading,
  ...props
}) => {
  return (
    <button
      disabled={isLoading}
      className="bg-black flex gap-2 justify-center items-center font-light text-sm p-2 text-white"
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

const Loader: FC = () => {
  return (
    <div className="ease-linear w-6 h-6 rounded-full animate-spin border-4 border-gray-400 border-t-white"></div>
  );
};

export const Button: FC = ({ children }) => {
  return (
    <button className="bg-black text-white text-sm font-light px-4 p-2">
      {children}
    </button>
  );
};
