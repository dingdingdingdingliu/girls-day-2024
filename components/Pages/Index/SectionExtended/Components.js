import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { animated } from "@react-spring/web";

// 內容分區底層，電腦版左右排列標題與 slider，手機版上下排列
export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 20px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 0;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

// 內容區塊層
export const InnerContentWrapper = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
  }
`;

// 簡介內容底層
export const IntroWrapper = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
`;

// 簡介圖片底層
export const IntroImageWrapper = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 5 / 3;
  margin-top: 65px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 116px;
    height: 50px;
    margin-top: 0;
  }
`;

// slider or download
export const ActionWrapper = styled.div`
  width: 65%;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
  }
`;

export const AnimatedWrapper = styled(animated.div)`
  width: 100%;
`;
