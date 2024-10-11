import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";
import useWebPImage from "@/hooks/useWebPImage";

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
  const imagePng = "/images/index/main_girl_image.png";
  const imageWebP = "/images/index/main_girl_image.webp";
  const imageSrc = useWebPImage(imagePng, imageWebP);

  return (
    <ImageOuterWrapper>
      <ImageWrapper>
        <Image
          src={imageSrc}
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
