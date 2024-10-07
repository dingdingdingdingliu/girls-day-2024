import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "@emotion/react";
import {
  PageWrapper,
  ContentWrapper,
  ImageWrapper,
} from "@/components/Common/Index/Wrapper";
import {
  StorySectionWrapper,
  MainSectionWrapper,
  ContentSectionWrapper,
  TitleSectionWrapper,
  TitleSectionInnerWrapper,
  TitleContentWrapper,
  TitleCopyWriteWrapper,
  TitleImageDesktopWrapper,
  TitleImageMobileWrapper,
} from "@/components/Common/Index/GameStoryWrapper";
import { GameStoryTitle } from "@/components/Common/Index/TitleWithLine";
import GameStoryCard from "@/components/Common/GameStoryCard";
import FooterCard from "./FooterCard";

// 卡片資料
const cardData = [
  {
    title: "理工科女孩",
    imageSrc: "/images/index/visionGameGirls/science_girl.png",
    imageAlt: "science_girl",
    copyWrite:
      "高中、高職、大學的科系選擇依然浮現「男理工、女人文」的趨勢，理工學院的同儕玩笑例如「那個系女生那麼少，教授一定給分更甜啊」，呈現兩層性別偏見：預設教授是異性戀男性，且是會給女學生不當待遇的老師；女學生取得成就被認為是仰賴男性。支撐這些玩笑話的，是自然科學領域長期受陽剛男性把持，女性難以在其中發展。教育單位和企業都積極扭轉此局勢，例如台積電邀請女員工回母校女校演講、舉辦「台積電女科學家之旅」吸引女孩投入科技業。高衡權、劉家樺（2024）的研究更發現《性平法》對女學生選自然組具正面影響。",
  },
  {
    title: "棉花糖女孩",
    imageSrc: "/images/index/visionGameGirls/marshmallow_girl.png",
    imageAlt: "marshmallow_girl",
    copyWrite:
      "每天打開社群，看到的藝人、網紅、模特大多數是纖細身材，廣告電視過度強化「肥胖＝不健康」的連結。不健康的因素很多，基因、飲食習慣、熬夜、缺乏運動等，然而肥胖卻多了一層汙名，單一審美觀讓棉花糖女孩面臨被排擠、被身材羞辱的人際危機，一天到晚被關心「何時要減肥」，購買服裝時，架上沒有可試穿的尺寸。近年有些服飾品牌開始出現「棉花糖女孩區」，跨國品牌並刻意呈現多元身體的模特──坐著腹部有肉、有副乳、有肥胖紋、有疤痕，都可以是健康好看的身體。",
  },
  {
    title: "外型亮麗的女孩",
    imageSrc: "/images/index/visionGameGirls/beauty_girl.png",
    imageAlt: "beauty_girl",
    copyWrite:
      "社會審美戴著放大鏡檢視女性外貌，但是，對於符合主流審美的「漂亮女生」卻也不是真心肯定，而是藏著「貶低陰柔氣質」的邏輯，總能找到理由進行攻擊。外貌姣好的女孩更容易面對能力被低估、被性化、被蕩婦羞辱的危機，例如，「打扮那麼漂亮一定是花瓶」、「心思都在打扮了，成績怎麼會好」或是「穿那樣被騷擾活該」，這些評論忽略了把自己打理好是一種能力，美感與選擇的能力，也可以通往造型師、彩妝師、服裝設計等專業領域。",
  },
  {
    title: "勇於表現的女孩",
    imageSrc: "/images/index/visionGameGirls/brave_girl.png",
    imageAlt: "brave_girl",
    copyWrite:
      "二元性別觀，盲目地期待男孩表現優秀的陽剛特質，期待女孩表現聽話、察言觀色、好幫手的陰柔氣質，形成矛盾期待——女孩要優秀但不能鋒芒明顯，不能氣焰強過男性。擅於表現的女孩可能被大人「提醒」那樣不討喜，同性格的男孩則被肯定其領導能力，例如英國演員艾瑪華森2014年擔任聯合國世界婦女親善大使時，提及小時候被指責「太強勢」的經驗，然而同樣優秀且勇於表現的男同學未受指責。打破二元期待，才能讓每個孩子發揮天賦。",
  },
];

