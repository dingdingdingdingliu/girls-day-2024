import styled from "@emotion/styled";
import Image from "next/image";
import globalConfig from "@/styles/globalConfig";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@emotion/react";
import {
  PageWrapper,
  ContentWrapper,
  ImageWrapper,
} from "@/components/Common/Index/Wrapper";
import {
  BevelLabel,
  AbsoluteLabelWrapper,
} from "@/components/Common/Label/BevelLabel";

// 頁面底層底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
`;

// 圖片外層，電腦版用，用來讓內部圖層可以調整位置
const ImageOuterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 圖片層
const AnimatedImageSectionWrapper = styled(animated.div)`
  width: 50%;
  height: auto;
  aspect-ratio: 5 / 2;
  margin-left: 80px;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: auto;
    height: 190px;
    margin: 70px 0 0 0; // label 高度
  }
`;

export default function SectionPickUp({ isDesktop }) {
  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeInImage = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-20px)",
    config: { duration: 400 },
    delay: 400, // 延遲效果
  });

  return (
    <StyledPageWrapper ref={ref}>
      {!isDesktop && (
        <ImageOuterWrapper>
          <AnimatedImageSectionWrapper style={fadeInImage}>
            <ImageWrapper>
              <Image
                src="/images/index/pickup_intro.png"
                alt="pickup_intro"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </ImageWrapper>
          </AnimatedImageSectionWrapper>
        </ImageOuterWrapper>
      )}

      {!isDesktop && (
        <AbsoluteLabelWrapper id="pickup">
          <BevelLabel
            buttonColor={theme.colors.pink}
            textColor={theme.colors.white}
            labelText="取件櫃檯"
            inView={inView}
          />
        </AbsoluteLabelWrapper>
      )}
      <StyledContentWrapper>
        {isDesktop && (
          <ImageOuterWrapper>
            <AnimatedImageSectionWrapper style={fadeInImage}>
              <ImageWrapper>
                <Image
                  src="/images/index/pickup_intro.png"
                  alt="pickup_intro"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </ImageWrapper>
            </AnimatedImageSectionWrapper>
          </ImageOuterWrapper>
        )}

        {isDesktop && (
          <AbsoluteLabelWrapper id="pickup">
            <BevelLabel
              buttonColor={theme.colors.pink}
              textColor={theme.colors.white}
              labelText="取件櫃檯"
              inView={inView}
            />
          </AbsoluteLabelWrapper>
        )}
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
