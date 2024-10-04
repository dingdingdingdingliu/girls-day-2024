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
  top: 33%;
  left: 50%;
`;

const AnimatedDownWrapper = styled(animated.div)`
  position: absolute;
  top: 67%;
  left: 50%;
`;

const AnimatedRightWrapper = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 60%;
  @media (max-width: ${globalConfig.findObjectGame}) {
    left: calc(50% + 90px);
  }
`;

const AnimatedLeftWrapper = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 40%;
  @media (max-width: ${globalConfig.findObjectGame}) {
    left: calc(50% - 90px);
  }
`;

const ArrowWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Hint = styled.p`
  position: absolute;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  bottom: 100px;
  left: 50%;
  transform: translate(-45%, 0);
  text-align: start;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
    white-space: pre-wrap;
    text-align: center;
    bottom: 50px;
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

export default function AnimatedMainHint({ fadeInHint, isDesktop }) {
  return (
    <AnimatedMainSectionWrapper style={fadeInHint}>
      <ArrowWrapper>
        <AnimatedArrowUp />
        <AnimatedArrowDown />
        <AnimatedArrowRight />
        <AnimatedArrowLeft />
        <HandFinger />
      </ArrowWrapper>
      {isDesktop && <Hint>請在圖片區域中，上下左右滑動尋找指定物件</Hint>}
      {!isDesktop && <Hint>{`請在圖片區域中\n上下左右滑動尋找指定物件`}</Hint>}
    </AnimatedMainSectionWrapper>
  );
}
