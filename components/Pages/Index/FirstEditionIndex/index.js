import Image from "next/image";
import globalConfig from "@/styles/globalConfig";
import styled from "@emotion/styled";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
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
  letter-spacing: 1px;
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

export default function FirstEditionIndex() {
  return (
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
            />
          </ImageWrapper>
        </IndexImageWrapper>
        <IndexTitle>2024 年臺灣女孩日</IndexTitle>
        <BevelButtonStyle>
          <BevelButtonText>coming soon</BevelButtonText>
        </BevelButtonStyle>
      </OuterWrapper>
    </StyledWrapper>
  );
}
