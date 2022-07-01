import React, { useState } from "react";

export enum CardVariants {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant?: CardVariants;
  children?: React.ReactNode;
  onClick: (i: number) => void;
}

const Card = ({ width, height, children, variant, onClick }: CardProps) => {
  const [state, setState] = useState<number>(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariants.outlined ? "1px solid gray" : "none",
        background: variant === CardVariants.primary ? "lightgray" : "",
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
