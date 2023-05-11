import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  StyledLoginPage,
  StyledInput,
  StyledForgotPassword,
  StyledSignUp,
  StyledLink,
} from "./styles";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async () => {
    setAuthing(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <StyledLoginPage>
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet consectetur adpiscing elit.</p>

      <StyledInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <StyledInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <StyledForgotPassword>¿Forgot your password?</StyledForgotPassword>
      <StyledSignUp>
        ¿No Account?{" "}
        <StyledLink onClick={() => navigate("/signup")}>SignUp</StyledLink>
      </StyledSignUp>
      <StyledButton onClick={() => signInWithEmail()} disabled={authing}>
        Login
      </StyledButton>
    </StyledLoginPage>
  );
};

export default LoginPage;
