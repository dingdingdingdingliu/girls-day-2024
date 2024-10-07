import styled from "@emotion/styled";
import Image from "next/image";
import globalConfig from "@/styles/globalConfig";
import { useInView } from "react-intersection-observer";
import { useSpring } from "@react-spring/web";
import { OverThreeResponsiveSlider } from "@/components/Common/Slider";
import { useTheme } from "@emotion/react";
import { bookCardData } from "./extendedData";
import { bookDialogData } from "./extendedDialogData";
import { ExtendedTitle } from "@/components/Common/Index/TitleWithLine";
import {
  InnerContentWrapper,
  SectionWrapper,
  IntroWrapper,
  IntroImageWrapper,
  ActionWrapper,
  AnimatedWrapper,
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
  padding: 100px 0 150px 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 50px 0 190px 0;
  }
`;

// Slide 卡片區塊
function BookSlider({ setDialogData, setIsDialogOpen }) {
  const theme = useTheme();
  return (
    <ActionWrapper>
      <OverThreeResponsiveSlider
        cardColor={theme.colors.light}
        isShowLabel={false}
        sliderData={bookCardData}
        dialogContent={bookDialogData}
        setDialogData={setDialogData}
        setIsDialogOpen={setIsDialogOpen}
      />
    </ActionWrapper>
  );
}

// 電影標題區塊
function BookTitleSection() {
  return (
    <IntroWrapper>
      <ExtendedTitle upperTitle="延伸閱讀" lowerTitle="書籍" />
      <IntroImageWrapper>
        <ImageWrapper>
          <Image
            src="/images/index/bookSection/book_intro.png"
            alt="book_intro"
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

export default function FilmSection({ setDialogData, setIsDialogOpen }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateY(-20px)",
    config: { duration: 700 },
    delay: 300,
  });
  return (
    <StyledPageWrapper>
      <StyledContentWrapper ref={ref}>
        <AnimatedWrapper style={fadeIn}>
          <InnerContentWrapper>
            <SectionWrapper>
              <BookTitleSection />
              <BookSlider
                setDialogData={setDialogData}
                setIsDialogOpen={setIsDialogOpen}
              />
            </SectionWrapper>
          </InnerContentWrapper>
        </AnimatedWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
