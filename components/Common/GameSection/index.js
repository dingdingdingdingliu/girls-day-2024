import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import Link from "next/link";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";
import SmallBevelButton from "@/components/Common/Button/SmallBevelButton";
import useWebPImage from "@/hooks/useWebPImage";

// Label圖片顯示層
const ImageSectionWrapper = styled.div`
  width: 35%;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    aspect-ratio: 2 / 1;
  }
`;

// 遊戲區塊層
const GameSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 遊戲圖片區塊層
const GameImageSection = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 7 / 3.8;
  margin-bottom: 24px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    aspect-ratio: 5 / 3;
  }
`;

export function ImageSection({ titleImageSrc, titleImageAlt }) {
  const imageSrc = useWebPImage(
    titleImageSrc?.imagePng,
    titleImageSrc?.imageWebP,
  );
  return (
    <ImageSectionWrapper>
      <ImageWrapper>
        <Image
          src={imageSrc}
          alt={titleImageAlt}
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

export function GameSection({
  imageSrc,
  imageAlt,
  bevelColor,
  bevelTextColor,
  buttonText,
  linkHref = "",
  isVisionGame,
}) {
  const imageStyle = isVisionGame ? "cover" : "contain";
  const imagePosition = isVisionGame ? "center" : "bottom";
  return (
    <GameSectionWrapper>
      <GameImageSection>
        <ImageWrapper>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{
              objectFit: imageStyle,
              objectPosition: imagePosition,
            }}
          />
        </ImageWrapper>
      </GameImageSection>
      <Link href={linkHref} target="_blank" rel="noopener noreferrer">
        <SmallBevelButton
          buttonColor={bevelColor}
          textColor={bevelTextColor}
          buttonText={buttonText}
        />
      </Link>
    </GameSectionWrapper>
  );
}
