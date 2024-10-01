import styled from "@emotion/styled";
import TimeLineBox from "./TimeLineBox";
import timeCardData from "./timeCardData";

// 內容分區底層
const SectionWrapper = styled.div`
  width: 100%;
  height: 580px;
  max-height: 580px;
  margin: 40px 0;
  position: relative;
`;

// TimeLine
const TimeLine = styled.div`
  height: 12px;
  width: 4048px;
  max-height: 12px;
  max-width: 4048px;
  background-color: ${(props) => props.theme.colors.grey};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
`;

export default function TimeLineSection() {
  return (
    <SectionWrapper>
      {timeCardData?.map((data, index) => {
        let movingPosition = {};
        const order = Number(index + 1);
        if (order === 1) {
          movingPosition = {
            mobile: 112,
            desktop: 210,
          };
        } else if (order === 2) {
          movingPosition = {
            mobile: 426,
            desktop: 838,
          };
        } else if (order === 3) {
          movingPosition = {
            mobile: 804,
            desktop: 1586,
          };
        } else {
          movingPosition = {
            mobile: 804 + (order - 3) * 314,
            desktop: 1586 + (order - 3) * 628,
          };
        }
        return (
          <TimeLineBox
            key={index}
            timeBoxData={data}
            movingPx={movingPosition.mobile}
          />
        );
      })}
      <TimeLine />
    </SectionWrapper>
  );
}
