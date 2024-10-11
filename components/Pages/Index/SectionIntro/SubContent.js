import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import {
  GirlDayTitle,
  ThemeTitle,
} from "@/components/Common/Index/TitleWithLine";
import { ImageWrapper } from "@/components/Common/Index/Wrapper";
import Comments from "@/components/Common/Comments";
import useWebPImage from "@/hooks/useWebPImage";

const introThemeImage = {
  imagePng: "/images/index/intro_theme.png",
  imageWebP: "/images/index/intro_theme.webp",
};

const copyWrite = {
  girlsDayFirst:
    "說到「女孩」，你腦中浮現什麼呢？是芭比、蝴蝶結？也有大隊接力搶跑道、學生會主席、機器人嗎？",
  girlsDaySecond:
    "聯合國號召各國重視、投資女孩，將10月11日訂為「國際女童日」，臺灣響應此訂為「臺灣女孩日」，自信、內向、高矮胖瘦、帥氣、可愛、說不同語言的女孩們，都值得受到栽培發揮潛力。",
  girlsDayThird: "女孩兼具「女性」和「兒童」身分，聯合國關於女孩的公約",
  girlsDayForth:
    "有兩部，臺灣都已加入。行政院列出參與決策、受教權、性健康、學科性別隔離、性別暴力等重點努力方向，看見臺灣女孩的一百種可能，用培力讓偏見現形瓦解！",
  comments: {
    text: "臺灣有國內法律效力的女孩權益相關公約，包含2011年生效的《消除對婦女一切形式歧視公約》（CEDAW）和2014年生效的《兒童權利公約》（CRC）。",
  },
  themeFirst:
    "2024 年臺灣女孩日，將透過《偏見眼鏡行》中「戲劇體驗工作坊」和「主題網頁策展」兩大內容，來認識生活中無處不在的偏見言論和刻板印象來源，並鼓勵女孩「打破偏見」學習勇敢表達自我，突破限制！",
};

// 女孩日與主題區塊層
const SubSectionWrapper = styled.div`
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;

  @media (max-width: ${globalConfig.mediaQuery}) {
    flex-direction: column;
    align-items: start;
  }
`;

// 女孩日區塊層
const GirlsDaySectionWrapper = styled(SubSectionWrapper)`
  background-color: ${(props) => props.theme.colors.white};
  padding: 30px 5%;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 25px;
  }
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
  padding: 30px 5%;
  padding-right: 0px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 25px;
  }
`;

// 女孩日與主題內容層
const SectionContentWrapper = styled.div`
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
  width: calc(55% - 135px);
`;

const AnimatedTitleWrapper = styled(animated.div)`
  width: auto;
`;

const AnimatedContentWrapper = styled(animated.div)`
  width: 100%;
`;

// 圖片顯示層
export const ThemeImageWrapper = styled.div`
  width: 35%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 125px;
    height: 90px;
  }
`;

export function GirlDaySection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeInTitle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-20px)",
    config: { duration: 600 },
    delay: 400, // 延遲效果
  });

  const fadeInContent = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(40px)",
    config: { duration: 600 },
    delay: 600, // 延遲效果
  });

  return (
    <GirlsDaySectionWrapper ref={ref}>
      <AnimatedTitleWrapper style={fadeInTitle}>
        <GirlDayTitle />
      </AnimatedTitleWrapper>
      <GirlsDayContentWrapper>
        <AnimatedContentWrapper style={fadeInContent}>
          <p>{copyWrite.girlsDayFirst}</p>
          <br />
          <p>{copyWrite.girlsDaySecond}</p>
          <br />
          <p>
            <span>{copyWrite.girlsDayThird}</span>
            <Comments comments={copyWrite.comments} />
            <span>{copyWrite.girlsDayForth}</span>
          </p>
        </AnimatedContentWrapper>
      </GirlsDayContentWrapper>
    </GirlsDaySectionWrapper>
  );
}

export function ThemeSection() {
  const imageUrl = useWebPImage(
    introThemeImage?.imagePng,
    introThemeImage?.imageWebP,
  );
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeInTitle = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-20px)",
    config: { duration: 600 },
    delay: 400, // 延遲效果
  });

  const fadeInContent = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(40px)",
    config: { duration: 600 },
    delay: 600, // 延遲效果
  });

  return (
    <ThemeSectionWrapper ref={ref}>
      <AnimatedTitleWrapper style={fadeInTitle}>
        <ThemeTitle />
      </AnimatedTitleWrapper>
      <ThemeContentWrapper>
        <AnimatedContentWrapper style={fadeInContent}>
          <p>{copyWrite.themeFirst}</p>
        </AnimatedContentWrapper>
      </ThemeContentWrapper>
      <ThemeImageWrapper>
        <ImageWrapper>
          <Image
            src={imageUrl}
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
