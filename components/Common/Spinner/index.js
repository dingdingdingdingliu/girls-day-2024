import { useSpring, animated } from "@react-spring/web";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 222px;
  height: 222px;
  position: relative;
`;

const StyledSpinner = styled(animated.div)`
  width: 222px;
  height: 222px;
  border-radius: 50%;
  position: absolute;
  top: 0%;
  left: 0%;

  background: ${(props) =>
    `conic-gradient(
    ${props.theme.colors.lightPink} 80deg,
		${props.theme.colors.lightOrange} 150deg,  
    ${props.theme.colors.lightGreen} 175deg,
		${props.theme.colors.lightGreen} 280deg,
		${props.theme.colors.lightOrange} 340deg, 
    ${props.theme.colors.lightPink} 360deg)`};
`;

const Mask = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.mediumGrey};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: black;
  z-index: 2;
`;

export default function Spinner() {
  // 使用 react-spring 設定旋轉動畫
  const spinProps = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    loop: true,
    config: { duration: 1500 },
  });

  return (
    <Wrapper>
      <StyledSpinner style={spinProps}>
        <Mask />
      </StyledSpinner>
      <Text>結果計算中</Text>
    </Wrapper>
  );
}
