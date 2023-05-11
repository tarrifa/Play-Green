import React from "react";

interface CardProps {
  image: string;
  name: string;
  liked: boolean;
}

const Row: React.FC<CardProps> = ({ image, name, liked }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>{liked}</h3>
    </div>
  );
};

export default Row;
