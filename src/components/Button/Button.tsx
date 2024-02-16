import React from "react";

interface ButtonProps {
  onClick: () => void;
  name: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, name, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {name}
      </button>
    </div>
  );
};

export default Button;
