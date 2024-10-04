import { useSpring, animated } from "@react-spring/web";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { AnimatedMainSectionWrapper } from "@/components/Common/FindObjectGame/WrapperComponent";
import {
  ArrowUp,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  HandFinger,
} from "@/components/Common/AnimatedArrow";

const AnimatedUpWrapper = styled(animated.div)`
  position: absolute;
  top: 30%;
  left: 50%;
`;

const AnimatedDownWrapper = styled(animated.div)`
  position: absolute;
  top: 70%;
  left: 50%;
`;

const AnimatedRightWrapper = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 60%;
`;

const AnimatedLeftWrapper = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 40%;
`;

const ArrowWrapper = styled.div`
  width: 100%;
  height: 90%;
  position: relative;

  @media (max-width: ${globalConfig.findObjectGame}) {
    height: 60%;
  }
`;

const Hint = styled.p`
  position: absolute;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  bottom: 15%;
  left: 50%;
  transform: translate(-45%, 0);

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }
`;

function AnimatedArrowUp() {
  const [upSprings] = useSpring(() => ({
    from: { y: 0 },
    to: [{ y: 30 }, { y: 0 }],
    config: { mass: 1, tension: 600, friction: 100 },
    loop: true,
  }));

  return (
    <AnimatedUpWrapper
      style={{
        transform: upSprings.y.to(
          (y) => `translate(-50%, calc(-50% + ${y}px))`,
        ),
      }}
    >
      <ArrowUp />
    </AnimatedUpWrapper>
  );
}

function AnimatedArrowDown() {
  const [downSprings] = useSpring(() => ({
    from: { y: 0 },
    to: [{ y: -30 }, { y: 0 }],
    config: { mass: 1, tension: 600, friction: 100 },
    loop: true,
  }));

  return (
    <AnimatedDownWrapper
      style={{
        transform: downSprings.y.to(
          (y) => `translate(-50%, calc(-50% + ${y}px))`,
        ),
      }}
    >
      <ArrowDown />
    </AnimatedDownWrapper>
  );
}

function AnimatedArrowRight() {
  const [rightSprings] = useSpring(() => ({
    from: { x: 0 },
    to: [{ x: -30 }, { x: 0 }],
    config: { mass: 1, tension: 600, friction: 100 },
    loop: true,
  }));

  return (
    <AnimatedRightWrapper
      style={{
        transform: rightSprings.x.to(
          (x) => `translate(calc(-50% + ${x}px), -50%)`,
        ),
      }}
    >
      <ArrowRight />
    </AnimatedRightWrapper>
  );
}

function AnimatedArrowLeft() {
  const [leftSprings] = useSpring(() => ({
    from: { x: 0 },
    to: [{ x: 30 }, { x: 0 }],
    config: { mass: 1, tension: 600, friction: 100 },
    loop: true,
  }));

  return (
    <AnimatedLeftWrapper
      style={{
        transform: leftSprings.x.to(
          (x) => `translate(calc(-50% + ${x}px), -50%)`,
        ),
      }}
    >
      <ArrowLeft />
    </AnimatedLeftWrapper>
  );
}

export default function AnimatedMainHint({ fadeInHint }) {
  return (
    <AnimatedMainSectionWrapper style={fadeInHint}>
      <ArrowWrapper>
        <AnimatedArrowUp />
        <AnimatedArrowDown />
        <AnimatedArrowRight />
        <AnimatedArrowLeft />
        <HandFinger />
      </ArrowWrapper>
      <Hint>請在圖片區域中，上下左右滑動尋找指定物件！</Hint>
    </AnimatedMainSectionWrapper>
  );
}
