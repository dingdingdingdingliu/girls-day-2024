import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
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
    title: "原住民族女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "族群間偏見來自全球的殖民歷史，形塑白人優越迷思，把人按「膚色」淺到深排優劣，在臺灣則呈現華人比東南亞、原住民族優越的偏見，進而無意識地低估非華人的文化、語言、信仰，生活中經常以「親善型歧視」出現，出於善意卻強化刻板印象，例如：一味強調原民女孩外貌姣好，隱含「女孩只要好看就好」的貶抑邏輯；隨意對原民女孩提出「來唱歌跳舞一段吧」的邀請，其實是對祭典無知、把女性當花瓶的邏輯；會讀書的原民女孩更被鼓勵從事護理、教育、社工等職，背後有著職業的刻板印象，加上女性要承擔「照顧部落責任」的社會性別角色。",
  },
  {
    title: "隔代教養家庭的女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "「一個爸爸、一個媽媽、小孩」的核心家庭事實上目前僅佔三成，但長期以來，在教育和媒體的反覆強化下，被塑造為「最佳」的家庭型態，而忽略家庭的照顧功能健全才是幸福的重點，造成單親、隔代教養、同志家庭、其他親戚（如姑姑、舅舅）擔任主要照顧者的小孩，基於偏見被貼上「不幸」或「失能家庭」的標籤，鄰居、老師、同學家長擅自給予非預期的「同情」是造成負面的烙印效果，尤其女孩更容易被告誡要聽話、孝順、乖巧，成為開發自我的犧牲者，降低其階級翻轉的機會。",
  },
  {
    title: "外型突出的女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "「厭女」是一種貶抑陰柔特質的思維邏輯，厭女文化對女性的外貌樹立許多規範，要瘦但不能不健康、要白但不能靠化妝、不行醜但美又會被嫌棄⋯⋯等，諸多矛盾的規範同時存在，針對不同外貌條件總能找到理由進行攻擊，例如，泡芙女孩面臨被排擠、身材羞辱的危機，而外貌姣好的女孩則面對被性化、被蕩婦羞辱的危機，攻擊外貌的言論把「女性外貌」當作她唯一價值並進行攻擊，尤其對青少女的自我認知過程產生極大影響。",
  },
  {
    title: "勇於表現的女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "社會文化期待女性表現岀聽話、察言觀色、等待邀請的陰柔氣質，女孩要優秀，但不能鋒芒明顯，要擔任好陪襯的角色，因此積極表現的女孩可能被大人「提醒」表現得太「強勢」會有不好後果、會不討喜，同樣性格的男孩則容易被肯定其領導能力，例如競選學生會長時，男同學會長搭配女同學副會長，不合宜且二元對立的性別偏見，讓女孩的領導潛力反成為限制，未能好好培養",
  },
];

// Footer卡片資料
const footerCardData = [
  {
    title: "STEAM 教育",
    copyWrite:
      "常見的「男理工，女人文」的二元分流現象，限縮個人發展，間接阻礙社會進步幅度，因此美國國家科學委員會2011年率先推出「STEM教育」推動女孩投入科技領域來打破選擇科系、職業的限制，後拓展為STEAM，五個縮寫分別對應 Science 科學、Technology 科技、Engineering 工程、Art 藝術、Mathematics 數學五大領域，扭轉選擇類組、科系時性別刻板印象的不良影響，讓每個孩子有機會適才適性發展，也從教育到職場產生改變，促使各領域發展多元友善環境。",
  },
  {
    title: "月經貧窮",
    copyWrite:
      "生理用品（如衛生棉、棉條、月亮杯等）是多數生理女性的日常必需品，但目前台灣稅制仍未將生理用品歸類為衛生紙之類的日用品，而是課徵商品增值稅、營業稅等，使生理用品價格不低，造成經濟負擔不起的人因此面臨健康隱憂，尤其資源不夠的女童，面臨性教育缺乏、疾病感染、醫療資源不足的多重困境。世界銀行2021年統計全球高達約五億人口正在經歷月經貧窮，而根據「小紅帽」的調查，臺灣有9%的人曾陷入月經貧窮，從學校及公部門單位開始實施提供免費生理用品、校園落實性教育、大眾媒體的月經教育，都是打破惡性循環的方式。",
  },
  {
    title: "容貌焦慮",
    copyWrite:
      "從廣告、媒體、電影戲劇，到數位社群「流量至上」的文化，不斷輸出單一的審美價值觀，彷彿符合某種條件才是好的身體，容貌焦慮（面容焦慮症）已成為普遍的心理健康問題，人們自尊心低落甚至影響日常生活，其中女性、青少年的負面影響更大，背後是社會文化因素。除了更容易因非主流外貌成為霸凌、嘲弄的對象，傳播媒體裡的「父權凝視」無所不在，女性承受比男性更嚴苛的外貌檢視、青少女比成年人更易受他人評價而動搖自我認知，因此女孩是容貌焦慮議題的脆弱群體。",
  },
  {
    title: "STEAM 教育",
    copyWrite:
      "常見的「男理工，女人文」的二元分流現象，限縮個人發展，間接阻礙社會進步幅度，因此美國國家科學委員會2011年率先推出「STEM教育」推動女孩投入科技領域來打破選擇科系、職業的限制，後拓展為STEAM，五個縮寫分別對應 Science 科學、Technology 科技、Engineering 工程、Art 藝術、Mathematics 數學五大領域，扭轉選擇類組、科系時性別刻板印象的不良影響，讓每個孩子有機會適才適性發展，也從教育到職場產生改變，促使各領域發展多元友善環境。",
  },
];

// 標題文案
const titleCopyWrite =
  "延伸「女孩面臨的偏見情境」延伸「女孩面臨的偏見情境」延伸「女孩面臨的偏見情境」延伸「女孩面臨的偏見情境」延伸「女孩面臨的偏見情境」延伸「女孩面臨的偏見情境」延伸「女孩面臨的偏見情境」";

// 頁面底層灰色底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.grey};
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
    background-color: ${(props) => props.theme.colors.grey};
    grid-template-columns: 1fr;
    padding: 0;
    padding-top: 16px;
  }
`;

// 標題內容區塊元件
export function TitleSection() {
  return (
    <TitleSectionWrapper>
      <TitleSectionInnerWrapper>
        <TitleContentWrapper>
          <GameStoryTitle gameOrder="I" />
          <TitleImageMobileWrapper>
            <ImageWrapper>
              <Image
                src="/images/visionImage.png"
                alt="visionImage"
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
              src="/images/visionImage.png"
              alt="visionImage"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </ImageWrapper>
        </TitleImageDesktopWrapper>
      </TitleSectionInnerWrapper>
    </TitleSectionWrapper>
  );
}

export default function SectionVisionStory({ isDesktop }) {
  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <StyledStorySectionWrapper>
          <MainSectionWrapper>
            <TitleSection />
            <ContentSectionWrapper>
              {cardData.map((data, index) => {
                return (
                  <GameStoryCard
                    key={index}
                    labelText={data?.title}
                    imageSrc={data?.imageSrc}
                    copyWrite={data?.copyWrite}
                  />
                );
              })}
            </ContentSectionWrapper>
          </MainSectionWrapper>
          <FooterSectionWrapper>
            {footerCardData.map((cardData, index) => {
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
