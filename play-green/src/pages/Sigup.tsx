import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  setDoc,
  doc,
  addDoc,
  collection,
} from "firebase/firestore";
import {
  StyledButton,
  StyledLoginPage,
  StyledInput,
  StyledSignUp,
  StyledLink,
} from "./styles";

export interface ILoginPageProps {}

const SignUpPage: React.FunctionComponent<ILoginPageProps> = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const db = getFirestore();

  const signUp = () => {
    setAuthing(true);

    createUserWithEmailAndPassword(auth, email, password).then(async (user) => {
      await setDoc(doc(db, `users/${user.user.uid}`), {
        uid: user.user.uid,
        name: name,
        email: email,
      });
      await addDoc(collection(db, `users/${user.user.uid}/likes`), {});
    });
    navigate("/");
  };

  return (
    <StyledLoginPage>
      <h1>SignUp Page</h1>

      <StyledInput
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <StyledInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <StyledInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <StyledSignUp>
        ¿Already have an Account?{" "}
        <StyledLink onClick={() => navigate("/login")}></StyledLink>
      </StyledSignUp>
      <StyledButton onClick={() => signUp()} disabled={authing}>
        Sign up
      </StyledButton>
    </StyledLoginPage>
  );
};

export default SignUpPage;
