import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { useSpring, animated } from "@react-spring/web";
import {
  PageWrapper,
  ContentWrapper,
} from "@/components/Common/VisionGame/WrapperComponent";
import { GameSmallBevelButton } from "@/components/Common/Button/GameUsedBevelButton";
import { answerImageData } from "../../components/Common/VisionGame/gameImageData";

const introCopyWrite =
  "歡迎來到偏見眼鏡行的驗光室！\n共有12道題目，每題限時5秒";

const topicIntro = {
  positive: "覺得\n不帶偏見/正確\n的題目按",
  negative: "覺得\n帶有偏見/不正確\n的題目按",
};

const StyledPageWrapper = styled(PageWrapper)`
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightPink} 1%, 
    ${props.theme.colors.mediumGrey} 40%)`};
`;

const StyledContentWrapper = styled(ContentWrapper)`
  padding: 22px 42px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const AnimatedIntroWrapper = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleOne = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 1px;
  white-space: nowrap;
`;

const TitleTwo = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 4px;
  white-space: nowrap;
`;

const TitleThreeWrapper = styled.div`
  width: 270px;
  height: 200px;
  min-width: 270px;
  min-height: 200px;
  background-image: url("images/chiikawa.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 10px 0 12px 0;
`;

const TitleThree = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[72]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 4px;
  text-align: center;
  white-space: nowrap;
`;

const CopyWrite = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: 2px;
  text-align: center;
  white-space: pre-wrap;
`;

// GameTopic Component

// GameTopic 外層
const GameTopicOuterWrapper = styled.div`
  width: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0;
`;

// GameTopic 內容層
const GameTopicWrapper = styled.div`
  width: 137px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
`;

// GameTopic 文字內容
const GameTopicIntro = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[14]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  letter-spacing: 2px;
  text-align: center;
  white-space: pre-wrap;
`;

// GameTopic 顏色圖片區塊
const GameTopicImageWrapper = styled.div`
  width: 53px;
  height: 53px;
  min-height: 53px;
  min-width: 53px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 14px;
`;

const AnimatedButtonWrapper = styled(animated.div)`
		width: 100:
`;

export default function VisionGameIndex() {
  const theme = useTheme();
  // 使用 useSpring 定義淡入動畫
  const fadeInIntro = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
    config: { duration: 1000 }, // 動畫持續時間
  });

  const fadeInBebel = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 600,
    config: { duration: 1000 }, // 動畫持續時間
  });

  return (
    <StyledPageWrapper className="game-page">
      <StyledContentWrapper>
        <Wrapper>
          <AnimatedIntroWrapper style={fadeInIntro}>
            <TitleOne>113年 臺灣女孩日</TitleOne>
            <TitleTwo>偏見眼鏡行</TitleTwo>
            <TitleThreeWrapper>
              <TitleThree>驗光室</TitleThree>
            </TitleThreeWrapper>
            <CopyWrite>{introCopyWrite}</CopyWrite>
            <GameTopicOuterWrapper>
              <GameTopicWrapper>
                <GameTopicIntro>{topicIntro.positive}</GameTopicIntro>
                <GameTopicImageWrapper>
                  <Image
                    src={answerImageData.correct}
                    alt="answerIcon"
                    width={53}
                    height={53}
                  />
                </GameTopicImageWrapper>
              </GameTopicWrapper>
              <GameTopicWrapper>
                <GameTopicIntro>{topicIntro.negative}</GameTopicIntro>
                <GameTopicImageWrapper>
                  <Image
                    src={answerImageData.wrong}
                    alt="answerIcon"
                    width={53}
                    height={53}
                  />
                </GameTopicImageWrapper>
              </GameTopicWrapper>
            </GameTopicOuterWrapper>
            <CopyWrite>來測測你的偏見度數是多少吧！</CopyWrite>
          </AnimatedIntroWrapper>
          <AnimatedButtonWrapper style={fadeInBebel}>
            <Link href="/visionExamGame/GameStart">
              <GameSmallBevelButton
                buttonColor={theme.colors.black}
                textColor={theme.colors.pink}
                fontSize={theme.fontSizes[28]}
                buttonText="開始驗光"
              />
            </Link>
          </AnimatedButtonWrapper>
        </Wrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
