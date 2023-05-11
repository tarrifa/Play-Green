import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  DocumentData,
  orderBy,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { getAuth } from "firebase/auth";
import { FaHeart, FaTimes } from "react-icons/fa";
import { StyledCard, StyledIcon, StyledText } from "./styles";

export default function History() {
  const auth = getAuth();
  const uid = auth.currentUser?.uid;
  const [history, setHistory] = useState<DocumentData[]>([]);
  const q = query(
    collection(db, `users/${uid}/likes`),
    orderBy("time", "desc")
  );

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const querySnapshot = await getDocs(q);
        const history = querySnapshot.docs.map((doc) => doc.data());
        setHistory(history);
        console.log(history);
      } catch (err) {
        console.log(err);
      }
    };
    fetchHistory();
  }, []);

  return (
    <>
      <h1>History</h1>
      <p>¡Here you can see your liked and disliked teams!</p>

      {history.map((item, index) => (
        <StyledCard>
          <img src={item.image} alt={item.name} />
          <StyledText>{item.name}</StyledText>
          <StyledIcon>
            {item.liked ? (
              <FaHeart color="#2067F8" />
            ) : (
              <FaTimes color="#EA596F" />
            )}
          </StyledIcon>
        </StyledCard>
      ))}
    </>
  );
}
