import { useState } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useSpring, animated } from "@react-spring/web";
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

  @media (max-width: ${globalConfig.tablet}) {
    width: ${(props) => (props.isTablet ? "230px" : "width: 365px;")};
    height: ${(props) => (props.isTablet ? "50px" : "width: 82px;")};
  }

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
  color: ${(props) => props.textColor};
  letter-spacing: 8px;

  @media (max-width: ${globalConfig.tablet}) {
    font-size: ${(props) =>
      props.isTablet ? props.theme.fontSizes[26] : props.theme.fontSizes[40]};
    letter-spacing: ${(props) => (props.isTablet ? "4px" : "8px")};
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[26]};
    letter-spacing: 4px;
  }
`;

const AnimatedArrowWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
`;

const ArrowDownStyle = styled(MdOutlineKeyboardArrowDown)`
  color: ${(props) => props.theme.colors.white};
  font-size: 48px;
  margin-left: ${(props) => (props.position === "right" ? "-8px" : 0)};

  @media (max-width: ${globalConfig.tablet}) {
    font-size: ${(props) => (props.isTablet ? "36px" : "48px")};
  }

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
  isTablet = false,
}) {
  const [reverse, setReverse] = useState(false);

  const flashingIcon = useSpring({
    from: { opacity: reverse ? 1 : 0.2 },
    to: { opacity: reverse ? 0.2 : 1 },
    config: { duration: 500 }, // 每個階段的時間一致
    onRest: () => setReverse(!reverse), // 動畫完成後反轉
    loop: true, // 無限循環
  });

  return (
    <BevelButtonStyle
      size={size}
      buttonColor={buttonColor}
      onClick={onClick}
      isTablet={isTablet}
    >
      <BevelButtonText size={size} textColor={textColor} isTablet={isTablet}>
        <AnimatedArrowWrapper style={flashingIcon}>
          <ArrowDownStyle isTablet={isTablet} />
        </AnimatedArrowWrapper>
        {buttonText}
        <AnimatedArrowWrapper style={flashingIcon}>
          <ArrowDownStyle isTablet={isTablet} position="right" />
        </AnimatedArrowWrapper>
      </BevelButtonText>
    </BevelButtonStyle>
  );
}
