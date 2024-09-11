import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";

// 圖片顯示層
const ImageSectionWrapper = styled.div`
  width: 25%;
  height: auto;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    height: 166px;
  }
`;

export default function ImageSection() {
  return (
    <ImageSectionWrapper>
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
    </ImageSectionWrapper>
  );
}
