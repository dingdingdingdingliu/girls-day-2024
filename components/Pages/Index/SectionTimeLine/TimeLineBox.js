import styled from "@emotion/styled";
import TimeLineCard from "./TimeLineCard";
import TimeCardBevelLabel from "@/components/Common/Label/TimeCardBevelLabel";

// TimeLine區塊底層，包含年份 + 指引線 + 上下卡片空間
const TimeLineBoxWrapper = styled.div`
  width: 276px;
  height: 580px;
  max-width: 276px;
  max-height: 580px;
  position: absolute;
  top: 0;
  left: ${(props) => props.movingPx};
`;

export default function TimeLineBox({ timeBoxData, movingPx }) {
  const cardData = timeBoxData.card;

  return (
    <TimeLineBoxWrapper movingPx={`${movingPx}px`}>
      <TimeLineCard cardData={cardData?.main} />
      {cardData?.sub && <TimeLineCard cardData={cardData?.sub} />}
      <TimeCardBevelLabel
        labelColor={timeBoxData?.labelColor}
        labelText={timeBoxData?.years}
      />
    </TimeLineBoxWrapper>
  );
}