// Footer卡片資料
const footerCardData = [
  {
    title: "STEAM 教育",
    copyWrite:
      "教育現場仍可見男女分流現象，限縮個人發展，也阻礙社會進步，因此美國國家科學委員會2011年率先推動女孩投入科技業，撼動選系的性別限制，後拓展為STEAM教育（ Science 科學、Technology 科技、Engineering 工程、Art 藝術、Mathematics 數學），改善專業領域長期的陽剛結構，扭轉性別偏見阻礙知識發展，從教育到職場實踐多元。",
  },
  {
    title: "性別職業隔離現象",
    copyWrite:
      "一間公司、一個產業的男女比例，可說明內部性別平等程度嗎？還要看部門跟職位分佈喔。性別職業隔離可以從「垂直」跟「水平」方面檢視，「垂直的」指同一產業內男性多受僱於高職位，女性多落在低職位，主因是培訓、升遷的機會不均；「水平的」指不同產業間有明顯男女人數落差，例如美容美髮業為女性，科技業多為男性，這跟科系分流互為因果。",
  },
  {
    title: "月經貧窮",
    copyWrite:
      "生理用品（如衛生棉、棉條）屬於生活必需品，但目前臺灣稅制使相關用品價格不俗，負擔不起的人面臨健康隱憂，女童更可能受到知識、生理用品、醫療資源不足的多重困境。世界銀行2021年統計發現全球約五億人口正經歷「月經貧窮」，據倡議組織小紅帽2021年的調查，臺灣有9%人曾陷入月經貧窮，現在，場所免費生理用品、學校落實性教育、媒體避免複製「月經污名」，都助於打破惡性循環。",
  },
  {
    title: "容貌焦慮",
    copyWrite:
      "廣告、電視、社群平台「流量至上」的文化，不斷輸出單一審美價值觀，容貌焦慮（面容焦慮症）已普遍存在，使人們自尊心低落甚至影響生活，其中傳播使「父權凝視」無所不在，女性承受比男性更嚴苛的外貌檢視、青少女比成年人更易受他人評價而動搖自我認知，因此培養「媒體識讀」來選擇性吸收資訊，進而改變廣告和媒體裡的性別偏見，有助提升整體心理健康。",
  },
];

// 標題文案
const titleCopyWrite =
  "在「驗光室」小遊戲中，我們不難發現帶有偏見的言語仍存於日常生活中。那麼，生活中又有哪些正在發生的偏見情境呢？一起來了解看看吧！";

// 頁面底層灰色底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.mediumGrey};
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;
  margin-bottom: 130px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-top: ${(props) => props.theme.spacing.pageTopSpacing};
    margin-bottom: 50px;
  }
`;

// 內容完整區塊層，含圖片顯示層與主要內容層
const StyledStorySectionWrapper = styled(StorySectionWrapper)`
  display: flex;
  flex-direction: column;
  border-top: 6px solid black;

  @media (max-width: ${globalConfig.mediaQuery}) {
    border-top: 4px solid black;
  }
`;

// 加上背景圖片的TitleSectionWrapper
const StyledTitleSectionWrapper = styled(TitleSectionWrapper)`
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightPink} 5%, 
    ${props.theme.colors.white} 85%)`};
`;

// 底部卡片層
const FooterSectionWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0px 40px 56px;
  display: grid;
  grid-template-columns: repeat(${footerCardData.length}, minmax(20%, 1fr));
  gap: 24px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    background-color: ${(props) => props.theme.colors.mediumGrey};
    grid-template-columns: 1fr;
    padding: 0;
    padding-top: 16px;
  }
`;

const AnimatedTitleSection = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

// 標題內容區塊元件
export function TitleSection({ inView }) {
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1500 },
    delay: 600, // 延遲效果
  });

  return (
    <StyledTitleSectionWrapper>
      <AnimatedTitleSection style={fadeIn}>
        <TitleSectionInnerWrapper>
          <TitleContentWrapper>
            <GameStoryTitle gameOrder="I" />
            <TitleImageMobileWrapper>
              <ImageWrapper>
                <Image
                  src="/images/index/vision_game_intro.png"
                  alt="vision_game_intro"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </ImageWrapper>
            </TitleImageMobileWrapper>
          </TitleContentWrapper>
          <TitleCopyWriteWrapper>{titleCopyWrite}</TitleCopyWriteWrapper>
          <TitleImageDesktopWrapper>
            <ImageWrapper>
              <Image
                src="/images/index/vision_game_intro.png"
                alt="vision_game_intro"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </ImageWrapper>
          </TitleImageDesktopWrapper>
        </TitleSectionInnerWrapper>
      </AnimatedTitleSection>
    </StyledTitleSectionWrapper>
  );
}

export default function SectionVisionStory() {
  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <StyledPageWrapper ref={ref}>
      <StyledContentWrapper>
        <StyledStorySectionWrapper>
          <MainSectionWrapper>
            <TitleSection inView={inView} />
            <ContentSectionWrapper>
              {cardData?.map((data, index) => {
                return (
                  <GameStoryCard
                    key={index}
                    id={index + 1}
                    labelText={data?.title}
                    imageSrc={data?.imageSrc}
                    imageAlt={data?.imageAlt}
                    copyWrite={data?.copyWrite}
                    labelColor={theme.colors.pink}
                    textColor={theme.colors.white}
                  />
                );
              })}
            </ContentSectionWrapper>
          </MainSectionWrapper>
          <FooterSectionWrapper>
            {footerCardData?.map((cardData, index) => {
              return (
                <FooterCard
                  key={index}
                  title={cardData.title}
                  copyWrite={cardData.copyWrite}
                  count={index + 1}
                />
              );
            })}
          </FooterSectionWrapper>
        </StyledStorySectionWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
