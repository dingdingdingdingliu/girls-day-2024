import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";

// 圖片顯示層
const AnimatedImageSectionWrapper = styled(animated.div)`
  width: 25%;
  height: auto;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    height: 166px;
  }
`;

export default function ImageSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const fadeInImage = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-20px)",
    config: { duration: 800 },
    delay: 300, // 延遲效果
  });

  return (
    <AnimatedImageSectionWrapper style={fadeInImage} ref={ref}>
      <ImageWrapper>
        <Image
          src="/images/index/intro_image.png"
          alt="imageSections"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </ImageWrapper>
    </AnimatedImageSectionWrapper>
  );
}
