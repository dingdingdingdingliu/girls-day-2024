import { useEffect, useContext } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { ImageUsedContext } from "@/context/ImageUsedContext";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@emotion/react";
import { PageWrapper, ContentWrapper } from "@/components/Common/Index/Wrapper";
import { GirlDaySection, ThemeSection } from "./SubContent";
import ImageContent from "./ImageContent";
import {
  BevelLabel,
  AbsoluteLabelWrapper,
} from "@/components/Common/Label/BevelLabel";
import useCreateArray from "@/hooks/useCreateArray";

const sloganImage = {
  imagePng: "/images/index/intro_slogan.png",
  imageWebp: "/images/index/intro_slogan.webp",
};

// 頁面底層灰色底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.mediumGrey};
  position: relative;
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-top: ${(props) => props.theme.spacing.pageTopSpacing};
    padding: 0;
  }
`;

// 內容完整區塊層，含圖片顯示層與主要內容層
const SectionIntroWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 90px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 0px auto;
    margin-top: 50px;
  }
`;

// 主要內容層，內含女孩日內容與主題內容兩個區塊
const MainSectionWrapper = styled.div`
  width: 75%;
  height: 100%;
  margin-left: 44px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    margin-left: 0;
  }
`;

const SloganContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 85%;
  height: auto;
  aspect-ratio: 10 / 1;
  margin: 110px auto;
  will-change: transform;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    aspect-ratio: 10 / 1;
    margin: 50px auto;
  }
`;

const AnimatedSloganWrapper = styled(animated.div)`
  display: flex;
  width: 200%;
  will-change: transform;
`;

const SloganImage = styled.img`
  width: 100%; // 每個圖像佔整個寬度的一半
  object-fit: cover;
  margin-right: ${(props) => props.isMargin && "60px"};

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    margin-right: ${(props) => props.isMargin && "18px"};
  }
`;

const LabelWrapper = styled(AbsoluteLabelWrapper)`
  top: 90px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    top: ${(props) => props.theme.spacing.pageTopSpacing};
  }
`;

export default function SectionIntro({ isDesktop }) {
  const theme = useTheme();
  const logoArray = useCreateArray(5);
  const { isWebPUsed } = useContext(ImageUsedContext);

  const imageUrl = isWebPUsed ? sloganImage?.imageWebp : sloganImage?.imagePng;

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [{ x }, api] = useSpring(() => ({
    x: 0,
    config: { duration: 10000, easing: (t) => t }, // 延长时间控制滑动速度
  }));

  useEffect(() => {
    api.start({
      from: { x: 0 },
      to: { x: -100 },
      loop: true,
    });
  }, [api]);

  return (
    <StyledPageWrapper id="show-hamburger-target" ref={ref}>
      {!isDesktop && (
        <LabelWrapper id="reception">
          <BevelLabel
            buttonColor={theme.colors.black}
            textColor={theme.colors.green}
            labelText="接待櫃檯"
            inView={inView}
          />
        </LabelWrapper>
      )}
      <StyledContentWrapper>
        {isDesktop && (
          <LabelWrapper id="reception">
            <BevelLabel
              buttonColor={theme.colors.black}
              textColor={theme.colors.green}
              labelText="接待櫃檯"
              inView={inView}
            />
          </LabelWrapper>
        )}
        <SectionIntroWrapper>
          <ImageContent isDesktop={isDesktop} />
          <MainSectionWrapper>
            <GirlDaySection />
            <ThemeSection />
          </MainSectionWrapper>
        </SectionIntroWrapper>
        <SloganContainer>
          <AnimatedSloganWrapper
            style={{
              x: x.to((x) => `${x}%`),
            }}
          >
            {logoArray?.map((num) => (
              <SloganImage
                src={imageUrl}
                alt="slogan"
                key={num}
                isMargin={num === logoArray.length}
              />
            ))}
          </AnimatedSloganWrapper>
        </SloganContainer>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
