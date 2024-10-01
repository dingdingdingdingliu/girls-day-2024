import Image from "next/image";
import styled from "@emotion/styled";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme, keyframes, css } from "@emotion/react";
import { useSprings, animated } from "@react-spring/web";
import { VisionGameContext } from "@/context/VisionGameContext";
import {
  answerImageData,
  questionImageData,
} from "@/components/Common/VisionGame/gameImageData";
import {
  PageWrapper,
  ContentWrapper,
} from "@/components/Common/VisionGame/WrapperComponent";
import {
  ProgressBarWrapper,
  ProgressBar,
  TimerText,
} from "@/components/Common/TimerProgress";
import { GameSmallBevelButton } from "@/components/Common/Button/GameUsedBevelButton";
import Spinner from "@/components/Common/Spinner";
import ResponsiveContainer from "@/components/Common/ResponsiveContainer";

const initTimer = 5;

const shakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
`;

const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) =>
    props.isShowSpinner && props.theme.colors.mediumGrey};

  background-image: ${(props) =>
    !props.isShowSpinner &&
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightPink} 1%, 
    ${props.theme.colors.mediumGrey} 40%)`};

  ${(props) =>
    props.isPageShake &&
    css`
      animation: ${shakeAnimation} 0.5s ease-in-out 3;
    `}
`;

const StyledContentWrapper = styled(ContentWrapper)`
  padding: 48px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const GameOuterWrapper = styled.div`
  width: 270px;
  height: 300px;
  min-height: 300px;
  margin-top: 20px;
  position: relative;
`;

const GameWrapper = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.05);
`;

const OptionOuterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 28px;
`;

const OptionWrapper = styled.div`
  width: 105px;
  height: 105px;
  min-height: 105px;
  min-width: 105px;
  border-radius: 50%;
  overflow: hidden;
  cursor: ${(props) => (props.isClickable ? "pointer" : "not-allowed")};
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.1); /* 左下位置的陰影 */
`;

