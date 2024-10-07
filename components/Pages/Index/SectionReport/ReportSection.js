import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { ReportTitle } from "@/components/Common/Index/TitleWithLine";
import {
  AnimatedSectionWrapper,
  IntroWrapper,
  CopyWriteWrapper,
  ActionWrapper,
  ComingSoonWrapper,
} from "./Components";
import { OverThreeResponsiveSlider } from "@/components/Common/Slider";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";

const copyWrite = {
  reportIntro:
    "此處特別整理了 2024 年臺灣女孩日《偏見眼鏡行》戲劇體驗工作坊學員心得，以及媒體新聞和平台文章的精彩內容，千萬別錯過！",
};

const sliderData = [
  {
    imageSrc: "/images/web_icon.png",
    imageAlt: "web_icon",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
  {
    imageSrc: "/images/web_icon.png",
    imageAlt: "web_icon",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
  {
    imageSrc: "/images/web_icon.png",
    imageAlt: "web_icon",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
  {
    imageSrc: "/images/web_icon.png",
    imageAlt: "web_icon",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
  {
    imageSrc: "/images/web_icon.png",
    imageAlt: "web_icon",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
];

// 專題報導底層
const StyledAnimatedSectionWrapper = styled(AnimatedSectionWrapper)`
  margin-bottom: 120px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-bottom: 50px;
  }
`;

// Slide 卡片區塊
function ReportSlider({ isFirstEdition }) {
  const theme = useTheme();
  return (
    <>
      {!isFirstEdition && (
        <ActionWrapper>
          <OverThreeResponsiveSlider
            cardColor={theme.colors.light}
            isReport={true}
            sliderData={sliderData}
          />
        </ActionWrapper>
      )}
      {isFirstEdition && (
        <ComingSoonWrapper>
          <ImageWrapper>
            <Image
              src="/images/index/index_coming_soon.png"
              alt="coming_soon"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </ComingSoonWrapper>
      )}
    </>
  );
}

// 專題報導文字區塊
function ReportIntro() {
  return (
    <IntroWrapper>
      <ReportTitle />
      <CopyWriteWrapper>
        <p>{copyWrite.reportIntro}</p>
      </CopyWriteWrapper>
    </IntroWrapper>
  );
}

export default function ReportSection({ isFirstEdition }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100px)",
    config: { duration: 600 },
    delay: 400, // 延遲效果
  });

  return (
    <StyledAnimatedSectionWrapper style={fadeIn} ref={ref}>
      <ReportIntro />
      <ReportSlider isFirstEdition={isFirstEdition} />
    </StyledAnimatedSectionWrapper>
  );
}
