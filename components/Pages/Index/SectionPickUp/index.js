import styled from "@emotion/styled";
import Image from "next/image";
import globalConfig from "@/styles/globalConfig";
import { useTheme } from "@emotion/react";
import {
  PageWrapper,
  ContentWrapper,
  ImageWrapper,
} from "@/components/Common/Index/Wrapper";
import {
  BevelLabel,
  AbsoluteLabelWrapper,
} from "@/components/Common/Label/BevelLabel";

// 頁面底層底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
`;

// 圖片外層，電腦版用，用來讓內部圖層可以調整位置
const ImageOuterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 圖片層
const ImageSectionWrapper = styled.div`
  width: 50%;
  height: auto;
  aspect-ratio: 5 / 2;
  margin-left: 80px;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: auto;
    height: 166px;
    margin: 50px 0 0 0; // label 高度
  }
`;

export default function SectionPickUp({ isDesktop }) {
  const theme = useTheme();
  return (
    <StyledPageWrapper>
      {!isDesktop && (
        <ImageSectionWrapper>
          <ImageWrapper>
            <Image
              src="/images/visionImage.png"
              alt="visionImage"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </ImageSectionWrapper>
      )}

      {!isDesktop && (
        <AbsoluteLabelWrapper>
          <BevelLabel
            buttonColor={theme.colors.yellow}
            textColor={theme.colors.black}
            labelText="取件櫃檯"
          />
        </AbsoluteLabelWrapper>
      )}
      <StyledContentWrapper>
        {isDesktop && (
          <ImageOuterWrapper>
            <ImageSectionWrapper>
              <ImageWrapper>
                <Image
                  src="/images/visionImage.png"
                  alt="visionImage"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </ImageWrapper>
            </ImageSectionWrapper>
          </ImageOuterWrapper>
        )}

        {isDesktop && (
          <AbsoluteLabelWrapper>
            <BevelLabel
              buttonColor={theme.colors.yellow}
              textColor={theme.colors.black}
              labelText="取件櫃檯"
            />
          </AbsoluteLabelWrapper>
        )}
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
