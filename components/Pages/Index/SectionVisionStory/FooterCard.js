import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { GiClick } from "react-icons/gi";

const AnimatedFooterCardWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const FooterCardButtonWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
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
	obrder
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

const ArrowStyle = styled(GiClick)`
  color: ${(props) => props.theme.colors.pink};
  font-size: 16px;

  @media (max-width: ${globalConfig.sliderTablet}) {
    font-size: 12px;
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: 20px;
  }
`;

const ContentTitleStyle = styled.p`
  color: ${(props) => props.theme.colors.pink};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  white-space: nowrap;
  margin: 0 6px;
  letter-spacing: 1px;

  @media (max-width: ${globalConfig.sliderTablet}) {
    font-size: ${(props) => props.theme.fontSizes[12]};
    letter-spacing: 0px;
    margin: 0 2px;
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[20]};
    letter-spacing: 1px;
    margin: 0 28px;
  }
`;

export default function FooterCard({ cardData, setDialogData }) {
  const { title, copyWrite } = cardData;
  const dialogData = {
    title,
    content: copyWrite,
  };

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

  const onCardClick = () => {
    setDialogData(dialogData);
  };

  return (
    <AnimatedFooterCardWrapper ref={ref} style={fadeIn}>
      <FooterCardButtonWrapper onClick={onCardClick}>
        <ExplainTitleStyle>名詞解釋</ExplainTitleStyle>
        <ContentTitleWrapper>
          <ArrowStyle />
          <ContentTitleStyle>{title}</ContentTitleStyle>
          <ArrowStyle />
        </ContentTitleWrapper>
      </FooterCardButtonWrapper>
    </AnimatedFooterCardWrapper>
  );
}
