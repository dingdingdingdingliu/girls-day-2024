import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

// 內容分區底層
export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 0;
    padding-top: 24px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

// 簡介內容底層
export const IntroWrapper = styled.div`
  width: 27%;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
  }
`;

// 文案內容底層
export const CopyWriteWrapper = styled.div`
  word-break: break-all;
  font-size: ${(props) => props.theme.fontSizes[20]};
  margin-top: 48px;
  letter-spacing: 1px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes[14]};
    margin-top: 18px;
    margin-bottom: 22px;
  }
`;

// slider or download
export const ActionWrapper = styled.div`
  width: 65%;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
  }
`;
