import React from "react";

interface ButtonProps {
  onClick: () => void;
  name: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, name }) => {
  return (
    <div>
      <button onClick={onClick}>{name}</button>
    </div>
  );
};

export default Button;
