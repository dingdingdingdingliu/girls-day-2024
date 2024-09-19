import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import {
  ImageWrapper,
  Overlay,
  OuterWrapper,
  DialogWrapper,
  ContentWrapper,
} from "@/components/Common/FindObjectGame/WrapperComponent";
import FindObjectGameBevelButton from "@/components/Common/FindObjectGame/BevelButton";
import GameFooter from "./GameFooter";

const resultCopyWrite = {
  good: {
    title: "恭喜你！",
    introDesktop:
      "你的覺察力良好，與你的眼鏡是絕佳拍檔！\n絕對可以看到最遠的地方！",
    introMobile:
      "你的覺察力良好，\n與你的眼鏡是絕佳拍檔！\n絕對可以看到最遠的地方！",
    imageSrc: "/images/findObjectGame/result_good.png",
  },
  average: {
    title: "Oops!",
    introDesktop:
      "覺察力就差一點點，與你的眼鏡還要練習默契，\n絕對可以看到最遠的地方！",
    introMobile:
      "覺察力就差一點點，\n與你的眼鏡還要練習默契，\n再靠近一點點就讓你看清",
    imageSrc: "/images/findObjectGame/result_normal.png",
  },
  bad: {
    title: "哎唷喂呀",
    introDesktop:
      "與你的眼鏡不合，建議至店內重新配鏡，\n絕對可以看到最遠的地方！",
    introMobile:
      "與你的眼鏡不合，\n建議至店內重新配鏡，\n不然你想看清會越看越不清！",
    imageSrc: "/images/findObjectGame/result_bad.png",
  },
};

const getResult = (score) => {
  let gameResult;
  if (score >= 0 && score <= 4) {
    gameResult = resultCopyWrite.bad;
  } else if (score >= 5 && score <= 8) {
    gameResult = resultCopyWrite.average;
  } else if (score >= 9 && score <= 12) {
    gameResult = resultCopyWrite.good;
  } else {
    gameResult = resultCopyWrite.good; // 預設值
  }
  return gameResult;
};

const Title = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[48]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 4px;
  white-space: nowrap;
  text-align: center;

  @media (max-width: ${globalConfig.findObjectGame}) {
    white-space: pre-wrap;
  }
`;

const Intro = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 1px;
  white-space: pre-wrap;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: ${globalConfig.findObjectGame}) {
    margin-bottom: 28px;
  }
`;

const GameImageSection = styled.div`
  width: 290px;
  height: 134px;
  min-width: 290px;
  min-height: 134px;
  margin: 24px 0 20px 0;

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 212px;
    height: 100px;
    min-width: 212px;
    min-height: 100px;
    margin: 20px 0px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    flex-direction: column;
    margin-bottom: 42px;
  }
`;

export default function GameResultDialog({
  isDesktop,
  totalScore,
  isShowResult,
}) {
  const [introCopyWrite, setIntroCopyWrite] = useState("");
  const [gameResult, setGameResult] = useState({});

  useEffect(() => {
    if (isShowResult) {
      const gameResult = getResult(totalScore);
      setGameResult(gameResult);
      if (isDesktop) {
        setIntroCopyWrite(gameResult.introDesktop);
      } else {
        setIntroCopyWrite(gameResult.introMobile);
      }
    }
  }, [isDesktop]);

  // const onButtonClick = () => setIsGameStart(true);

  return (
    <Overlay isOpen={isShowResult}>
      <OuterWrapper>
        <DialogWrapper>
          <ContentWrapper>
            <Title>{gameResult.title}</Title>
            <GameImageSection>
              <ImageWrapper>
                <Image
                  src={gameResult.imageSrc}
                  alt="find-object-game-result"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </ImageWrapper>
            </GameImageSection>
            <Intro>{introCopyWrite}</Intro>
            <Button>
              <FindObjectGameBevelButton
                buttonText="再玩一次"
                isSpacing={true}
                onClick={null}
              />
              <FindObjectGameBevelButton
                buttonText="前往偏見眼鏡行"
                isSpacing={true}
                onClick={null}
              />
              <FindObjectGameBevelButton
                buttonText="前往社家署官網"
                isSpacing={true}
                onClick={null}
              />
            </Button>
            <GameFooter />
          </ContentWrapper>
        </DialogWrapper>
      </OuterWrapper>
    </Overlay>
  );
}
