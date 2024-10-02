import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { RxCross2 } from "react-icons/rx";
import { ImageWrapper } from "./WrapperComponent";

const initTimer = 7;

const AnimatedOverlay = styled(animated.div)`
  width: 89%;
  height: 100%;
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 100%;
    height: 80%;
    max-height: 80%;
  }
`;

const AnimatedDialogWrapper = styled(animated.div)`
  width: 50%;
  max-width: 600px;
  height: 80%;
  max-height: 600px;
  position: relative;

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 80%;
    max-width: 80%;
    height: 75%;
    max-height: 75%;
  }
`;

const DialogWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 48px 56px;
  padding-top: ${(props) => (props.length > 5 ? "36px" : "60px")};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 2px;
  background-image: ${(props) =>
    `linear-gradient(to bottom,
		${props.theme.colors.mediumGrey} 1%,
		${props.theme.colors.white} 20%)`};
  box-shadow:
    0 8px 10px rgba(0, 0, 0, 0.1),
    0 -4px 10px rgba(0, 0, 0, 0.1),
    8px 0 10px rgba(0, 0, 0, 0.1),
    -4px 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: ${globalConfig.findObjectGame}) {
    padding: 28px;
    padding-top: 50px;
  }
`;

const ObjectTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[48]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  white-space: pre-wrap;
  line-height: 120%;
  letter-spacing: 2px;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: ${(props) => props.theme.fontSizes[24]};
  }
`;

const ImageSection = styled.div`
  width: 32%;
  min-width: 32%;
  height: auto;
  aspect-ratio: 1 / 1;
  margin: ${(props) => (props.length > 5 ? "26px 0" : "36px 0")};

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 60%;
    min-width: 60%;
    margin: 20px 0px;
  }
`;

const StyledRxCross2 = styled(RxCross2)`
  color: ${(props) => props.theme.colors.black};
  font-size: 28px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const Intro = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: start;
  letter-spacing: 2px;
  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: ${(props) => props.theme.fontSizes[14]};
  }
`;

export default function ObjectDialog({ data, isOpen, setIsShowDialog }) {
  const [countdownTime, setCountdownTime] = useState(initTimer);
  const onCrossClick = () => setIsShowDialog(false);

  const fadeInDialog = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }, // 動畫持續時間
    delay: isOpen && 200,
  });

  const fadeInOverlay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 }, // 動畫持續時間
  });

  // 倒數計時關閉彈窗的 useEffect
  useEffect(() => {
    let timer;

    if (isOpen) {
      timer = setInterval(() => {
        setCountdownTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (countdownTime < 0) {
      setCountdownTime(initTimer);
      setIsShowDialog(false);
    }

    return () => clearInterval(timer); // 清除計時器
  }, [isOpen, countdownTime]);

  return (
    <AnimatedOverlay
      isOpen={isOpen}
      style={fadeInOverlay}
      onClick={onCrossClick}
    >
      <AnimatedDialogWrapper length={data?.title.length} style={fadeInDialog}>
        <DialogWrapper>
          <StyledRxCross2 onClick={onCrossClick} />
          <ObjectTitle>{data?.title}</ObjectTitle>
          <ImageSection length={data?.title.length}>
            <ImageWrapper>
              <Image
                src={data?.imageSrc}
                alt={data?.alt}
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </ImageWrapper>
          </ImageSection>
          <Intro>{data?.intro}</Intro>
        </DialogWrapper>
      </AnimatedDialogWrapper>
    </AnimatedOverlay>
  );
}
