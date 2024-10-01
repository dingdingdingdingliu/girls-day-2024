import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 376px;
  height: 100%;
  max-height: 678px;
  overflow-y: auto !important;
  overflow-x: hidden;
`;

// 遊戲結果頁外層包裝，內層分成背景漸層上層與灰色背景下層
export const ResultPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightPink} 1%, 
    ${props.theme.colors.mediumGrey} 75%)`};
`;

// 背景漸層上層
export const ResultUpperWrapper = styled.div`
  width: 100%;
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightPink} 1%, 
    ${props.theme.colors.mediumGrey} 75%)`};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

// 灰色背景下層
export const ResultLowerWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.mediumGrey};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

// 內容層
export const ResultUpperContentWrapper = styled.div`
  width: 100%;
  max-width: 376px;
  overflow-y: auto !important;
  overflow-x: hidden;
  padding: 30px 48px;
  padding-bottom: 0px;
`;

export const ResultLowerContentWrapper = styled.div`
  width: 100%;
  max-width: 376px;
  padding-top: 80px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */
`;
