import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  max-width: 326px;
  height: 77px;
  border-radius: 12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 7px;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 600px;
    height: 120px;
  }

  img {
    width: 60%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    border-radius:12px;
    z-index: 0.3;
  }
`;

export const StyledText = styled.div`
  color: white;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  position: absolute;
  width: 77px;
  height: 29px;
  margin-left: 15px;
  z-index: 0.75;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    height: 48px;
    margin-left: 30px;
  }
`;

export const StyledIcon = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
  z-index: 1;
  font-size:24px;
`;

export const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e5e5e5;
  h1 {
    font-size: 42px;
    color: #161617;
  }
  p {
    font-size: 18px;
    color: #232232;
  }
`;

export const StyledInput = styled.input`
  width: 326px;
  height: 65px;
  margin-top: 10px;
  border-radius: 18px;
  border: none;
  background-color: white;
  color: black;
  font-size: 18px;
  &::placeholder {
    color: gray;
    transition: all 0.3s ease-in-out;
  }
  &:focus::placeholder {
    transform: translate(-5px, -20px);
    font-size: 12px;
    font-weight: bold;
    color: gray;
  }
`;

export const StyledForgotPassword = styled.p`
  margin-top: 23px;
  font-size: 14px;
  text-align: left;
`;

export const StyledSignUp = styled.p`
  font-size: 16px;
  text-align: left;
`;

export const StyledLink = styled.a`
  color: #236bfe;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledButton = styled.button`
  margin-top: 22px;
  width: 122px;
  height: 66px;
  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 25px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
