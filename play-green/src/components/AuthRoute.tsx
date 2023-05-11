import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CenteredContainer, MainContainer, AppContainer } from "./styles";
import BottomNavBar from "./BottomNavbar";

export interface IAuthRouteProps {
  children: React.ReactNode;
}
const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        navigate("/login");
      }
    });

    return () => AuthCheck();
  }, [auth]);

  if (loading) return <p>loading ...</p>;

  return (
    <AppContainer>
      <MainContainer>
        <CenteredContainer>{children}</CenteredContainer>
      </MainContainer>
      <BottomNavBar />
    </AppContainer>
  );
};

export default AuthRoute;
