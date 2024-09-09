import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const BevelButtonStyle = styled.div`
  width: 365px;
  height: 82px;
  background-color: ${(props) => props.buttonColor};
  clip-path: polygon(4% 0, 100% 0%, 96% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 230px;
    height: 50px;
  }
`;

const BevelButtonText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes[40]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.textColor};
  letter-spacing: 8px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[26]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    letter-spacing: 4px;
  }
`;

const ArrowDownStyle = styled(MdOutlineKeyboardArrowDown)`
  color: ${(props) => props.theme.colors.white};
  font-size: 48px;
  margin-left: ${(props) => (props.position === "right" ? "-8px" : 0)};

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: 36px;
    margin-left: ${(props) => (props.position === "right" ? "-4px" : 0)};
  }
`;

export default function BevelButton({
  size = "large",
  buttonColor,
  textColor,
  buttonText,
  onClick,
}) {
  return (
    <BevelButtonStyle size={size} buttonColor={buttonColor} onClick={onClick}>
      <BevelButtonText size={size} textColor={textColor}>
        <ArrowDownStyle />
        {buttonText}
        <ArrowDownStyle position="right" />
      </BevelButtonText>
    </BevelButtonStyle>
  );
}
