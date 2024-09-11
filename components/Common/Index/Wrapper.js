import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const IndexContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 85%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */
`;
