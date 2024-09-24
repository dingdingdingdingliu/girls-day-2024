import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import {
  GirlDayTitle,
  ThemeTitle,
} from "@/components/Common/Index/TitleWithLine";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";

const copyWrite = {
  girlsDayFirst:
    "說到「女孩」，你腦中浮現的畫面是什麼呢？是洋裝、芭比娃娃、蝴蝶結嗎？有沒有大隊接力搶跑道、學生會主席，或玩具車和機器人的想像呢？",
  girlsDaySecond:
    "聯合國號召各國打破性別框架，實踐「重視女孩、投資女孩」的目標，將10月11日訂為「國際女童日」，而身為民主國家的臺灣積極響應，把同日訂為「臺灣女孩日」，在肯定女孩的基礎上看見每個女孩的差異，自信的、內向的、高矮胖瘦的、帥氣的、可愛的、不同文化背景的女孩，都值得培養，都該擁有舞台發揮潛力。",
  themeFirst: "今年臺灣女孩日，將透過「偏見眼鏡行」讓性別偏見一一現形瓦解！",
  themeSecond:
    "本次透過「戲劇體驗工作坊」跟「主題網頁策展」，來認識生活中無處不在的歧視言論和刻板印象來源，並鼓勵女孩「打破偏見」勇敢表達自我，看見看見臺灣女孩的一百種可能！",
};
// 女孩日與主題區塊層
const SubSectionWrapper = styled.div`
  border-radius: 2px;
  padding: 30px 5%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;

  @media (max-width: ${globalConfig.mediaQuery}) {
    flex-direction: column;
    align-items: start;
    padding: 25px;
  }
`;

// 女孩日區塊層
const GirlsDaySectionWrapper = styled(SubSectionWrapper)`
  background-color: ${(props) => props.theme.colors.white};
`;

// 主題區塊層
const ThemeSectionWrapper = styled(SubSectionWrapper)`
  background-image: ${(props) =>
    `linear-gradient(to right, 
    ${props.theme.colors.lightGreen} 0%, 
    ${props.theme.colors.lightOrange} 40%, 
    ${props.theme.colors.lightPink} 80%)`};

  margin-top: 20px;
  position: relative;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-top: 15px;
  }
`;

// 女孩日與主題內容層
const SectionContentWrapper = styled.div`
  max-height: 310px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 0 0 36px;
  word-break: break-all;
  font-size: ${(props) => props.theme.fontSizes[20]};

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    margin: 20px 0 0 0;
    font-size: ${(props) => props.theme.fontSizes[14]};
  }
`;

// 女孩日內容層，135px 為底線標題區域
const GirlsDayContentWrapper = styled(SectionContentWrapper)`
  width: calc(100% - 135px);
`;

// 主題內容層，40% 為留給左側圖片區域，135px 為底線標題區域
const ThemeContentWrapper = styled(SectionContentWrapper)`
  width: calc(60% - 135px);
`;

const AnimatedTitleWrapper = styled(animated.div)`
  width: auto;
`;

const AnimatedContentWrapper = styled(animated.div)`
  width: 100%;
`;

// 圖片顯示層
export const ThemeImageWrapper = styled.div`
  width: 30%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 160px;
    height: 90px;
  }
`;

export function GirlDaySection() {
  const fadeInTitle = useSpring({
    opacity: 1,
    transform: "translateX(0);",
    from: { opacity: 0, transform: "translateX(-20px)" },
    config: { duration: 600 },
    delay: 600, // 延遲效果
  });

  const fadeInContent = useSpring({
    opacity: 1,
    transform: "translateX(0);",
    from: { opacity: 0, transform: "translateX(40px)" },
    config: { duration: 600 },
    delay: 800, // 延遲效果
  });

  return (
    <GirlsDaySectionWrapper>
      <AnimatedTitleWrapper style={fadeInTitle}>
        <GirlDayTitle />
      </AnimatedTitleWrapper>
      <GirlsDayContentWrapper>
        <AnimatedContentWrapper style={fadeInContent}>
          <p>{copyWrite.girlsDayFirst}</p>
          <br />
          <p>{copyWrite.girlsDaySecond}</p>
        </AnimatedContentWrapper>
      </GirlsDayContentWrapper>
    </GirlsDaySectionWrapper>
  );
}

export function ThemeSection() {
  const fadeInTitle = useSpring({
    opacity: 1,
    transform: "translateX(0);",
    from: { opacity: 0, transform: "translateX(-20px)" },
    config: { duration: 600 },
    delay: 1000, // 延遲效果
  });

  const fadeInContent = useSpring({
    opacity: 1,
    transform: "translateX(0);",
    from: { opacity: 0, transform: "translateX(40px)" },
    config: { duration: 600 },
    delay: 1200, // 延遲效果
  });

  return (
    <ThemeSectionWrapper>
      <AnimatedTitleWrapper style={fadeInTitle}>
        <ThemeTitle />
      </AnimatedTitleWrapper>
      <ThemeContentWrapper>
        <AnimatedContentWrapper style={fadeInContent}>
          <p>{copyWrite.themeFirst}</p>
          <br />
          <p>{copyWrite.themeSecond}</p>
        </AnimatedContentWrapper>
      </ThemeContentWrapper>
      <ThemeImageWrapper>
        <ImageWrapper>
          <Image
            src="/images/themeSectionImage.png"
            alt="imageSections"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </ImageWrapper>
      </ThemeImageWrapper>
    </ThemeSectionWrapper>
  );
}
