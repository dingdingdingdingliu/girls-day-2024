import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import {
  PageWrapper,
  ContentWrapper,
  ImageWrapper,
} from "@/components/Common/Index/Wrapper";

// 頁面底層底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.black};
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  padding: 82px 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 32px 0;
  }
`;

const AnimatedTitle = styled(animated.div)`
  font-size: ${(props) => props.theme.fontSizes[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.green};
  letter-spacing: 8px;
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
    letter-spacing: 4px;
    margin-bottom: 18px;
  }
`;

const AnimatedVideoWrapper = styled(animated.div)`
  width: 70%;
  aspect-ratio: 2 / 1;
  margin: 0 auto;
  background-color: ${(props) =>
    props.isFirstEdition ? props.theme.colors.white : "transparent"};
  border-radius: 2px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    aspect-ratio: 3 / 2;
  }
`;

export default function SectionPromoVideo({ isFirstEdition }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeInTitle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-20px)",
    config: { duration: 400 },
    delay: 400, // 延遲效果
  });

  const fadeInVideo = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
    delay: 700, // 延遲效果
  });

  return (
    <StyledPageWrapper>
      <StyledContentWrapper ref={ref}>
        <AnimatedTitle style={fadeInTitle}>
          2024年臺灣女孩日宣傳影片
        </AnimatedTitle>
        <AnimatedVideoWrapper
          style={fadeInVideo}
          isFirstEdition={isFirstEdition}
        >
          {!isFirstEdition && (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GJerkayEgXE?si=8-d5fFLN_HOwEgMG"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          )}
          {isFirstEdition && (
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
          )}
        </AnimatedVideoWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
