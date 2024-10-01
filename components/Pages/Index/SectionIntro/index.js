import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
// import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@emotion/react";
import {
  PageWrapper,
  ContentWrapper,
  // ImageWrapper,
} from "@/components/Common/Index/Wrapper";
import { GirlDaySection, ThemeSection } from "./SubContent";
import ImageContent from "./ImageContent";
import {
  BevelLabel,
  AbsoluteLabelWrapper,
} from "@/components/Common/Label/BevelLabel";

const sloganImageSrc = {
  desktop: "/images/sloganDesktop.png",
  mobile: "/images/sloganMobile.png",
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

// 標語內容層
// const SloganSectionWrapper = styled.div`
//   width: 70%;
//   height: auto;
//   aspect-ratio: 10 / 1;
//   margin: 110px auto;

//   @media (max-width: ${globalConfig.mediaQuery}) {
//     width: 60%;
//     aspect-ratio: 5 / 3;
//     margin: 30px auto;
//   }
// `;

const Container = styled.div`
  overflow: hidden;
  position: relative;
  width: 70%;
  height: auto;
  aspect-ratio: 10 / 1;
  margin: 110px auto;
  will-change: transform;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 60%;
    aspect-ratio: 5 / 3;
    margin: 30px auto;
  }
`;

const ScrollWrapper = styled(animated.div)`
  display: flex;
  width: 200%;
  will-change: transform;
`;

const SloganImage = styled.img`
  width: 50%; // 每個圖像佔整個寬度的一半
  object-fit: cover;
  margin-right: ${(props) => props.isMargin && "60px"};
`;

const LabelWrapper = styled(AbsoluteLabelWrapper)`
  top: 90px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    top: ${(props) => props.theme.spacing.pageTopSpacing};
  }
`;

export default function SectionIntro({ isDesktop }) {
  const theme = useTheme();
  const [imgSrc, setImgSrc] = useState(sloganImageSrc.desktop);

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

  useEffect(() => {
    if (isDesktop) {
      setImgSrc(sloganImageSrc.desktop);
    } else {
      setImgSrc(sloganImageSrc.mobile);
    }
  }, [isDesktop]);

  return (
    <StyledPageWrapper id="show-hamburger-target">
      {!isDesktop && (
        <LabelWrapper id="reception">
          <BevelLabel
            buttonColor={theme.colors.black}
            textColor={theme.colors.yellow}
            labelText="接待櫃檯"
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
            />
          </LabelWrapper>
        )}
        <SectionIntroWrapper>
          <ImageContent />
          <MainSectionWrapper>
            <GirlDaySection />
            <ThemeSection />
          </MainSectionWrapper>
        </SectionIntroWrapper>
        {/* <SloganSectionWrapper>
          <ImageWrapper>
            <Image
              src={
                isDesktop
                  ? "/images/sloganDesktop.png"
                  : "/images/sloganMobile.png"
              }
              alt="slogan"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </SloganSectionWrapper> */}
        <Container>
          <ScrollWrapper
            style={{
              x: x.to((x) => `${x}%`),
            }}
          >
            <SloganImage src={imgSrc} alt="slogan" isMargin />
            <SloganImage src={imgSrc} alt="slogan" isMargin />
            <SloganImage src={imgSrc} alt="slogan" isMargin />
            <SloganImage src={imgSrc} alt="slogan" isMargin />
            <SloganImage src={imgSrc} alt="slogan" isMargin />
            <SloganImage src={imgSrc} alt="slogan" />
          </ScrollWrapper>
        </Container>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
