import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@emotion/react";
import { PageWrapper, ContentWrapper } from "@/components/Common/Index/Wrapper";
import { GameSection, ImageSection } from "@/components/Common/GameSection";
import {
  BevelLabel,
  AbsoluteLabelWrapper,
} from "@/components/Common/Label/BevelLabel";

const mainImageUrl = {
  desktop: "/images/index/vision_main_desktop.png",
  mobile: "/images/index/vision_main_mobile.png",
};

// 頁面底層灰色底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightPink} 1%, 
    ${props.theme.colors.mediumGrey} 40%)`};
  position: relative;
`;

const AnimateWrapper = styled(animated.div)`
  width: 100%;
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
  margin-bottom: 80px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-top: ${(props) => props.theme.spacing.pageTopSpacing};
    margin-bottom: 25px;
  }
`;

// 內容完整區塊層，含圖片顯示層與主要內容層
const SectionIntroWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 90px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    flex-direction: column;
    margin: 0px auto;
    margin-top: 50px;
  }
`;

// 主要內容層，內含視力檢查主題圖片與點擊連結
const MainSectionWrapper = styled.div`
  width: 63%;
  height: 100%;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
  }
`;

const LabelWrapper = styled(AbsoluteLabelWrapper)`
  top: 90px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    top: ${(props) => props.theme.spacing.pageTopSpacing};
  }
`;

export default function SectionVision({ isDesktop }) {
  const theme = useTheme();
  const [imageUrl, setImageUrl] = useState(mainImageUrl.mobile);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-120px)",
    config: { duration: 800 },
    delay: 400, // 延遲效果
  });

  useEffect(() => {
    if (isDesktop) {
      setImageUrl(mainImageUrl.desktop);
    } else {
      setImageUrl(mainImageUrl.mobile);
    }
  }, [isDesktop]);

  return (
    <StyledPageWrapper ref={ref}>
      {!isDesktop && (
        <LabelWrapper id="vision">
          <BevelLabel
            buttonColor={theme.colors.black}
            textColor={theme.colors.pink}
            labelText="驗光室"
            inView={inView}
          />
        </LabelWrapper>
      )}

      <StyledContentWrapper>
        {isDesktop && (
          <LabelWrapper id="vision">
            <BevelLabel
              buttonColor={theme.colors.black}
              textColor={theme.colors.pink}
              labelText="驗光室"
              inView={inView}
            />
          </LabelWrapper>
        )}
        <AnimateWrapper style={fadeIn}>
          <SectionIntroWrapper>
            <ImageSection
              titleImageAlt="visionImage"
              titleImageSrc={{
                imagePng: "/images/index/vision_theme.png",
                imageWebP: "/images/index/vision_theme.webp",
              }}
            />

            <MainSectionWrapper>
              <GameSection
                imageSrc={imageUrl}
                imageAlt="visionImage"
                bevelColor={theme.colors.pink}
                bevelTextColor={theme.colors.white}
                buttonText="前往驗光"
                linkHref="/game-one"
                isVisionGame={true}
              />
            </MainSectionWrapper>
          </SectionIntroWrapper>
        </AnimateWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
