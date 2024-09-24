import { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { useSpring, animated } from "@react-spring/web";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  ResultPageWrapper,
  ResultUpperWrapper,
  ResultLowerWrapper,
  ResultLowerContentWrapper,
  ResultUpperContentWrapper,
} from "@/components/Common/VisionGame/WrapperComponent";
import { VisionGameContext } from "@/context/VisionGameContext";
import { GameFullBevelButton } from "@/components/Common/Button/GameUsedBevelButton";
import GameResultCard from "@/components/Common/VisionGame/GameResultCard";
import GameAnswerCard from "@/components/Common/VisionGame/GameAnswerCard";
import GameFooter from "@/components/Common/VisionGame/GameFooter";

const downloadCopyWrite = "/長按圖片下載分享/";

const ResultTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  white-space: nowrap;
  letter-spacing: 2px;
  margin-bottom: 24px;
  text-align: center;
`;

const StyledDownLoadCopyWrite = styled.p`
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  white-space: nowrap;
  letter-spacing: 2px;
  margin: 20px 0;
  text-align: center;
`;

const AnswerInstructWrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
`;

const AnswerInstructText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  white-space: nowrap;
  letter-spacing: 2px;
`;

const ArrowDownStyle = styled(MdOutlineKeyboardArrowDown)`
  color: ${(props) => props.theme.colors.black};
  font-size: 36px;
`;

const AnimatedWrapper = styled(animated.div)`
  width: 100%;
`;

const HintText = styled.p`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes[14]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  white-space: nowrap;
  text-align: end;
  letter-spacing: 1px;
  padding-right: 28px;
  margin-bottom: -10px;
`;

export default function VisionGameResult() {
  const theme = useTheme();
  const router = useRouter();
  const { visionGameData, playerAnswers } = useContext(VisionGameContext);

  const correctAnswersMap = visionGameData?.reduce((acc, question) => {
    acc[question.id] = question.correctAnswer;
    return acc;
  }, {});

  const results = playerAnswers?.map((playerAnswer) => {
    const correctAnswer = correctAnswersMap[playerAnswer.id];
    const isCorrect = playerAnswer.selectedAnswer === correctAnswer;

    return {
      id: playerAnswer.id,
      question: visionGameData.find((q) => q.id === playerAnswer.id).question,
      selectedAnswer: playerAnswer.selectedAnswer,
      correctAnswer,
      isCorrect,
    };
  });

  const correctCount = results?.filter((result) => result.isCorrect).length;

  const fadeInCard = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: { duration: 1800 }, // 動畫持續時間
  });

  const fadeInFromTopDelayed = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-30px)" },
    config: { duration: 800 },
    delay: 1500, // 延遲效果
  });

  useEffect(() => {
    if (playerAnswers?.length === 0) {
      router.push("/game-one");
    }
  }, [playerAnswers?.length]);

  if (playerAnswers?.length === 0) {
    return (
      <ResultPageWrapper>
        <ResultUpperWrapper></ResultUpperWrapper>
      </ResultPageWrapper>
    );
  }

  return (
    <ResultPageWrapper>
      <ResultUpperWrapper>
        <ResultUpperContentWrapper>
          <ResultTitle>你的結果是......</ResultTitle>
          <AnimatedWrapper style={fadeInCard}>
            <GameResultCard score={Number(correctCount)} />
            <StyledDownLoadCopyWrite>
              {downloadCopyWrite}
            </StyledDownLoadCopyWrite>
          </AnimatedWrapper>
          <AnimatedWrapper style={fadeInFromTopDelayed}>
            <div style={{ marginBottom: "16px" }}>
              <Link href="/">
                <GameFullBevelButton
                  buttonColor={theme.colors.black}
                  textColor={theme.colors.pink}
                  buttonText="前往偏見眼鏡行瞭解更多"
                  fontSize={theme.fontSizes[20]}
                />
              </Link>
            </div>
            <a
              href="https://www.sfaa.gov.tw/SFAA/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GameFullBevelButton
                buttonColor={theme.colors.black}
                textColor={theme.colors.pink}
                buttonText="前往社家署網站瞭解更多"
                fontSize={theme.fontSizes[20]}
              />
            </a>
            <AnswerInstructWrapper>
              <ArrowDownStyle />
              <AnswerInstructText>想知道各題答案請滑</AnswerInstructText>
              <ArrowDownStyle position="right" />
            </AnswerInstructWrapper>
          </AnimatedWrapper>
        </ResultUpperContentWrapper>
      </ResultUpperWrapper>
      <ResultLowerWrapper>
        <ResultLowerContentWrapper>
          <HintText>正解</HintText>
          {results?.map((data, index) => {
            return <GameAnswerCard key={index} data={data} />;
          })}
          <GameFooter />
        </ResultLowerContentWrapper>
      </ResultLowerWrapper>
    </ResultPageWrapper>
  );
}
