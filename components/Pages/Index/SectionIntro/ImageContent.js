import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
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
  const fadeInImage = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 2000 }, // 動畫持續時間
  });

  return (
    <AnimatedImageSectionWrapper style={fadeInImage}>
      <ImageWrapper>
        <Image
          src="/images/themeMainImage.png"
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
