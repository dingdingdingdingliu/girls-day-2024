import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import useAppleDeviceCheck from "@/hooks/useAppleDeviceCheck";

// 覆蓋層
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  pointer-events: auto; /* 覆蓋層本身阻止點擊 */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 1/4 區塊
const DialogWrapper = styled.div`
  width: 500px;
  height: 450px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-radius: 2px;
  position: relative;
  padding: 48px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 90%;
    height: 580px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const StyledRxCross = styled(RxCross2)`
  color: ${(props) => props.theme.colors.grey};
  cursor: pointer;
  font-size: 30px;
`;

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 1px;
`;

const Intro = styled.p`
  font-size: ${(props) => props.theme.fontSizes[14]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  white-space: pre-wrap;
  letter-spacing: 1px;
  margin: 8px 0 4px 0;
`;

const HashTag = styled.p`
  font-size: ${(props) => props.theme.fontSizes[14]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.pink};
  white-space: pre-wrap;
  letter-spacing: 1px;
`;

// 內容層
const ContentWrapper = styled.div`
  width: 100%;
  height: auto;
  max-height: 310px;
  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-all;
  white-space: pre-wrap;
  font-size: ${(props) => props.theme.fontSizes[18]};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 1px;
  padding-right: 14px;
  margin-top: 36px;
  position: relative;
`;

const Footer = styled.p`
  font-size: ${(props) => props.theme.fontSizes[18]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  white-space: pre-wrap;
  letter-spacing: 1px;
  margin: 8px 0 36px 0;
  text-align: end;
`;

const AnimatedArrowWrapper = styled(animated.div)`
  width: 18px;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyleDoubleArrowDown = styled(MdOutlineKeyboardDoubleArrowDown)`
  font-size: 20px;
`;

export default function PageDialog({
  isDialogOpen = true,
  setIsDialogOpen,
  setDialogData,
  dialogData,
  isDesktop,
}) {
  const isAppleDevice = useAppleDeviceCheck();
  const [reverse, setReverse] = useState(false);

  const flashingIcon = useSpring({
    from: { opacity: reverse ? 1 : 0.2 },
    to: { opacity: reverse ? 0.2 : 1 },
    config: { duration: 500 }, // 每個階段的時間一致
    onRest: () => setReverse(!reverse), // 動畫完成後反轉
    loop: true, // 無限循環
  });

  const onDesktopCloseClick = () => setDialogData({});
  const onOverlayClick = () => {
    if (!isDesktop) return;
    setIsDialogOpen((pre) => !pre);
  };

  useEffect(() => {
    if (Object.keys(dialogData).length > 0) setIsDialogOpen(true);
    if (Object.keys(dialogData).length <= 0) setIsDialogOpen(false);
  }, [dialogData]);

  return (
    <Overlay isOpen={isDialogOpen} onClick={onOverlayClick}>
      <Wrapper>
        <DialogWrapper>
          <IconWrapper onClick={() => onDesktopCloseClick()}>
            <StyledRxCross />
          </IconWrapper>
          <Title>{dialogData?.title}</Title>
          {dialogData?.engTitle && <Title>{dialogData?.engTitle}</Title>}
          <Intro>{dialogData?.intro}</Intro>
          {dialogData?.hashTag && <HashTag>{dialogData?.hashTag}</HashTag>}
          <ContentWrapper>
            {dialogData?.content}
            {dialogData?.footer && <Footer>{dialogData?.footer}</Footer>}
            {isAppleDevice && (
              <AnimatedArrowWrapper style={flashingIcon}>
                <StyleDoubleArrowDown />
              </AnimatedArrowWrapper>
            )}
          </ContentWrapper>
        </DialogWrapper>
      </Wrapper>
    </Overlay>
  );
}
