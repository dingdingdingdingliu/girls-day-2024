import { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import useAppleDeviceCheck from "@/hooks/useAppleDeviceCheck";
import useFormattedText from "@/hooks/useFormattedText";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

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
  position: relative;
`;

// 1/4 區塊
const DialogWrapper = styled.div`
  width: 500px;
  max-width: 500px;
  max-height: 450px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-radius: 2px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 90%;
    max-width: 90%;
    max-height: 580px;
  }
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 0 36px 32px 36px;
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
  word-break: break-all;
  white-space: pre-wrap;
  font-size: ${(props) => props.theme.fontSizes[18]};
  color: ${(props) => props.theme.colors.black};
  letter-spacing: 1px;
  padding-right: 20px;
  margin-top: 36px;
`;

const Footer = styled.p`
  font-size: ${(props) => props.theme.fontSizes[18]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  white-space: pre-wrap;
  letter-spacing: 1px;
  margin-top: 8px;
  text-align: end;
`;

const StickyIconWrapper = styled.div`
  position: sticky;
  top: 16px;
  right: 16px;
  align-self: flex-end;
`;

const StyledRxCross = styled(RxCross2)`
  color: ${(props) => props.theme.colors.grey};
  cursor: pointer;
  font-size: 30px;
`;

const AnimatedArrowWrapper = styled(animated.div)`
  width: 18px;
  position: absolute;
  top: 50%;
  right: 0;
`;

const StyleDoubleArrowDown = styled(MdOutlineKeyboardDoubleArrowDown)`
  font-size: 18px;
`;

const StyledSpan = styled.span`
  display: inline-block;
`;

const CopyWriteContent = ({ content, children }) => {
  const formattedText = useFormattedText(content, "20px");

  return (
    <StyledSpan>
      {formattedText}
      {children}
    </StyledSpan>
  );
};

export default function PageDialog({
  isDialogOpen,
  setIsDialogOpen,
  setDialogData,
  dialogData,
  isDesktop,
}) {
  useBodyScrollLock(isDialogOpen);
  const isAppleDevice = useAppleDeviceCheck();
  const [reverse, setReverse] = useState(false);
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const divRef = useRef(null);
  const observerRef = useRef(null);

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
    setDialogData({});
  };

  useEffect(() => {
    if (Object.keys(dialogData).length > 0) setIsDialogOpen(true);
    if (Object.keys(dialogData).length <= 0) setIsDialogOpen(false);
  }, [dialogData]);

  useEffect(() => {
    const checkForScrollbars = () => {
      if (divRef.current) {
        const { scrollHeight, clientHeight } = divRef.current;
        setHasScrollbar(scrollHeight > clientHeight);
      }
    };

    if (divRef.current) {
      checkForScrollbars();
      observerRef.current = new ResizeObserver(() => {
        checkForScrollbars();
      });
      observerRef.current.observe(divRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [divRef.current]);

  if (!isDialogOpen) return null;

  return (
    <Overlay isOpen={isDialogOpen} onClick={onOverlayClick}>
      <Wrapper>
        <DialogWrapper ref={divRef}>
          <StickyIconWrapper onClick={() => onDesktopCloseClick()}>
            <StyledRxCross />
          </StickyIconWrapper>
          <BodyWrapper>
            <Title>{dialogData?.title}</Title>
            {dialogData?.engTitle && <Title>{dialogData?.engTitle}</Title>}
            {dialogData?.intro && <Intro>{dialogData?.intro}</Intro>}
            {dialogData?.hashTag && <HashTag>{dialogData?.hashTag}</HashTag>}
            <ContentWrapper>
              {dialogData?.content && (
                <CopyWriteContent content={dialogData?.content} />
              )}
              {dialogData?.footer && <Footer>{dialogData?.footer}</Footer>}
              {isAppleDevice && hasScrollbar && (
                <AnimatedArrowWrapper style={flashingIcon}>
                  <StyleDoubleArrowDown />
                </AnimatedArrowWrapper>
              )}
            </ContentWrapper>
          </BodyWrapper>
        </DialogWrapper>
      </Wrapper>
    </Overlay>
  );
}
