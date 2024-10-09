import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@emotion/react";
import { PageWrapper, ContentWrapper } from "@/components/Common/Index/Wrapper";
import {
  BevelLabel,
  AbsoluteLabelWrapper,
} from "@/components/Common/Label/BevelLabel";
import { TimeLineTitle } from "@/components/Common/Index/TitleWithLine";
import TimeLineSection from "./TimeLineSection";
import HintMask from "./HintMask";

const titleCopyWrite =
  "臺灣的性別運動發展至今，以婦女運動為先驅，到出現同志運動、男性研究，更多專精特定性別議題的民間團體，而政府部門也積極實踐聯合國的「性別主流化」概念，把性別議題從邊緣拉到主流，融入各項業務中。整體來說，臺灣的性別人權發展有著透過修法、立法、行政組織帶來改變，並回應國際重要議題的特徵。";

// 頁面底層底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightGreen} 0%, 
    ${props.theme.colors.lightOrange} 50%, 
    ${props.theme.colors.lightPink} 92%,
		${props.theme.colors.black} 100%)
		`};
  position: relative;
  padding-bottom: 20px;
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
  padding-top: 135px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-top: ${(props) => props.theme.spacing.pageTopSpacing};
    padding: 120px 0 240px 0;
  }
`;

// 內容區塊，和專題報導區左右兩側切齊，內含上層標題層和下層時間軸層
const InnerContentWrapper = styled(animated.div)`
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
  }
`;

const TitleContentOuterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: ${globalConfig.mediaQuery}) {
    flex-direction: column;
  }
`;

const TitleContentWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`;

const TitleContent = styled.p`
  width: 50%;
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 2px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes[16]};
    margin-top: 32px;
  }
`;

const ShadowRelativeWrapper = styled.div`
  width: 100%;
  height: 665px;
  position: relative;
  margin: 80px 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    height: 665px;
    margin: 0;
  }
`;

const TimeLineScrollWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  position: relative;
`;

// 陰影層
const ShadowWrapper = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 40;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 28px;
  }
`;

// 左側陰影層
const ShadowLeftWrapper = styled(ShadowWrapper)`
  background-image: linear-gradient(
    to right,
    rgba(200, 200, 200, 0.08),
    transparent 90%
  );
  backdrop-filter: blur(0.5px);
  left: -2px;
`;

// 右側陰影層
const ShadowRightWrapper = styled(ShadowWrapper)`
  background-image: linear-gradient(
    to left,
    rgba(200, 200, 200, 0.08),
    transparent 90%
  );
  backdrop-filter: blur(0.5px);
  right: -2px;
`;

const LabelWrapper = styled(AbsoluteLabelWrapper)`
  top: 135px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    top: ${(props) => props.theme.spacing.pageTopSpacing};
  }
`;

export default function SectionTimeLine({ isDesktop }) {
  const theme = useTheme();
  const [isMaskOpen, setIsMaskOpen] = useState(false);
  const [maskShownOnce, setMaskShownOnce] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateY(-50px)",
    config: { duration: 800 },
    delay: 400, // 延遲效果
  });

  const fadeInHint = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 }, // 動畫持續時間
    delay: isMaskOpen && 600, // 只有在 isGameEnd 為 true 時設置延遲
    reset: false,
  });

  useEffect(() => {
    if (inView && !maskShownOnce) {
      setIsMaskOpen(true);
      setMaskShownOnce(true);
    }
  }, [inView, maskShownOnce]);

  useEffect(() => {
    if (isMaskOpen) {
      const timeout = setTimeout(() => {
        setIsMaskOpen(false);
      }, 6000);

      return () => clearTimeout(timeout);
    }
  }, [isMaskOpen]);

  return (
    <StyledPageWrapper ref={ref}>
      {!isDesktop && (
        <LabelWrapper id="processing">
          <BevelLabel
            buttonColor={theme.colors.black}
            textColor={theme.colors.green}
            labelText="加工區"
            inView={inView}
          />
        </LabelWrapper>
      )}
      <StyledContentWrapper>
        {isDesktop && (
          <LabelWrapper id="processing">
            <BevelLabel
              buttonColor={theme.colors.black}
              textColor={theme.colors.green}
              labelText="加工區"
              inView={inView}
            />
          </LabelWrapper>
        )}
        <InnerContentWrapper style={fadeIn}>
          <TitleContentOuterWrapper>
            <TitleContentWrapper>
              <TimeLineTitle />
              <TitleContent>{titleCopyWrite}</TitleContent>
            </TitleContentWrapper>
          </TitleContentOuterWrapper>
          <ShadowRelativeWrapper>
            <ShadowLeftWrapper />
            <TimeLineScrollWrapper>
              <HintMask fadeInHint={fadeInHint} isMaskOpen={isMaskOpen} />
              <TimeLineSection />
            </TimeLineScrollWrapper>
            <ShadowRightWrapper />
          </ShadowRelativeWrapper>
        </InnerContentWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
