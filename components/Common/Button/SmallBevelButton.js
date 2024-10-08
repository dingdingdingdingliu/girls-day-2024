import { useState } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";

const BevelButtonStyle = styled(animated.div)`
  width: 40%;
  min-width: 282px;
  height: 64px;
  background-color: ${(props) => props.buttonColor};
  clip-path: polygon(6% 0, 100% 0%, 94% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 50%;
    max-width: 220px;
    height: 50px;
  }
`;

const BevelButtonText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.textColor};
  letter-spacing: 2px;
  margin-right: -16px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[20]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    letter-spacing: 1px;
  }
`;

const ArrowRightStyle = styled(MdOutlineKeyboardArrowRight)`
  color: ${(props) => props.textColor};
  font-size: 48px;
  margin-top: 4px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: 36px;
    margin-top: 2px;
  }
`;

export default function SmallBevelButton({
  buttonColor,
  textColor,
  buttonText,
  onClick,
}) {
  const [reverse, setReverse] = useState(false);

  const flashingIcon = useSpring({
    from: { opacity: reverse ? 1 : 0.1 },
    to: { opacity: reverse ? 0.1 : 1 },
    config: { duration: 800 }, // 每個階段的時間一致
    onRest: () => setReverse(!reverse), // 動畫完成後反轉
    loop: true, // 無限循環
  });

  return (
    <BevelButtonStyle
      buttonColor={buttonColor}
      onClick={onClick}
      style={flashingIcon}
    >
      <BevelButtonText textColor={textColor}>
        {buttonText}
        <ArrowRightStyle position="right" />
      </BevelButtonText>
    </BevelButtonStyle>
  );
}
