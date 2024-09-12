import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { OverThreeResponsiveSlider } from "@/components/Common/Slider";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { cartoonCardData } from "./extendedData";
import { cartoonDialogData } from "./extendedDialogData";
import { ExtendedTitle } from "@/components/Common/Index/TitleWithLine";
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
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

// 頁面內層，上下區塊間距由此層設定
const StyledContentWrapper = styled(ContentWrapper)`
  padding: 100px 0 80px 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 50px 0;
  }
`;

// Slide 卡片區塊
function CartoonSlider({ setDialogData, setIsDialogOpen }) {
  const theme = useTheme();
  return (
    <ActionWrapper>
      <OverThreeResponsiveSlider
        cardColor={theme.colors.white}
        isShowLabel={false}
        sliderData={cartoonCardData}
        dialogContent={cartoonDialogData}
        setDialogData={setDialogData}
        setIsDialogOpen={setIsDialogOpen}
      />
    </ActionWrapper>
  );
}

// 電影標題區塊
function CartoonTitleSection() {
  return (
    <IntroWrapper>
      <ExtendedTitle upperTitle="延伸閱讀" lowerTitle="動漫" />
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

export default function CartoonSection({ setDialogData, setIsDialogOpen }) {
  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <InnerContentWrapper>
          <SectionWrapper>
            <CartoonTitleSection />
            <CartoonSlider
              setDialogData={setDialogData}
              setIsDialogOpen={setIsDialogOpen}
            />
          </SectionWrapper>
        </InnerContentWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
