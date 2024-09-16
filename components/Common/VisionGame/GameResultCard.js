import styled from "@emotion/styled";
import Image from "next/image";

const resultImageSrc = {
  good: "/images/visionGame/visionGame_good.png",
  wild: "/images/visionGame/visionGame_wild.png",
  medium: "/images/visionGame/visionGame_medium.png",
  high: "/images/visionGame/visionGame_high.png",
};

// 卡片外層
const CardWrapper = styled.div`
  width: 270px;
  height: 320px;
  min-height: 320px;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

export default function GameResultCard({ score }) {
  let imageSrc = "";
  if (score >= 0 && score <= 3) {
    imageSrc = resultImageSrc.high;
  } else if (score >= 4 && score <= 6) {
    imageSrc = resultImageSrc.medium;
  } else if (score >= 7 && score <= 9) {
    imageSrc = resultImageSrc.wild;
  } else if (score >= 10 && score <= 12) {
    imageSrc = resultImageSrc.good;
  } else {
    imageSrc = resultImageSrc.good; // 預設值
  }

  return (
    <CardWrapper>
      <a href={imageSrc} download="vision_game_result.png">
        <Image
          src={imageSrc}
          alt="game_result_image"
          width={270}
          height={320}
        />
      </a>
    </CardWrapper>
  );
}