export default function VisionGameStart() {
  const theme = useTheme();
  const router = useRouter();
  const [seconds, setSeconds] = useState(initTimer); // 時間條秒數
  const [questionOrder, setQuestionOrder] = useState(1); // 顯示題目 title
  const [currentCardIndex, setCurrentCardIndex] = useState(1);
  const [isPageShake, setIsPageShake] = useState(false);
  const [isShowSpinner, setIsShowSpinner] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const { visionGameData, setPlayerAnswers } = useContext(VisionGameContext);

  // useSprings 設置多張動畫
  const [springs, api] = useSprings(visionGameData.length, () => ({
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
  }));

  // 進入此頁面時重置遊戲結果
  useEffect(() => {
    setPlayerAnswers([]);
  }, []);

  // 過場動畫元件顯示三秒後跳轉到遊戲一結果頁
  useEffect(() => {
    if (isShowSpinner)
      setTimeout(() => {
        router.push("/game-one/result");
      }, 3000);
  }, [isShowSpinner]);

  // 頁面晃動提示
  useEffect(() => {
    // 最後一秒時開始晃動頁面
    if (!isShowSpinner && seconds === 1) setIsPageShake(true);

    // 1秒後停止晃動頁面
    const shakeTimeout = setTimeout(() => {
      setIsPageShake(false);
    }, 1000);

    // 清理晃動計時器
    return () => clearTimeout(shakeTimeout);
  }, [seconds, isShowSpinner]);

  // 自動倒數秒數，倒計時為 0 時，觸發卡片自動往左飛離
  useEffect(() => {
    if (currentCardIndex > visionGameData.length) return;

    // 大於零：倒數秒數
    // 等於零：飛出卡片 + 等待一秒
    // -1 : 重新讓按鈕可點擊
    let interval;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      handleCardFlyOut(); // 倒計時為零，觸發卡片自動往左飛離
    } else {
      setCurrentCardIndex((pre) => pre + 1);
      setQuestionOrder((pre) => pre + 1);
      setSeconds(initTimer); // 重置秒數
      setIsClickable(true); // 重置可點擊
    }
    return () => clearInterval(interval);
  }, [seconds, currentCardIndex, visionGameData.length]);

  // 儲存玩家回答後執行，遊戲動作邏輯function，點擊或卡片飛出時執行資料設定與動畫
  const gameSettingFunction = (arg) => {
    const { x, rotate, type } = arg;
    if (currentCardIndex >= visionGameData.length)
      return setIsShowSpinner(true);

    if (type === "isClick" && currentCardIndex < visionGameData.length) {
      setCurrentCardIndex((pre) => pre + 1);
      setQuestionOrder((pre) => pre + 1);
      setSeconds(initTimer); // 重置秒數
      setIsClickable(true); // 重置可點擊
    }
    // 執行後回傳動畫
    return {
      x,
      rotate,
      opacity: 0,
      delay: 100,
      config: { mass: 2, tension: 400, friction: 50 },
    };
  };

  // 點擊按鈕事件
  const handleClick = (direction) => {
    // 已移出卡片不觸發
    // 時間0秒
    // 點擊後尚未跳到下一題
    // 不觸發動作
    if (
      !isClickable ||
      currentCardIndex > visionGameData.length ||
      seconds === 0
    )
      return;

    // 點擊後不可重複點擊
    setIsClickable(false);

    const currentQuestion = visionGameData[currentCardIndex - 1];
    const x = direction === "left" ? -300 : 300;
    const rotate = direction === "left" ? -45 : 45;
    const answer = direction === "left" ? "yes" : "no";

    // 儲存玩家回答
    if (currentCardIndex <= visionGameData.length) {
      setPlayerAnswers((prevAnswers) => {
        const answerExists = prevAnswers.some(
          (answer) => answer.id === currentQuestion.id,
        );

        if (!answerExists) {
          return [
            ...prevAnswers,
            {
              id: currentQuestion.id,
              selectedAnswer: answer,
            },
          ];
        }
      });
    }

    api.start((index) => {
      if (index === currentCardIndex - 1) {
        return gameSettingFunction({
          x,
          rotate,
          type: "isClick",
        });
      }
      return null; // 對於 current card Index 以外卡片不設置行為
    });
  };

  // 秒數為0時，自動飛出卡片
  const handleCardFlyOut = () => {
    const currentQuestion = visionGameData[currentCardIndex - 1];
    const x = -300;
    const rotate = -45;

    if (currentCardIndex > visionGameData.length) return;
    // 飛出時不可點擊
    setIsClickable(false);

    // 儲存玩家回答
    if (currentCardIndex <= visionGameData.length) {
      setPlayerAnswers((prevAnswers) => {
        const answerExists = prevAnswers.some(
          (answer) => answer.id === currentQuestion.id,
        );

        if (!answerExists) {
          return [
            ...prevAnswers,
            {
              id: currentQuestion.id,
              selectedAnswer: "incorrect",
            },
          ];
        }
      });
    }

    api.start((index) => {
      if (index === currentCardIndex - 1) {
        return gameSettingFunction({
          x,
          rotate,
          type: "isFlyout",
        }); // 更新動畫和狀態
      }

      return null; // 對於 current card Index 以外卡片不設置行為
    });
  };

  return (
    <ResponsiveContainer heightUnit={100} widthUnit={100}>
      <StyledPageWrapper
        isShowSpinner={isShowSpinner}
        isPageShake={isPageShake}
      >
        {isShowSpinner && <Spinner />}
        {!isShowSpinner && (
          <StyledContentWrapper>
            <Wrapper>
              <GameSmallBevelButton
                buttonColor={theme.colors.black}
                textColor={theme.colors.pink}
                buttonText={`第 ${questionOrder} 題`}
              />
              <GameOuterWrapper>
                {springs?.map((style, index) => (
                  <GameWrapper
                    key={index}
                    style={{
                      zIndex: visionGameData.length - index,
                      ...style,
                    }}
                  >
                    <Image
                      src={questionImageData[index]}
                      alt="question_card"
                      width={270}
                      height={300}
                      priority={index === 0 && true}
                    />
                  </GameWrapper>
                ))}
              </GameOuterWrapper>
              <OptionOuterWrapper>
                <OptionWrapper
                  isClickable={isClickable}
                  onClick={() => handleClick("left")}
                >
                  <Image
                    src={answerImageData.correct}
                    alt="answerIcon"
                    width={105}
                    height={105}
                    priority
                  />
                </OptionWrapper>
                <OptionWrapper
                  isClickable={isClickable}
                  onClick={() => handleClick("right")}
                >
                  <Image
                    src={answerImageData.wrong}
                    alt="answerIcon"
                    width={105}
                    height={105}
                    priority
                  />
                </OptionWrapper>
              </OptionOuterWrapper>
              <ProgressBarWrapper>
                <ProgressBar seconds={seconds}>
                  <TimerText>{seconds >= 0 ? seconds : 0}</TimerText>
                </ProgressBar>
              </ProgressBarWrapper>
            </Wrapper>
          </StyledContentWrapper>
        )}
      </StyledPageWrapper>
    </ResponsiveContainer>
  );
}
