import Image from "next/image";
import globalConfig from "@/styles/globalConfig";
import styled from "@emotion/styled";
import { useSpring, animated } from "@react-spring/web";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";
import ResponsiveContainer from "@/components/Common/ResponsiveContainer";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: ${(props) => props.theme.fontSizes[40]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightPink} 1%, 
    ${props.theme.colors.mediumGrey} 45%,
		${props.theme.colors.lightGreen} 95%)`};

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[28]};
  }
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IndexImageWrapper = styled.div`
  width: 340px;
  min-width: 340px;
  height: 215px;
  min-height: 215px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 310px;
    min-width: 310px;
    height: 196px;
    min-height: 196px;
  }
`;

const IndexTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  white-space: nowrap;
  text-align: center;
  margin: 40px 0 24px 0;
`;

const BevelButtonStyle = styled.div`
  width: 230px;
  height: 40px;
  min-width: 230px;
  min-height: 40px;
  background-color: ${(props) => props.theme.colors.black};
  clip-path: polygon(4% 0, 100% 0%, 96% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BevelButtonText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[22]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.green};
  letter-spacing: 2px;
`;

const AnimatedWrapper = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function FirstEditionIndex() {
  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-30px)" },
    config: { duration: 500 },
    delay: 800, // 延遲效果
  });

  return (
    <ResponsiveContainer heightUnit={100} widthUnit={100}>
      <StyledWrapper>
        <OuterWrapper>
          <IndexImageWrapper>
            <ImageWrapper>
              <Image
                src="/images/index_first_edition.png"
                alt="index-coming-soon"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority={true}
              />
            </ImageWrapper>
          </IndexImageWrapper>
          <AnimatedWrapper style={fadeIn}>
            <IndexTitle>2024 年臺灣女孩日</IndexTitle>
            <BevelButtonStyle>
              <BevelButtonText>coming soon</BevelButtonText>
            </BevelButtonStyle>
          </AnimatedWrapper>
        </OuterWrapper>
      </StyledWrapper>
    </ResponsiveContainer>
  );
}
