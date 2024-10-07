import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const AnimatedFooterCardWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  z-index: ${(props) => (props.isVisible ? 10 : 1)};
`;

const FooterCardButtonWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  border-radius: 2px 2px 0 0;
  cursor: pointer;
  z-index: 2;
`;

const ExplainTitleStyle = styled.p`
  color: ${(props) => props.theme.colors.pink};
  font-size: ${(props) => props.theme.fontSizes[16]};
  white-space: nowrap;
  border-bottom: ${(props) => `0.75px solid ${props.theme.colors.pink}`};
  padding-bottom: 6px;
  margin-bottom: 12px;

  @media (max-width: ${globalConfig.sliderTablet}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[16]};
    padding-bottom: 28px;
    margin-bottom: 14px;
  }
`;

const ContentTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowDownStyle = styled(MdOutlineKeyboardArrowDown)`
  color: ${(props) => props.theme.colors.pink};
  font-size: 32px;
  margin-bottom: -2px;

  @media (max-width: ${globalConfig.sliderTablet}) {
    font-size: 20px;
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: 28px;
    margin-bottom: -1px;
  }
`;

const ArrowUpStyle = styled(MdOutlineKeyboardArrowUp)`
  color: ${(props) => props.theme.colors.pink};
  font-size: 32px;
  margin-bottom: -2px;

  @media (max-width: ${globalConfig.sliderTablet}) {
    font-size: 20px;
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: 28px;
    margin-bottom: -1px;
  }
`;

const ContentTitleStyle = styled.p`
  color: ${(props) => props.theme.colors.pink};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  white-space: nowrap;
  margin: 0 4px;
  letter-spacing: 1px;

  @media (max-width: ${globalConfig.sliderTablet}) {
    font-size: ${(props) => props.theme.fontSizes[12]};
    letter-spacing: 0px;
    margin: 0;
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[20]};
    letter-spacing: 1px;
    margin: 0 28px;
  }
`;

const RelativePosition = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  height: 1px;
`;

const AnimatedCopyWriteWrapper = styled(animated.div)`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 16px 24px;
  border: 4px solid ${(props) => props.theme.colors.black};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 24px 36px;
  }
`;

const CopyWriteStyle = styled.p`s
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  letter-spacing: 2px;
  margin: 0 auto;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[16]};
  }
`;

export default function FooterCard({ title, copyWrite, count }) {
  const [isVisible, setIsVisible] = useState(false);
  const onCardClick = () => setIsVisible((visible) => !visible);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateY(-50px)",
    config: { duration: 800 },
    delay: 400, // 延遲效果
  });

  const fadeInCard = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateY(-10px)",
    zIndex: isVisible ? (10 - count) * 100 : 0,
    config: { duration: 100 },
  });

  return (
    <AnimatedFooterCardWrapper ref={ref} style={fadeIn} isVisible={isVisible}>
      <FooterCardButtonWrapper onClick={onCardClick}>
        <ExplainTitleStyle>名詞解釋</ExplainTitleStyle>
        <ContentTitleWrapper>
          {isVisible ? <ArrowUpStyle /> : <ArrowDownStyle />}
          <ContentTitleStyle>{title}</ContentTitleStyle>
          {isVisible ? <ArrowUpStyle /> : <ArrowDownStyle />}
        </ContentTitleWrapper>
      </FooterCardButtonWrapper>
      <RelativePosition>
        <AnimatedCopyWriteWrapper style={fadeInCard}>
          <CopyWriteStyle>{copyWrite}</CopyWriteStyle>
        </AnimatedCopyWriteWrapper>
      </RelativePosition>
    </AnimatedFooterCardWrapper>
  );
}
