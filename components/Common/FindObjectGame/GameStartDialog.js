import { useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import {
  ImageWrapper,
  Overlay,
  OuterWrapper,
  AnimatedDialogWrapper,
  ContentWrapper,
} from "@/components/Common/FindObjectGame/WrapperComponent";
import FindObjectGameBevelButton from "@/components/Common/FindObjectGame/BevelButton";
import AnimatedMainHint from "./MainHint";
import AnimatedListHint from "./ListHint";

const introCopyWrite = {
  upperContent: "請在限時 120 秒內，\n在畫面中找到並點擊欄位中的 12 個內容。",
  lowerContent: "來測測你與眼鏡行內的眼鏡是否為天作之合吧！",
};

const BoldTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 1px;
  white-space: nowrap;
  text-align: center;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
    white-space: pre-wrap;
  }
`;

const RegularTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  letter-spacing: 1px;
  white-space: pre-wrap;
  margin: 20px 0px;
  text-align: center;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }
`;

const TitleTwo = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 4px;
  white-space: nowrap;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }
`;

const GameImageSection = styled.div`
  width: 55%;
  min-width: 55%;
  height: auto;
  aspect-ratio: 7 / 3;
  margin: 20px 0 10px 0;

  @media (max-width: ${globalConfig.findObjectGame}) {
    aspect-ratio: 4 / 3;
    margin: 12px 0px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 36px;
  margin-top: 20px;
`;

// 展售區主要 Dialog
function AnimatedDialog({ fadeInDialog, isDesktop, onButtonClick }) {
  return (
    <AnimatedDialogWrapper style={fadeInDialog}>
      <ContentWrapper>
        <BoldTitle>2024 臺灣女孩日</BoldTitle>
        <TitleTwo>偏見眼鏡行</TitleTwo>
        <GameImageSection>
          <ImageWrapper>
            <Image
              src={
                isDesktop
                  ? "/images/findObjectGame/desktop_main_dialog.png"
                  : "/images/findObjectGame/mobile_main_dialog.png"
              }
              alt="find-object-game"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </GameImageSection>
        <BoldTitle>歡迎來到偏見眼鏡行的展售區！</BoldTitle>
        <RegularTitle>{introCopyWrite.upperContent}</RegularTitle>
        <BoldTitle>{introCopyWrite.lowerContent}</BoldTitle>
        <Button>
          <FindObjectGameBevelButton
            buttonText="開始試戴"
            isSpacing={true}
            onClick={onButtonClick}
          />
        </Button>
      </ContentWrapper>
    </AnimatedDialogWrapper>
  );
}

export default function GameStartDialog({
  isDesktop,
  isGameStart,
  setIsGameStart,
}) {
  const [isShowMainHint, setIsShowMainHint] = useState(false);
  const [isShowListHint, setIsShowListHint] = useState(false);

  const fadeInDialog = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-30px)" },
    config: { duration: 1000 },
    delay: isGameStart && 1500, // 只有在 isGameEnd 為 true 時設置延遲
    reset: !isGameStart, // 當 isGameEnd 變化時重置動畫
  });

  const fadeInHint = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 }, // 動畫持續時間
    delay: isShowMainHint && 600, // 只有在 isGameEnd 為 true 時設置延遲
    reset: !isShowMainHint, // 當 isGameEnd 變化時重置動畫
  });

  const onButtonClick = () => setIsShowMainHint(true);

  useEffect(() => {
    if (isShowMainHint) {
      const timeout = setTimeout(() => {
        setIsShowListHint(true); // 先執行第一個更新
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [isShowMainHint]);

  useEffect(() => {
    if (isShowListHint) {
      setIsShowMainHint(false); // 第二個更新

      const timeout = setTimeout(() => {
        setIsShowListHint(false); // 先執行第一個更新
        setIsGameStart(true);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [isShowListHint]);

  return (
    <Overlay isOpen={!isGameStart}>
      <OuterWrapper>
        {!isShowMainHint && !isShowListHint && (
          <AnimatedDialog
            fadeInDialog={fadeInDialog}
            isDesktop={isDesktop}
            onButtonClick={onButtonClick}
          />
        )}
        {isShowMainHint && (
          <AnimatedMainHint fadeInHint={fadeInHint} isDesktop={isDesktop} />
        )}
        {isShowListHint && (
          <AnimatedListHint fadeInHint={fadeInHint} isDesktop={isDesktop} />
        )}
      </OuterWrapper>
    </Overlay>
  );
}
