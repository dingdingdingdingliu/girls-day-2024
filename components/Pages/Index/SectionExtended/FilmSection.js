import styled from "@emotion/styled";
import Image from "next/image";
import globalConfig from "@/styles/globalConfig";
import { useInView } from "react-intersection-observer";
import { useSpring } from "@react-spring/web";
import { UnderThreeResponsiveSlider } from "@/components/Common/Slider";
import { useTheme } from "@emotion/react";
import { filmCardData } from "./extendedData";
import { filmDialogData } from "./extendedDialogData";
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
import useWebPImage from "@/hooks/useWebPImage";

const filmIntroImage = {
  imagePng: "/images/index/filmSection/film_intro.png",
  imageWebP: "/images/index/filmSection/film_intro.webp",
};

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
function FilmSlider({ setDialogData, setIsDialogOpen }) {
  const theme = useTheme();

  return (
    <ActionWrapper>
      <UnderThreeResponsiveSlider
        cardColor={theme.colors.light}
        bgColor={theme.colors.white}
        sliderData={filmCardData}
        dialogContent={filmDialogData}
        setDialogData={setDialogData}
        setIsDialogOpen={setIsDialogOpen}
        labelText="點擊查看"
      />
    </ActionWrapper>
  );
}

// 電影標題區塊
function FilmTitleSection() {
  const imageSrc = useWebPImage(
    filmIntroImage?.imagePng,
    filmIntroImage?.imageWebP,
  );

  return (
    <IntroWrapper>
      <ExtendedTitle upperTitle="延伸閱讀" lowerTitle="影集" />
      <IntroImageWrapper>
        <ImageWrapper>
          <Image
            src={imageSrc}
            alt="film_intro"
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

export default function FilmSection({ setDialogData }) {
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
              <FilmTitleSection />
              <FilmSlider setDialogData={setDialogData} />
            </SectionWrapper>
          </InnerContentWrapper>
        </AnimatedWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
