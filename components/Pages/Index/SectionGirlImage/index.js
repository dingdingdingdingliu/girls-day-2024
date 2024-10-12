import { useContext } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { ImageUsedContext } from "@/context/ImageUsedContext";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";

const mainGirlImage = {
  imagePng: "/images/index/main_girl_image.png",
  imageWebP: "/images/index/main_girl_image.webp",
};

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
  const { isWebPUsed } = useContext(ImageUsedContext);

  const imageSrc = isWebPUsed
    ? mainGirlImage?.imageWebP
    : mainGirlImage?.imagePng;

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
