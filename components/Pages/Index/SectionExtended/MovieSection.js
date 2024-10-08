import styled from "@emotion/styled";
import Image from "next/image";
import globalConfig from "@/styles/globalConfig";
import { useInView } from "react-intersection-observer";
import { useSpring } from "@react-spring/web";
import { OverThreeResponsiveSlider } from "@/components/Common/Slider";
import { useTheme } from "@emotion/react";
import { movieCardData } from "./extendedData";
import { movieDialogData } from "./extendedDialogData";
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
function MovieSlider({ setDialogData, setIsDialogOpen }) {
  const theme = useTheme();
  return (
    <ActionWrapper>
      <OverThreeResponsiveSlider
        cardColor={theme.colors.white}
        bgColor={theme.colors.lightGrey}
        sliderData={movieCardData}
        dialogContent={movieDialogData}
        setDialogData={setDialogData}
        setIsDialogOpen={setIsDialogOpen}
        labelText="點擊查看"
      />
    </ActionWrapper>
  );
}

// 電影標題區塊
function MovieTitleSection() {
  return (
    <IntroWrapper>
      <ExtendedTitle upperTitle="延伸閱讀" lowerTitle="電影" />
      <IntroImageWrapper>
        <ImageWrapper>
          <Image
            src="/images/index/movieSection/movie_intro.png"
            alt="movie_intro"
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

export default function MovieSection({ setDialogData, setIsDialogOpen }) {
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
              <MovieTitleSection />
              <MovieSlider
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
