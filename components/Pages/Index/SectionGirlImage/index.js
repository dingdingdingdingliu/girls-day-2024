import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import {
  PageWrapper,
  ContentWrapper,
  ImageWrapper,
} from "@/components/Common/Index/Wrapper";

// 頁面底層底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.white};
`;

// 電腦版底部滿版圖層
const ImageDesktopWrapper = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 7 / 2;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */
  margin-bottom: 80px;

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
    height: auto;
    aspect-ratio: 7 / 2;
    position: relative; /* 必須設置 position relative 以便內部圖片填滿 */
    margin-bottom: 60px;
  }
`;

export default function SectionGirlImage() {
  return (
    <StyledPageWrapper>
      <ContentWrapper>
        <ImageDesktopWrapper>
          <ImageWrapper>
            <Image
              src="/images/index/main_girl_image.png"
              alt="girl_image"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </ImageDesktopWrapper>
      </ContentWrapper>
      <ImageMobileWrapper>
        <ImageWrapper>
          <Image
            src="/images/index/main_girl_image.png"
            alt="girl_image"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </ImageWrapper>
      </ImageMobileWrapper>
    </StyledPageWrapper>
  );
}
