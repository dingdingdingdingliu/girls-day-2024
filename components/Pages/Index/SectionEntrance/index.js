import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useTheme } from "@emotion/react";
import {
  PageWrapper,
  IndexContentWrapper,
} from "@/components/Common/Index/Wrapper";
import BevelButton from "@/components/Common/Button/BevelButton";

const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.grey};
  height: 100vh; ㄕ
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

export default function SectionEntrance() {
  const theme = useTheme();

  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <ButtonWrapper>
          <a href="#target">
            <BevelButton
              size="large"
              buttonColor={theme.colors.black}
              textColor={theme.colors.white}
              buttonText="推門進入"
            ></BevelButton>
          </a>
        </ButtonWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
