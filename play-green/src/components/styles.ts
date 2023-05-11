import styled, {DefaultTheme, ThemedStyledProps} from 'styled-components';

    export const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    `;
    
    export const MainContainer = styled.div`
    flex: 1;
    width: 80%;
    max-width: 600px;
    `;
    
    export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    background:#E5E5E5;
    `;
    interface NavbarProps {
        selected: boolean;
      }
export const NavbarContainer = styled.div<ThemedStyledProps<NavbarProps, DefaultTheme>>`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: fixed;
bottom: 0;
width: 80%;
height: 37px;
padding: 24px;
background: #FFFFFF;
border-radius: 16px;
margin-bottom: 16px;
z-index:3;
`;

export const Icon = styled.div<ThemedStyledProps<NavbarProps, DefaultTheme>>`
color: ${(props) => (props.selected ? "#1a5be1" : "#777777")};
font-size: 24px;
background-color: ${(props) => (props.selected ? "#f5f5f5" : "#ffffff")};
width:59px,
height:59px;
justify-content:center;
align-items:center;
display:flex;
padding: 14px;
border-radius:12px;
`;


export const StyledCard = styled.div`
  min-width: 380px;
  width: 100%;
  max-width: 390px;
  height: 50vw;
  max-height: 564px;
  border-radius: 32px;
  background-color: #ffffff;
  color: #fefefe;
  font-size: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 32px 32px 0 0;
  }
`;

export const StyledTitle = styled.div`
  width: 95%;
  height: 15%;
  border-radius: 0px 0px 32px 32px;
  justify-content:center;
  align-items:center;
  font-size:34px;
  padding-top:26px;
  padding-left: 20px;
  background: linear-gradient(
    360deg,
    #000000 0%,
    #000000 58.85%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 3vw;
  
  svg {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const StyledButtonHeart = styled.div`
  background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
  width: 20vw;
  max-width: 81px;
  height: 20vw;
  max-height: 81px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
  box-shadow: 0px 2vw 5vw rgba(35, 107, 254, 0.2);
`;

export const StyledButton = styled.div`
  background: #ffffff;
  width: 13vw;
  max-width: 51px;
  height: 13vw;
  max-height: 51px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
  box-shadow: 0px 2vw 5vw rgba(0, 0, 0, 0.08);
`;
