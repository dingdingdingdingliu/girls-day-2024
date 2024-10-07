import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { PageWrapper, ContentWrapper } from "@/components/Common/Index/Wrapper";
import ReportSection from "./ReportSection";
import DramaSection from "./DramaSection";

// 頁面底層底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.white};
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  padding: 90px 0;
  padding-bottom: 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 24px 0;
  }
`;

// 內容區塊層
const InnerContentWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-bottom: 48px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    margin-bottom: 24px;
  }
`;

// 手機版底部滿版圖層
const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  max-height: 200px;
  margin-top: 20px;
  position: relative;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    height: 100px;
    max-height: 100px;
    margin-top: 0;
  }
`;

export default function SectionReport({ isFirstEdition }) {
  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <InnerContentWrapper>
          <ReportSection isFirstEdition={isFirstEdition} />
          <DramaSection isFirstEdition={isFirstEdition} />
        </InnerContentWrapper>
      </StyledContentWrapper>
      <ImageWrapper>
        <Image
          src="/images/index/report_bottom_image.png"
          alt="report_image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </ImageWrapper>
    </StyledPageWrapper>
  );
}
