import { useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const FooterCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
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
`;

const ExplainTitleStyle = styled.p`
  color: ${(props) => props.theme.colors.yellow};
  font-size: ${(props) => props.theme.fontSizes[16]};
  white-space: nowrap;
  border-bottom: 0.75px solid yellow;
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
  color: ${(props) => props.theme.colors.yellow};
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
  color: ${(props) => props.theme.colors.yellow};
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
  color: ${(props) => props.theme.colors.yellow};
  font-size: ${(props) => props.theme.fontSizes[26]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  white-space: nowrap;
  margin: 0 6px;
  letter-spacing: 1px;

  @media (max-width: ${globalConfig.sliderTablet}) {
    font-size: ${(props) => props.theme.fontSizes[16]};
    margin: 0;
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[20]};
    margin: 0 28px;
  }
`;

const fadeIn = keyframes`
  from {
    max-height: 0;
    opacity: 0;
    transform: translateY(-20px); /* 模擬從上往下展開 */
  }
  to {
    max-height: 900px;
    opacity: 1;
    transform: translateY(0); /* 最後回到原位 */
  }
`;

const fadeOut = keyframes`
  from {
    max-height: 900px;
    opacity: 1;
    transform: translateY(0); /* 初始位置 */
  }
  to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-20px); /* 往上收合 */
  }
`;

const RelativePosition = styled.div`
  background-color: ${(props) =>
    props.isVisible ? "transparent" : props.theme.colors.black};
  width: 100%;
  height: 1px;
  position: relative;
`;

const CopyWriteWrapper = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 16px 24px;
  position: absolute;
  top: 0;
  left: 0;
  border: 4px solid ${(props) => props.theme.colors.black};
  z-index: ${(props) => Number(props.count) * 100};
  max-height: ${(props) => (props.isVisible ? "900px" : "0")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 0.5s ease-in-out
    forwards;
  transition:
    max-height 0.5s ease-in-out,
    opacity 0.5s ease-in-out; /* 增加平滑過渡 */

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 24px 36px;
  }
`;

const CopyWriteStyle = styled.p`
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

  return (
    <FooterCardWrapper>
      <FooterCardButtonWrapper onClick={onCardClick}>
        <ExplainTitleStyle>名詞解釋</ExplainTitleStyle>
        <ContentTitleWrapper>
          {isVisible ? <ArrowUpStyle /> : <ArrowDownStyle />}
          <ContentTitleStyle>{title}</ContentTitleStyle>
          {isVisible ? <ArrowUpStyle /> : <ArrowDownStyle />}
        </ContentTitleWrapper>
      </FooterCardButtonWrapper>
      <RelativePosition isVisible={isVisible}>
        <CopyWriteWrapper isVisible={isVisible} count={count}>
          <CopyWriteStyle>{copyWrite}</CopyWriteStyle>
        </CopyWriteWrapper>
      </RelativePosition>
    </FooterCardWrapper>
  );
}
