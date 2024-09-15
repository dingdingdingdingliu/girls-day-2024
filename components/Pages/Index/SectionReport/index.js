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
    padding: 0;
    padding-top: 24px;
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

// 電腦版底部滿版圖層
const ImageDesktopWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */

  @media (max-width: ${globalConfig.mediaQuery}) {
    display: none;
  }
`;

// 手機版底部滿版圖層
const ImageMobileWrapper = styled.div`
  display: none;

  @media (max-width: ${globalConfig.mediaQuery}) {
    display: block;
    width: 100%;
    height: 100px;
    position: relative; /* 必須設置 position relative 以便內部圖片填滿 */
  }
`;

export default function SectionReport() {
  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <InnerContentWrapper>
          <ReportSection />
          <DramaSection />
        </InnerContentWrapper>
        <ImageDesktopWrapper>
          <Image
            src="/images/reportDesktopImage.png"
            alt="reportDesktopImage"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </ImageDesktopWrapper>
      </StyledContentWrapper>
      <ImageMobileWrapper>
        <Image
          src="/images/reportMobileImage.png"
          alt="reportMobileImage"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </ImageMobileWrapper>
    </StyledPageWrapper>
  );
}
