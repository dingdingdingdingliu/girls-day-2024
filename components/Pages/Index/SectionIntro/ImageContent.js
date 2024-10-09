import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";

const introImage = {
  desktop: "/images/index/intro_image_desktop.png",
  mobile: "/images/index/intro_image_mobile.png",
};

// 圖片顯示層
const AnimatedImageSectionWrapper = styled(animated.div)`
  width: 25%;
  height: auto;
  aspect-ratio: 2 / 3;
  position: relative;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: auto;
    height: 170px;
    aspect-ratio: 3 / 2;
  }
`;

export default function ImageSection({ isDesktop }) {
  const [introImageUrl, setIntroImageUrl] = useState(introImage.mobile);
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

  useEffect(() => {
    if (isDesktop) {
      setIntroImageUrl(introImage.desktop);
    } else {
      setIntroImageUrl(introImage.mobile);
    }
  }, [isDesktop]);

  return (
    <AnimatedImageSectionWrapper style={fadeInImage} ref={ref}>
      <ImageWrapper>
        <Image
          src={introImageUrl}
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
