import React, { useState } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  StyledCard,
  StyledTitle,
  StyledIcon,
  StyledButtonHeart,
  StyledButton,
} from "./styles";

interface CardProps {
  image: string;
  name: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, name, onClick }) => {
  const [liked, setLiked] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user?.uid;
  const db = getFirestore();

  const handleLike = async () => {
    setLiked((prevLiked) => {
      addDoc(collection(db, `users/${uid}/likes`), {
        liked: !prevLiked,
        image: image,
        name: name,
        time: Date.now(),
      });
      onClick();
      return true;
    });
  };

  const handleDislike = async () => {
    setLiked((prevLiked) => {
      addDoc(collection(db, `users/${uid}/likes`), {
        liked: prevLiked,
        image: image,
        name: name,
        time: Date.now(),
      });
      onClick();
      return false;
    });
  };
  return (
    <>
      <StyledCard>
        <img src={image} alt={name} />
        <StyledTitle>{name}</StyledTitle>
      </StyledCard>
      <StyledIcon>
        <StyledButton>
          <FaTimes size={24} onClick={handleDislike} color="#D36060" />
        </StyledButton>
        <StyledButtonHeart>
          <FaHeart size={35} onClick={handleLike} color="white" />
        </StyledButtonHeart>
      </StyledIcon>
    </>
  );
};

export default Card;
