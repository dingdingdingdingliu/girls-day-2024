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

const introCopyWrite = {
  upperDesktop: "請在限時 120 秒內，\n在畫面中找到並點擊欄位中的 12 個內容。",
  upperMobile: "請在限時 120 秒內，\n在畫面中找到並點擊欄位中的\n12個內容。",
  lowerDesktop: "來測測你與眼鏡行內的眼鏡是否為天作之合吧！",
  lowerMobile: "來測測你與眼鏡行內的眼鏡\n是否為天作之合吧！",
};

const BoldTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 1px;
  white-space: nowrap;
  text-align: center;

  @media (max-width: ${globalConfig.findObjectGame}) {
    white-space: pre-wrap;
  }
`;

const RegularTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  letter-spacing: 1px;
  white-space: pre-wrap;
  margin: 24px 0px;
  text-align: center;
`;

const TitleTwo = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 4px;
  white-space: nowrap;
`;

const GameImageSection = styled.div`
  width: 55%;
  min-width: 55%;
  height: auto;
  aspect-ratio: 7 / 3;
  margin: 20px 0 10px 0;

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 75%;
    min-width: 75%;
    height: auto;
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

export default function GameStartDialog({
  isDesktop,
  isGameStart,
  setIsGameStart,
}) {
  const [upperCopyWrite, setUpperCopyWrite] = useState("");
  const [lowerCopyWrite, setLowerCopyWrite] = useState("");

  const fadeInFromTopDelayed = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-30px)" },
    config: { duration: 1000 },
    delay: isGameStart && 1500, // 只有在 isGameEnd 為 true 時設置延遲
    reset: !isGameStart, // 當 isGameEnd 變化時重置動畫
  });

  useEffect(() => {
    if (isDesktop) {
      setUpperCopyWrite(introCopyWrite.upperDesktop);
      setLowerCopyWrite(introCopyWrite.lowerDesktop);
    } else {
      setUpperCopyWrite(introCopyWrite.upperMobile);
      setLowerCopyWrite(introCopyWrite.lowerMobile);
    }
  }, [isDesktop]);

  const onButtonClick = () => setIsGameStart(true);

  return (
    <Overlay isOpen={!isGameStart}>
      <OuterWrapper>
        <AnimatedDialogWrapper style={fadeInFromTopDelayed}>
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
            <RegularTitle>{upperCopyWrite}</RegularTitle>
            <BoldTitle>{lowerCopyWrite}</BoldTitle>
            <Button>
              <FindObjectGameBevelButton
                buttonText="開始試戴"
                isSpacing={true}
                onClick={onButtonClick}
              />
            </Button>
          </ContentWrapper>
        </AnimatedDialogWrapper>
      </OuterWrapper>
    </Overlay>
  );
}
