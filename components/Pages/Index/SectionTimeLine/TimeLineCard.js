import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

// 卡片區塊底層(含卡片+指引線)
const TimeCardWrapper = styled.div`
  width: 530px;
  height: 525px; // 425px卡片 + 100px 線條
  max-width: 530px;
  max-height: 525px;
  display: flex;
  flex-direction: ${(props) =>
    props.position === "above" ? "column-reverse" : "column"};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: transparent;
  position: absolute;
  z-index: 3;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 276px;
    height: 270px; // 220px卡片 + 50px 線條
    max-width: 276px;
    max-height: 270px;
  }
`;

// 置頂卡片
const TopTimeCardWrapper = styled(TimeCardWrapper)`
  top: 0;
  left: 0;
`;

// 置底卡片

const BottomTimeCardWrapper = styled(TimeCardWrapper)`
  bottom: 0;
  left: 0;
`;

// 指引線
export const GuideLine = styled.div`
  width: 4px;
  height: 100px;
  background-color: ${(props) => props.lineColor};
  @media (max-width: ${globalConfig.mediaQuery}) {
    height: 50px;
  }
`;

// 卡片內容底層
export const CardWrapper = styled.div`
  width: 100%;
  height: 425px;
  max-width: 100%;
  max-height: 425px;
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) =>
    props.isBorder ? `4px solid ${props.theme.colors.green}` : "none"};

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    height: 220px;
    max-width: 100%;
    max-height: 220px;
    padding: 16px 28px;
  }
`;

const TitleSection = styled.p`
  font-size: ${(props) => props.theme.fontSizes[26]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  white-space: pre-wrap;
  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[12]};
  }
`;

const ContentScrollWrapper = styled.div`
  width: 100%;
  height: 80%;
  max-height: 80%;
  overflow-y: scroll;
  margin-top: 24px;
  @media (max-width: ${globalConfig.mediaQuery}) {
    height: 75%;
    max-height: 75%;
  }
`;

const ContentSection = styled.p`
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 2px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[10]};
  }
`;

// isAbove: 卡片在 TimeLine 上方，指引線在卡片之下
export default function TimeLineCard({ cardData }) {
  const { title, content, lineColor, isBorder, position } = cardData;
  return (
    <div>
      {position === "above" ? (
        <TopTimeCardWrapper position={position}>
          <GuideLine lineColor={lineColor} />
          <CardWrapper isBorder={isBorder}>
            <TitleSection>{title}</TitleSection>
            <ContentScrollWrapper>
              <ContentSection>{content}</ContentSection>
            </ContentScrollWrapper>
          </CardWrapper>
        </TopTimeCardWrapper>
      ) : (
        <BottomTimeCardWrapper position={position}>
          <GuideLine lineColor={lineColor} />
          <CardWrapper isBorder={isBorder}>
            <TitleSection>{title}</TitleSection>
            <ContentScrollWrapper>
              <ContentSection>{content}</ContentSection>
            </ContentScrollWrapper>
          </CardWrapper>
        </BottomTimeCardWrapper>
      )}
    </div>
  );
}
