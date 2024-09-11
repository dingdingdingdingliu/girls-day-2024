import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

// 內容完整區塊層，含圖片顯示層與主要內容層
const StorySectionWrapper = styled.div`
  width: 85%;
  background-color: ${(props) => props.theme.colors.white};
  margin: 0 auto;
  border-top: 6px solid black;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    border-top: 4px solid black;
  }
`;

// 內容底層，放置主要內容層和標題層
const MainSectionWrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${globalConfig.mediaQuery}) {
    flex-direction: column;
  }
`;

// 主要內容層，內含視力檢查主題圖片與點擊連結
const ContentSectionWrapper = styled.div`
  width: 65%;
  padding: 60px 36px 0 36px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    padding: 0 30px 0 0;
  }
`;

// 標題層
const TitleSectionWrapper = styled.div`
  width: 35%;
  padding: 60px 40px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    padding: 24px;
  }
`;

// 標題內容底層
const TitleSectionInnerWrapper = styled.div`
  width: 100%;
`;

// 標題區塊，含手機版圖片
const TitleContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    height: 55px;
    margin-bottom: 32px;
  }
`;

// 標題文案內容
const TitleCopyWriteWrapper = styled.p`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes[20]};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 48px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
    margin-bottom: 0;
  }
`;

// 桌機版標題圖片層
const TitleImageDesktopWrapper = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 8 / 3;

  @media (max-width: ${globalConfig.mediaQuery}) {
    display: none;
  }
`;

// 手機版標題圖片層
const TitleImageMobileWrapper = styled.div`
  display: none;

  @media (max-width: ${globalConfig.mediaQuery}) {
    display: block;
    width: 40%;
    aspect-ratio: 8 / 3;
    margin-right: 16px;
  }
`;

export {
  StorySectionWrapper,
  MainSectionWrapper,
  ContentSectionWrapper,
  TitleSectionWrapper,
  TitleSectionInnerWrapper,
  TitleContentWrapper,
  TitleCopyWriteWrapper,
  TitleImageDesktopWrapper,
  TitleImageMobileWrapper,
};
