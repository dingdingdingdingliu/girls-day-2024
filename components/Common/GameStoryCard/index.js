import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { ImageWrapper } from "../Index/Wrapper";

const StoryCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const TitleContentWrapper = styled.div`
  width: 100%;
  border-top: 4px solid ${(props) => props.theme.colors.black};
  margin-bottom: 12px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-bottom: 24px;
  }
`;

// 角度內層
const BevelLabelStyle = styled.div`
  float: left;
  background-color: ${(props) => props.labelColor};
  clip-path: polygon(0 0, 100% 0%, 93% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    height: 36px;
    padding: 12px 26px;
  }
`;

const BevelLabelText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.textColor};
  white-space: nowrap;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[16]};
  }
`;

// 內容卡片
const CardContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

// 圖片顯示層
const ImageSectionWrapper = styled.div`
  width: 35%;
  height: auto;
  aspect-ratio: 3 / 4; // 1 / 2

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 110;
    height: 210px;
    margin-bottom: 25px;
  }
`;

const CopyWriteSectionWrapper = styled.div`
  width: 62%;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    padding-left: 24px;
  }
`;

const CopyWrite = styled.p`
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 3px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }
`;

function BevelTitle({ labelText, labelColor, textColor }) {
  return (
    <TitleContentWrapper>
      <BevelLabelStyle labelColor={labelColor}>
        <BevelLabelText textColor={textColor}>{labelText}</BevelLabelText>
      </BevelLabelStyle>
    </TitleContentWrapper>
  );
}

export default function GameStoryCard({
  labelText,
  imageSrc,
  copyWrite,
  labelColor,
  textColor,
}) {
  return (
    <StoryCardWrapper>
      <BevelTitle
        labelText={labelText}
        labelColor={labelColor}
        textColor={textColor}
      />
      <CardContentWrapper>
        <ImageSectionWrapper>
          <ImageWrapper>
            <Image
              src={imageSrc}
              alt="storyGirlImage"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </ImageSectionWrapper>
        <CopyWriteSectionWrapper>
          <CopyWrite>{copyWrite}</CopyWrite>
        </CopyWriteSectionWrapper>
      </CardContentWrapper>
    </StoryCardWrapper>
  );
}
