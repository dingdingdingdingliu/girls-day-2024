import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import Image from "next/image";
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

// 卡片資料
const cardData = [
  {
    title: "原住民族女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "全球的殖民歷史帶來「膚色歧視」，在臺灣，呈現華人比東南亞、原住民族優越的偏見，而原住民族女孩面臨「性別」加「族群」兩層歧視，時常以出於善意卻強化偏見的「親善型歧視」出現，例如：隨意邀請原民女孩「唱歌跳舞一段吧」其實是對祭典無知、把女孩當花瓶的邏輯；會讀書的原民女孩被教育體系鼓勵從事與「照顧」相關職業，是來自刻板社會分工。從1980年代，大量原住民女童因「仲介婚姻」或人口販運從部落移往市區，到當代，教育體制為原住民學生設有額外名額或設立原住民專班，從教育培力原住民族女孩。",
  },
  {
    title: "隔代教養家庭女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "「一個爸爸、一個媽媽、小孩」的核心家庭事實上目前僅佔三成，但長期以來，在教育和媒體的反覆強化下，被塑造為「最佳」的家庭型態，而忽略家庭的照顧功能健全才是幸福的重點，造成單親、隔代教養、同志家庭、其他親戚（如姑姑、舅舅）擔任主要照顧者的小孩，基於偏見被貼上「不幸」或「失能家庭」的標籤，鄰居、老師、同學家長擅自給予非預期的「同情」是造成負面的烙印效果，尤其女孩更容易被告誡要聽話、孝順、乖巧，打破這些性別偏見，才能讓女孩們適性發揮。",
  },
  {
    title: "新二代女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "自從臺灣與東南亞多國頻繁婚姻移民後，具歧視意涵的「外籍新娘」一詞已被強調在地生根的「新住民」取代，而「新二代」則專指新住民之子女。在國族偏見下，新二代甚至被部分人認為「不是混血兒」，新二代女孩更同時面對國族和性別歧視，除了面對「妳媽媽是買來的」的無知言論，在學校可能僅因身分就被歸類到問題學生，更能共感母親在人際、工作、家庭關係中被刁難的處境。2016年「新南向政策」後，新二代的語言、文化優勢逐漸被社會及企業重視，尤其成為跨國企業外派的優質人選。",
  },
  {
    title: "女同志學生",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "同志（LGBTQ+）教育和資訊不普及的時代，同志學生經常缺乏自我探索及社會支援，而女同志兼具女性和同志身份，更加邊緣，例如媒體經常以偏概全強調女同志「情殺」、「自殺」的社會事件，或提出「情境式女同志」以否認這種性傾向是常態，都影響大眾對女同志的認知，造成女同志小孩認同之路的阻礙。目前臺灣已有不少同志團體，提供入校宣講及線上資源，也出現公開出櫃的女同志公眾人物，例如首位議員是2018年苗博雅、首批立委是2024年黃捷跟吳沛憶，以及多位藝人出櫃，這些榜樣都對未成年女同志帶來正面影響。",
  },
  {
    title: "農漁村生活的女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "偏鄉學童面對基礎建設、教育資源、交通便利性的環境限制，使有限的教育資源更可能以「重男輕女」邏輯配置，認為女孩不用讀太好的學校，就近唸一唸出去工作——選擇當地產業就好，或就近就業以方便照顧家中老小，偏鄉女孩更容易承受「性別」和「城鄉」交叉歧視，易成為階級複製的犧牲品。而當教育與社福政策投注資源，例如保障名額、計畫優先錄取，學校、社會、家庭陸續重視栽培女孩潛力，偏鄉女孩便有機會靠教育階級翻身。",
  },
];

// 標題文案
const titleCopyWrite =
  "在「展售區」小遊戲中，大家探索了過去與現在的性別平等相關的臺灣人物、事件和地點。隨著時代推移，人、事、地、物及身份的多元性不斷交織出新的性別偏見。現在，讓我們運用同樣敏銳的覺察力，一起瞭解身邊更多值得關注的情境案例，喚醒現實中的覺察力吧！";

// 頁面底層灰色底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.mediumGrey};
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-top: ${(props) => props.theme.spacing.pageTopSpacing};
  }
`;

// 加上背景圖片的TitleSectionWrapper
const StyledTitleSectionWrapper = styled(TitleSectionWrapper)`
  background-image: ${(props) =>
    `linear-gradient(to bottom, 
    ${props.theme.colors.lightGreen} 5%, 
    ${props.theme.colors.white} 85%)`};
`;

// 電腦版底部滿版圖層
const ImageDesktopWrapper = styled.div`
  width: 100%;
  height: 200px;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */
  margin: 68px 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    display: none;
  }
`;

// 手機版底部滿版圖層
const ImageMobileWrapper = styled.div`
  display: none;

  @media (max-width: ${globalConfig.mediaQuery}) {
    display: block;
    width: 100%;
    height: 100px;
    position: relative; /* 必須設置 position relative 以便內部圖片填滿 */
    margin-top: 24px;
  }
`;

// 標題內容區塊元件
export function TitleSection() {
  return (
    <StyledTitleSectionWrapper>
      <TitleSectionInnerWrapper>
        <TitleContentWrapper>
          <GameStoryTitle gameOrder="II" />
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
    </StyledTitleSectionWrapper>
  );
}

export default function SectionVisionStory({ isDesktop }) {
  const theme = useTheme();
  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <StorySectionWrapper>
          <MainSectionWrapper>
            <TitleSection />
            <ContentSectionWrapper>
              {cardData?.map((data, index) => {
                return (
                  <GameStoryCard
                    key={index}
                    labelText={data?.title}
                    imageSrc={data?.imageSrc}
                    copyWrite={data?.copyWrite}
                    labelColor={theme.colors.green}
                    textColor={theme.colors.black}
                  />
                );
              })}
            </ContentSectionWrapper>
          </MainSectionWrapper>
        </StorySectionWrapper>
        <ImageDesktopWrapper>
          <Image
            src="/images/visionImage.png"
            alt="visionImage"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </ImageDesktopWrapper>
      </StyledContentWrapper>
      <ImageMobileWrapper>
        <Image
          src="/images/visionImage.png"
          alt="visionImage"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </ImageMobileWrapper>
    </StyledPageWrapper>
  );
}
