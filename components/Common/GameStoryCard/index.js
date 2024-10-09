import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { ImageWrapper } from "../Index/Wrapper";
import Comments from "@/components/Common/Comments";
import useFormattedText from "@/hooks/useFormattedText";

const delay = (i) => Number(i) * 150;

const AnimatedStoryCardWrapper = styled(animated.div)`
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
  aspect-ratio: 3 / 4;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 215px;
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

const StyledSpan = styled.span`
  display: inline-block;
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

const CopyWriteContent = ({ content, children }) => {
  const formattedText = useFormattedText(content, "20px");

  return (
    <StyledSpan>
      {formattedText}
      {children}
    </StyledSpan>
  );
};

export default function GameStoryCard({ data, labelColor, textColor, id }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const getSpringProps = (id) =>
    useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(-30px)",
      config: { duration: 500 },
      delay: delay(id), // 每個元素的延遲時間
    });

  return (
    <AnimatedStoryCardWrapper style={getSpringProps(id)} ref={ref}>
      <BevelTitle
        labelText={data?.title}
        labelColor={labelColor}
        textColor={textColor}
      />
      <CardContentWrapper>
        <ImageSectionWrapper>
          <ImageWrapper>
            <Image
              src={data?.imageSrc}
              alt={data?.imageAlt}
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </ImageSectionWrapper>
        <CopyWriteSectionWrapper>
          <CopyWrite>
            <CopyWriteContent content={data?.copyWrite}>
              {data?.comments && <Comments comments={data?.comments} />}
              {data?.copyWriteSecond && data?.copyWriteSecond}
            </CopyWriteContent>
          </CopyWrite>
        </CopyWriteSectionWrapper>
      </CardContentWrapper>
    </AnimatedStoryCardWrapper>
  );
}
