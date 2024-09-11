import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import TimeLineCard from "./TimeLineCard";
import TimeCardBevelLabel from "@/components/Common/Label/TimeCardBevelLabel";

// TimeLine區塊底層，包含年份 + 指引線 + 上下卡片空間
const TimeLineBoxWrapper = styled.div`
  width: 530px;
  height: 1130px;
  max-height: 1130px;
  position: absolute;
  top: 0;
  left: ${(props) => props.movingDesktopPx};

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 276px;
    max-height: 580px;
    left: ${(props) => props.movingMobilePx};
  }
`;

export default function TimeLineBox({
  timeBoxData,
  movingMobilePx,
  movingDesktopPx,
}) {
  const cardData = timeBoxData.card;

  return (
    <TimeLineBoxWrapper
      movingMobilePx={`${movingMobilePx}px`}
      movingDesktopPx={`${movingDesktopPx}px`}
    >
      <TimeLineCard cardData={cardData?.main} />
      {cardData?.sub && <TimeLineCard cardData={cardData?.sub} />}
      <TimeCardBevelLabel
        labelColor={timeBoxData?.labelColor}
        labelText={timeBoxData?.years}
      />
    </TimeLineBoxWrapper>
  );
}
