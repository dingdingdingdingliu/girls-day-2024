import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useTheme } from "@emotion/react";

// Section Two 底線標題尺寸區塊
const TitleSizeWrapper = styled.div`
  width: auto;
  min-width: 135px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled(Wrapper)`
  display: inline-block;
  white-space: nowrap;
`;

const StyledUpperTitle = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) =>
    props.fontSize.upper ? props.fontSize.upper : props.theme.fontSizes[20]};
  font-weight: ${(props) =>
    props.fontWeight.upper
      ? props.fontWeight.upper
      : props.theme.fontWeights.bold};
  line-height: 130%;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) =>
      props.fontSize.mobileUpper
        ? props.fontSize.mobileUpper
        : props.theme.fontSizes[14]};
    font-weight: ${(props) =>
      props.fontWeight.mobileUpper
        ? props.fontWeight.mobileUpper
        : props.theme.fontWeights.bold};
    line-height: 130%;
  }
`;

const StyledTitle = styled.p`
  white-space: nowrap;
  display: inline;
  border-bottom: 6px solid ${(props) => props.color};
  padding-bottom: ${(props) => props.paddingBottom.desktop};
  font-size: ${(props) => props.fontSize.lower};
  font-weight: ${(props) => props.fontWeight.lower};
  line-height: 130%;
  color: ${(props) => props.color};

  @media (max-width: ${globalConfig.mediaQuery}) {
    border-bottom: 4px solid ${(props) => props.color};
    padding-bottom: ${(props) => props.paddingBottom.mobile};
    font-size: ${(props) =>
      props.fontSize.mobileLower
        ? props.fontSize.mobileLower
        : props.theme.fontSizes[14]};
    font-weight: ${(props) =>
      props.fontWeight.mobileLower
        ? props.fontWeight.mobileLower
        : props.theme.fontWights.bold};
    line-height: 130%;
  }
`;

function LowerTitleWithLine({
  lowerText,
  color,
  paddingBottom,
  fontSize,
  fontWeight,
}) {
  return (
    <StyledTitle
      paddingBottom={paddingBottom}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {lowerText}
    </StyledTitle>
  );
}

// 	不可換行的底線標題
function TitleWithLine({
  upText = null,
  lowerText,
  color,
  paddingBottom,
  fontSize,
  fontWeight,
}) {
  return (
    <TitleWrapper>
      {upText && (
        <StyledUpperTitle
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
        >
          {upText}
        </StyledUpperTitle>
      )}
      <LowerTitleWithLine
        lowerText={lowerText}
        color={color}
        paddingBottom={paddingBottom}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </TitleWrapper>
  );
}

// 	因應戲劇體驗工作坊標題過長的可換行標題
function WrapTitleWithLine({
  upText = null,
  lowerText,
  color,
  paddingBottom,
  fontSize,
  fontWeight,
}) {
  return (
    <Wrapper>
      {upText && (
        <StyledUpperTitle
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
        >
          {upText}
        </StyledUpperTitle>
      )}
      <LowerTitleWithLine
        lowerText={lowerText}
        color={color}
        paddingBottom={paddingBottom}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </Wrapper>
  );
}

// Section Intro 關於女孩日
export function GirlDayTitle() {
  const theme = useTheme();
  return (
    <TitleSizeWrapper>
      <TitleWithLine
        upText="關於"
        lowerText="女孩日"
        color={theme.colors.black}
        paddingBottom={{
          desktop: "12px",
          mobile: "6px",
        }}
        fontSize={{
          upper: theme.fontSizes[40],
          lower: theme.fontSizes[40],
          mobileUpper: theme.fontSizes[20],
          mobileLower: theme.fontSizes[20],
        }}
        fontWeight={{
          upper: theme.fontWeights.bold,
          lower: theme.fontWeights.bold,
          mobileUpper: theme.fontWeights.bold,
          mobileLower: theme.fontWeights.bold,
        }}
      />
    </TitleSizeWrapper>
  );
}

// Section Intro 今年主題
export function ThemeTitle() {
  const theme = useTheme();
  return (
    <TitleSizeWrapper>
      <TitleWithLine
        upText="今年"
        lowerText="主題"
        color={theme.colors.black}
        paddingBottom={{
          desktop: "12px",
          mobile: "6px",
        }}
        fontSize={{
          upper: theme.fontSizes[40],
          lower: theme.fontSizes[40],
          mobileUpper: theme.fontSizes[20],
          mobileLower: theme.fontSizes[20],
        }}
        fontWeight={{
          upper: theme.fontWeights.bold,
          lower: theme.fontWeights.bold,
          mobileUpper: theme.fontWeights.bold,
          mobileLower: theme.fontWeights.bold,
        }}
      />
    </TitleSizeWrapper>
  );
}

