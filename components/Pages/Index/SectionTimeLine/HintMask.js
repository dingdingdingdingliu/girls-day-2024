import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useSpring, animated } from "@react-spring/web";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// 提示遮罩動態元件，尺寸同時間軸區塊
const AnimatedHintWrapper = styled(animated.div)`
  width: 100%;
  height: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 39;
  background-color: rgba(200, 200, 200, 0.05);
  backdrop-filter: blur(5px); /* 模糊效果 */
  display: ${(props) => (props.isMaskOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const AnimatedRightWrapper = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const StyledArrow = styled(MdKeyboardDoubleArrowRight)`
  color: ${(props) => props.theme.colors.black};
  font-size: 68px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: 32px;
  }
`;

function AnimatedArrowLeft() {
  const [leftSprings] = useSpring(() => ({
    from: { x: 0 },
    to: [{ x: -25 }, { x: 25 }],
    config: { mass: 1, tension: 800, friction: 100 },
    loop: true,
  }));

  return (
    <AnimatedRightWrapper
      style={{
        transform: leftSprings.x.to(
          (x) => `translate(calc(-50% + ${x}px), -50%)`,
        ),
      }}
    >
      <StyledArrow />
    </AnimatedRightWrapper>
  );
}

export default function HintMask({ fadeInHint, isMaskOpen }) {
  return (
    <AnimatedHintWrapper style={fadeInHint} isMaskOpen={isMaskOpen}>
      <AnimatedArrowLeft />
    </AnimatedHintWrapper>
  );
}
