import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import ResponsiveSlider from "@/components/Common/Slider";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { societyCardData } from "./extendedData";
import { SocietyTitle } from "@/components/Common/Index/TitleWithLine";
import {
  InnerContentWrapper,
  SectionWrapper,
  IntroWrapper,
  IntroImageWrapper,
  ActionWrapper,
} from "./Components";
import {
  PageWrapper,
  ContentWrapper,
  ImageWrapper,
} from "@/components/Common/Index/Wrapper";

// 頁面底層底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.white};
`;

// 頁面內層，上下區塊間距由此層設定
const StyledContentWrapper = styled(ContentWrapper)`
  padding: 100px 0 80px 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 50px 0;
  }
`;

// Slide 卡片區塊
function SocietySlider() {
  const theme = useTheme();
  return (
    <ActionWrapper>
      <ResponsiveSlider
        cardColor={theme.colors.light}
        sliderData={societyCardData}
        isShowLabel={true}
      />
    </ActionWrapper>
  );
}

// 社會資源標題區塊
function SocietyTitleSection() {
  return (
    <IntroWrapper>
      <SocietyTitle />
      <IntroImageWrapper>
        <ImageWrapper>
          <Image
            src="/images/visionImage.png"
            alt="visionImage"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </ImageWrapper>
      </IntroImageWrapper>
    </IntroWrapper>
  );
}

export default function SocietySection() {
  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <InnerContentWrapper>
          <SectionWrapper>
            <SocietyTitleSection />
            <SocietySlider />
          </SectionWrapper>
        </InnerContentWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
