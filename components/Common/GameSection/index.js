import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";
import SmallBevelButton from "@/components/Common/Button/SmallBevelButton";

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
  aspect-ratio: 9 / 4;
  margin-bottom: 24px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    aspect-ratio: 2 / 1;
  }
`;

export function ImageSection({ titleImageSrc, titleImageAlt }) {
  return (
    <ImageSectionWrapper>
      <ImageWrapper>
        <Image
          src={titleImageSrc}
          alt={titleImageAlt}
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
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
}) {
  return (
    <GameSectionWrapper>
      <GameImageSection>
        <ImageWrapper>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </ImageWrapper>
      </GameImageSection>
      <SmallBevelButton
        buttonColor={bevelColor}
        textColor={bevelTextColor}
        buttonText={buttonText}
      ></SmallBevelButton>
    </GameSectionWrapper>
  );
}
