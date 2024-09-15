import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { PageWrapper, ContentWrapper } from "@/components/Common/Index/Wrapper";

// 頁面底層底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.black};
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  padding: 82px 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 32px 0;
  }
`;

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.green};
  letter-spacing: 8px;
  margin-bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
    letter-spacing: 4px;
    margin-bottom: 18px;
  }
`;

const VideoWrapper = styled.div`
  width: 70%;
	aspect-ratio: 2 / 1;
	margin: 0 auto;

  @media (max-width: ${globalConfig.mediaQuery}) {
    100%;
		aspect-ratio: 3 / 2;
  }
`;

export default function SectionPromoVideo() {
  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <Title>113年臺灣女孩日宣傳影片</Title>
        <VideoWrapper>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/GJerkayEgXE?si=8-d5fFLN_HOwEgMG"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </VideoWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
