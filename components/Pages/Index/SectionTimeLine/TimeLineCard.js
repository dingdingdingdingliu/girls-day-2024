import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

// 卡片區塊底層(含卡片+指引線)
const TimeCardWrapper = styled.div`
  width: 276px;
  height: 270px; // 220px卡片 + 50px 線條
  max-width: 276px;
  max-height: 270px;
  display: flex;
  flex-direction: ${(props) =>
    props.position === "above" ? "column-reverse" : "column"};
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: transparent;
  position: absolute;
  z-index: 3;
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
  height: 50px;
  background-color: ${(props) => props.lineColor};
`;

// 卡片內容底層
export const CardWrapper = styled.div`
  width: 100%;
  height: 220px;
  max-width: 100%;
  max-height: 220px;
  padding: 16px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) =>
    props.isBorder ? `4px solid ${props.theme.colors.green}` : "none"};
`;

const TitleSection = styled.p`
  font-size: ${(props) => props.theme.fontSizes[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  white-space: pre-wrap;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[12]};
  }
`;

const ContentScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
`;

const FakeScroll = styled.div`
  width: 12px;
  height: calc(80% - 2px);
  max-height: 80%;
  pointer-events: none;
  transition: opacity 0.2s;
  position: absolute;
  top: 0px;
  right: 0px;
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.mediumGrey} 1%, 
    ${props.theme.colors.white} 90%)`};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 80%;
  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 24px;
  position: relative;

  @media (max-width: ${globalConfig.mediaQuery}) {
    height: 75%;
    max-height: 75%;
  }
`;

const ContentSection = styled.div`
  font-size: ${(props) => props.theme.fontSizes[16]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 2px;
  position: relative;
  padding-right: 10px;

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
            <ContentWrapper>
              <FakeScroll />
              <ContentScrollWrapper>
                <ContentSection>{content}</ContentSection>
              </ContentScrollWrapper>
            </ContentWrapper>
          </CardWrapper>
        </TopTimeCardWrapper>
      ) : (
        <BottomTimeCardWrapper position={position}>
          <GuideLine lineColor={lineColor} />
          <CardWrapper isBorder={isBorder}>
            <TitleSection>{title}</TitleSection>
            <ContentWrapper>
              <FakeScroll />
              <ContentScrollWrapper>
                <ContentSection>{content}</ContentSection>
              </ContentScrollWrapper>
            </ContentWrapper>
          </CardWrapper>
        </BottomTimeCardWrapper>
      )}
    </div>
  );
}
