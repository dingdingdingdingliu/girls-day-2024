import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@emotion/react";
import {
  PageWrapper,
  IndexContentWrapper,
} from "@/components/Common/Index/Wrapper";
import BevelButton from "@/components/Common/Button/BevelButton";
import ResponsiveContainer from "@/components/Common/ResponsiveContainer";

const desktopImageUrl = "images/index/entrance_desktop.gif";
const mobileImageUrl = "images/index/entrance_mobile.gif";

const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.mediumGrey};
  height: 100%;
`;

const StyledContentWrapper = styled(IndexContentWrapper)`
  height: 100%;
  position: relative;
  background-image: url(${desktopImageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: ${globalConfig.tablet}) {
    background-image: url(${(props) =>
      props.isLandscape ? desktopImageUrl : mobileImageUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  @media (max-width: ${globalConfig.tablet}) {
    bottom: 30px;
  }
  @media (max-width: ${globalConfig.mobile}) {
    bottom: 80px;
  }
`;

const AnimatedWrapper = styled(animated.div)`
  width: 100%;
`;

export default function SectionEntrance() {
  const theme = useTheme();
  const [isLandscape, setIsLandscape] = useState(false);

  // 彈簧效果
  const fadeInEntrance = useSpring({
    opacity: 1,
    transform: "translateY(0);",
    from: { opacity: 0, transform: "translateY(-100px)" },
    config: {
      tension: 800, // 张力，值越大弹簧的速度越快
      friction: 20, // 摩擦力，值越小弹簧的回弹效果越明显
      mass: 3, // 质量，值越大，弹簧越沉，惯性越强
    },
    delay: 800, // 延遲效果
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 檢查 window 是否存在，確保在客戶端執行
      const mediaQuery = window.matchMedia("(orientation: landscape)");

      const handleOrientationChange = (event) => {
        setIsLandscape(event.matches);
      };

      setIsLandscape(mediaQuery.matches); // 初次檢查方向
      mediaQuery.addEventListener("change", handleOrientationChange);

      // 清除監聽器
      return () => {
        mediaQuery.removeEventListener("change", handleOrientationChange);
      };
    }
  }, []);

  return (
    <ResponsiveContainer heightUnit={100} widthUnit={100}>
      <StyledPageWrapper>
        <StyledContentWrapper isLandscape={isLandscape}>
          <ButtonWrapper>
            <AnimatedWrapper style={fadeInEntrance}>
              <a href="#reception">
                <BevelButton
                  size="large"
                  buttonColor={theme.colors.black}
                  textColor={theme.colors.white}
                  buttonText="推門進入"
                  isTablet={true}
                ></BevelButton>
              </a>
            </AnimatedWrapper>
          </ButtonWrapper>
        </StyledContentWrapper>
      </StyledPageWrapper>
    </ResponsiveContainer>
  );
}
