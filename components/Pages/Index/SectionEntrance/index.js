import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@emotion/react";
import {
  PageWrapper,
  IndexContentWrapper,
} from "@/components/Common/Index/Wrapper";
import BevelButton from "@/components/Common/Button/BevelButton";

const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.mediumGrey};
  height: 100vh;
`;

const StyledContentWrapper = styled(IndexContentWrapper)`
  height: 100%;
  position: relative;
  background-image: url("images/indexDesktop.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: ${globalConfig.mediaQuery}) {
    background-image: url("images/indexMobile.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translate(-50%, 0);

  @media (max-width: ${globalConfig.mediaQuery}) {
    top: 78%;
  }
`;

const AnimatedWrapper = styled(animated.div)`
  width: 100%;
`;

export default function SectionEntrance() {
  const theme = useTheme();

  const fadeInEntrance = useSpring({
    opacity: 1,
    transform: "translateY(0);",
    from: { opacity: 0, transform: "translateY(-100px)" },
    config: { duration: 800 },
    delay: 1500, // 延遲效果
  });

  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <ButtonWrapper>
          <AnimatedWrapper style={fadeInEntrance}>
            <a href="#reception">
              <BevelButton
                size="large"
                buttonColor={theme.colors.black}
                textColor={theme.colors.white}
                buttonText="推門進入"
              ></BevelButton>
            </a>
          </AnimatedWrapper>
        </ButtonWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