// Section Report 專題報導
export function ReportTitle() {
  const theme = useTheme();
  return (
    <TitleSizeWrapper>
      <TitleWithLine
        lowerText="專題報導"
        color={theme.colors.black}
        paddingBottom={{
          desktop: "12px",
          mobile: "6px",
        }}
        fontSize={{
          lower: theme.fontSizes[40],
          mobileLower: theme.fontSizes[20],
        }}
        fontWeight={{
          lower: theme.fontWeights.bold,
          mobileLower: theme.fontWeights.bold,
        }}
      />
    </TitleSizeWrapper>
  );
}

// Section Drama 戲劇體驗工作坊引導教材
export function DramaTitle() {
  const theme = useTheme();
  return (
    <TitleSizeWrapper>
      <WrapTitleWithLine
        upText="戲劇體驗工作坊"
        lowerText="引導教材"
        color={theme.colors.black}
        paddingBottom={{
          desktop: "12px",
          mobile: "6px",
        }}
        fontSize={{
          upper: theme.fontSizes[36],
          lower: theme.fontSizes[40],
          mobileUpper: theme.fontSizes[20],
          mobileLower: theme.fontSizes[20],
        }}
        fontWeight={{
          upper: theme.fontWeights.bold,
          lower: theme.fontWeights.bold,
          mobileUpper: theme.fontWeights.bold,
          mobileLower: theme.fontWeights.bold,
        }}
      />
    </TitleSizeWrapper>
  );
}

// Section Game Story
export function GameStoryTitle({ gameOrder }) {
  const theme = useTheme();
  return (
    <TitleSizeWrapper>
      <WrapTitleWithLine
        upText={`小遊戲 ${gameOrder}`}
        lowerText="遊戲後說明"
        color={theme.colors.black}
        paddingBottom={{
          desktop: "12px",
          mobile: "6px",
        }}
        fontSize={{
          upper: theme.fontSizes[40],
          lower: theme.fontSizes[32],
          mobileUpper: theme.fontSizes[18],
          mobileLower: theme.fontSizes[14],
        }}
        fontWeight={{
          upper: theme.fontWeights.bold,
          lower: theme.fontWeights.bold,
          mobileUpper: theme.fontWeights.bold,
          mobileLower: theme.fontWeights.bold,
        }}
      />
    </TitleSizeWrapper>
  );
}

// Section Time Line
export function TimeLineTitle() {
  const theme = useTheme();
  return (
    <TitleSizeWrapper>
      <WrapTitleWithLine
        upText="臺灣性別平等"
        lowerText="發展進程"
        color={theme.colors.green}
        paddingBottom={{
          desktop: "12px",
          mobile: "6px",
        }}
        fontSize={{
          upper: theme.fontSizes[40],
          lower: theme.fontSizes[40],
          mobileUpper: theme.fontSizes[18],
          mobileLower: theme.fontSizes[18],
        }}
        fontWeight={{
          upper: theme.fontWeights.bold,
          lower: theme.fontWeights.bold,
          mobileUpper: theme.fontWeights.bold,
          mobileLower: theme.fontWeights.bold,
        }}
      />
    </TitleSizeWrapper>
  );
}

// Section Society 社會資源
export function SocietyTitle() {
  const theme = useTheme();
  return (
    <TitleSizeWrapper>
      <TitleWithLine
        lowerText="社會資源"
        color={theme.colors.black}
        paddingBottom={{
          desktop: "12px",
          mobile: "6px",
        }}
        fontSize={{
          lower: theme.fontSizes[40],
          mobileLower: theme.fontSizes[20],
        }}
        fontWeight={{
          lower: theme.fontWeights.bold,
          mobileLower: theme.fontWeights.bold,
        }}
      />
    </TitleSizeWrapper>
  );
}

// 其他延伸資料標題
export function ExtendedTitle({ upperTitle, lowerTitle }) {
  const theme = useTheme();
  return (
    <TitleSizeWrapper>
      <TitleWithLine
        upText={upperTitle}
        lowerText={lowerTitle}
        color={theme.colors.black}
        paddingBottom={{
          desktop: "12px",
          mobile: "6px",
        }}
        fontSize={{
          upper: theme.fontSizes[28],
          lower: theme.fontSizes[40],
          mobileUpper: theme.fontSizes[12],
          mobileLower: theme.fontSizes[18],
        }}
        fontWeight={{
          upper: theme.fontWeights.bold,
          lower: theme.fontWeights.bold,
          mobileUpper: theme.fontWeights.bold,
          mobileLower: theme.fontWeights.bold,
        }}
      />
    </TitleSizeWrapper>
  );
}
