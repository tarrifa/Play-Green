import React from "react";
import { FaHome, FaClock, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { NavbarContainer, Icon } from "./styles";

interface NavbarProps {
  selected: boolean;
}

const BottomNavBar: React.FC = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isHistory = location.pathname === "/history";
  const isLogin = location.pathname === "/login";

  return (
    <NavbarContainer selected={isHome || isHistory}>
      <Icon selected={isHome} onClick={() => navigate("/")}>
        <FaHome />
      </Icon>
      <Icon selected={isHistory} onClick={() => navigate("/history")}>
        <FaClock />
      </Icon>
      <Icon selected={isLogin} onClick={() => signOut(auth)}>
        <FaSignOutAlt />
      </Icon>
    </NavbarContainer>
  );
};

export default BottomNavBar;
