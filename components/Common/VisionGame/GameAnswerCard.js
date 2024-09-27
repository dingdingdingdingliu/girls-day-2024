import styled from "@emotion/styled";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { answerImageData } from "./gameImageData";
import { RxCross2 } from "react-icons/rx";

const delay = (i) => Number(i) * 100;

// 卡片外層
const SectionWrapper = styled(animated.div)`
  width: 100%;
  display: flex;
  padding: 18px 18px 18px 30px;
  justify-content: space-around;
  align-items: center;
  background-image: ${(props) =>
    !props.isCorrect &&
    `linear-gradient(to right, 
      ${props.theme.colors.lightPink} 10%, 
      ${props.theme.colors.mediumGrey} 80%
    )`};
  margin: 12px 0;
  position: relative;
  border-radius: 2px;
`;

const AnswerOrderWrapper = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const AnswerOrder = styled.p`
  font-size: ${(props) => props.theme.fontSizes[14]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.pink};
  white-space: nowrap;
`;

const QuestionText = styled.div`
  width: 216px;
  font-size: ${(props) => props.theme.fontSizes[18]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 2px;
`;

const StyledRxCross = styled(RxCross2)`
  color: ${(props) => props.theme.colors.white};
  font-size: 28px;
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
`;

export default function GameAnswerCard({ data }) {
  const { id, question, correctAnswer, isCorrect } = data;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const getSpringProps = (id) =>
    useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(-10px)",
      config: { duration: 500 },
      delay: delay(id), // 每個元素的延遲時間
    });

  return (
    <SectionWrapper isCorrect={isCorrect} ref={ref} style={getSpringProps(id)}>
      <AnswerOrderWrapper>
        <AnswerOrder>{id}</AnswerOrder>
      </AnswerOrderWrapper>
      <QuestionText>{question}</QuestionText>
      <Image
        src={
          correctAnswer === "yes"
            ? answerImageData.correct
            : answerImageData.wrong
        }
        alt="answerIcon"
        width={31}
        height={31}
      />
      {!isCorrect && <StyledRxCross />}
    </SectionWrapper>
  );
}
