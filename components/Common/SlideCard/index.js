import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";
import {
  AbsoluteSlideLabelWrapper,
  AbsoluteReportLabelWrapper,
  SingleLeftBevelLabel,
  SlideSingleLeftBevelLabel,
} from "@/components/Common/Label/SingleLeftBevelLabel";

// Slide 長型卡片區塊
const SlideCardWrapper = styled.div`
  background-color: ${(props) => props.cardColor};
  border-top: 3.5px solid ${(props) => props.theme.colors.black};
  position: absolute;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0); /* 初始無陰影 */
  cursor: pointer;
  z-index: 1;
  width: 94%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1); /* 右下方向的陰影，並加上暈染效果 */

  &:hover {
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2); /* 右下方向的陰影，並加上暈染效果 */
  }

  @media (max-width: ${globalConfig.sliderMobile}) {
    width: 100%;
    height: 100%;
  }
`;

// 依照排版流的圖片位置
const CardImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
`;

// 文案內容區塊
const ContentCardWrapper = styled.div`
  width: 100%;
  height: 63%;
  max-height: 63%;
  padding: 12px 16px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 15px 25px;
  }
`;

// 768以下，手機以上，標題超過兩行做...效果
const TitleWrapper = styled.div`
  overflow: auto;
  display: block;
  overflow: hidden;

  @media (max-width: ${globalConfig.sliderCardContentLimit}) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    overflow: auto;
    display: block;
  }
`;

// 超過四行做...效果
const ContentWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

// 報導文字
const ReportCopyWrite = styled.p`
  font-size: ${(props) => props.theme.fontSizes[16]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
`;

// 延伸區塊標題
const ExtendedTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  overflow: hidden;
  word-break: break-word;
  overflow-wrap: break-word;
  margin-bottom: 6px;

  @media (max-width: ${globalConfig.sliderCardContentLimit}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[20]};
    margin-bottom: 8px;
  }
`;

// 延伸區塊文字
const ExtendedCopyWrite = styled.p`
  font-size: ${(props) => props.theme.fontSizes[16]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  white-space: pre-wrap;
  letter-spacing: 2px;

  @media (max-width: ${globalConfig.sliderCardContentLimit}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[18]};
  }
`;

export function ReportSlideCard({ cardColor, cardData, onClick = null }) {
  const theme = useTheme();
  const { imageSrc, imageAlt, cardContent } = cardData;
  return (
    <SlideCardWrapper onClick={onClick} cardColor={cardColor}>
      <CardImageWrapper>
        <ImageWrapper>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </ImageWrapper>
      </CardImageWrapper>
      <ContentCardWrapper>
        <ContentWrapper>
          <ReportCopyWrite>{cardContent}</ReportCopyWrite>
        </ContentWrapper>
      </ContentCardWrapper>
      <AbsoluteReportLabelWrapper>
        <SingleLeftBevelLabel
          labelText="閱讀更多"
          labelColor={theme.colors.green}
          fontcolor={theme.colors.black}
        />
      </AbsoluteReportLabelWrapper>
    </SlideCardWrapper>
  );
}

export function ExtendedSlideCard({
  cardColor,
  cardData,
  dialogContent,
  setDialogData,
  labelText,
  isSociety,
  isDragging,
  handleMouseDown,
  handleMouseMove,
  handleMouseUp,
}) {
  const { imageSrc, imageAlt, title, cardContent, order } = cardData;
  const theme = useTheme();

  const onCardClick = (e) => {
    e.preventDefault();
    if (isSociety && cardData?.linkUrl && !isDragging) {
      window.open(cardData?.linkUrl, "_blank", "noopener,noreferrer");
    }
    if (!isSociety && !isDragging) {
      setDialogData(dialogContent[order]);
    }
  };

  return (
    <>
      <SlideCardWrapper
        onClick={onCardClick}
        cardColor={cardColor}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <CardImageWrapper>
          <ImageWrapper>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </CardImageWrapper>
        <ContentCardWrapper>
          <TitleWrapper>
            <ExtendedTitle>{title}</ExtendedTitle>
            {cardData?.engTitle && (
              <ExtendedTitle>{cardData?.engTitle}</ExtendedTitle>
            )}
          </TitleWrapper>
          <ContentWrapper>
            <ExtendedCopyWrite>{cardContent}</ExtendedCopyWrite>
          </ContentWrapper>
        </ContentCardWrapper>
        <AbsoluteSlideLabelWrapper>
          <SlideSingleLeftBevelLabel
            labelColor={theme.colors.black}
            fontcolor={theme.colors.green}
            labelText={labelText}
          />
        </AbsoluteSlideLabelWrapper>
      </SlideCardWrapper>
    </>
  );
}
