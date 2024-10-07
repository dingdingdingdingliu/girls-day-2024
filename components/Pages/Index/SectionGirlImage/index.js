import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";

// 電腦版底部滿版圖層
const ImageOuterWrapper = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 9 / 2;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */
  margin-bottom: 80px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-bottom: 60px;
  }
`;
export default function SectionGirlImage() {
  return (
    <ImageOuterWrapper>
      <ImageWrapper>
        <Image
          src="/images/index/main_girl_image.png"
          alt="girl_image"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </ImageWrapper>
    </ImageOuterWrapper>
  );
}
