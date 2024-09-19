import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

export const GamePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.mediumGrey};
  padding: 14px;
`;

export const GameContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${globalConfig.findObjectGame}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */
`;

// OverLay
// 覆蓋層
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  pointer-events: auto; /* 覆蓋層本身阻止點擊 */
`;

// 使dialog子元件置中父元件
export const OuterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DialogWrapper = styled.div`
  width: 80%;
  max-width: 840px;
  height: 90%;
  max-height: 610px;
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightGreen} 1%, 
    ${props.theme.colors.white} 40%)`};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 2px;
  position: relative;
  padding-top: 36px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 90%;
    height: 80%;
    padding: 40px 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
