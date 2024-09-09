import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useTheme } from "@emotion/react";
import { ReportTitle } from "@/components/Common/Index/TitleWithLine";
import {
  SectionWrapper,
  IntroWrapper,
  CopyWriteWrapper,
  ActionWrapper,
} from "./Components";
import ResponsiveSlider from "@/components/Common/Slider";

const copyWrite = {
  reportIntro:
    "文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字",
};

const sliderData = [
  {
    imageSrc: "/images/chiikawa.jpeg",
    imageAlt: "chiikawa",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
  {
    imageSrc: "/images/chiikawa.jpeg",
    imageAlt: "chiikawa",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
  {
    imageSrc: "/images/chiikawa.jpeg",
    imageAlt: "chiikawa",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
  {
    imageSrc: "/images/chiikawa.jpeg",
    imageAlt: "chiikawa",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
  {
    imageSrc: "/images/chiikawa.jpeg",
    imageAlt: "chiikawa",
    cardContent:
      "報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字報導文字文字文字",
  },
];

// 專題報導底層
const StyledSectionWrapper = styled(SectionWrapper)`
  margin-bottom: 120px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-bottom: 50px;
  }
`;

// Slide 卡片區塊
function ReportSlider() {
  const theme = useTheme();
  return (
    <ActionWrapper>
      <ResponsiveSlider
        cardColor={theme.colors.light}
        isReport={true}
        sliderData={sliderData}
      />
    </ActionWrapper>
  );
}

// 專題報導文字區塊
function ReportIntro() {
  return (
    <IntroWrapper>
      <ReportTitle />
      <CopyWriteWrapper>
        <p>{copyWrite.reportIntro}</p>
      </CopyWriteWrapper>
    </IntroWrapper>
  );
}

export default function ReportSection() {
  return (
    <StyledSectionWrapper>
      <ReportIntro />
      <ReportSlider />
    </StyledSectionWrapper>
  );
}
