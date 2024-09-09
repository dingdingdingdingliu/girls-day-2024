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

// 卡片資料
const cardData = [
  {
    title: "新二代女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "自從台灣與東南亞多國頻繁婚姻移民後，具歧視意涵的「外籍新娘」一詞已被強調在地生根的「新住民」取代，而「新二代」則專指新住民之子女。過去在國族偏見下，臺灣社會對東南亞文化的輕視甚至歧視，新二代甚至被部分人認為「不是混血兒」，掩蓋其跨文化實力。新二代女孩更同時面對國族和性別歧視，除了面對「妳媽媽是買來的」的無知言論，在學校可能僅因身分就被歸類到問題學生，更能共感母親在人際、工作、家庭關係中被刁難的處境。新二代的優勢自2016年「新南向政策」後逐漸被社會重視。",
  },
  {
    title: "女同志學生",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "同志（LGBTQ+）教育和資訊不普及的時代，同志學生經常缺乏自我探索及社會支援，而女同志兼具女性和同志身份，更加邊緣，例如媒體經常以偏概全強調女同志「情殺」、「自殺」的社會事件，或提出「情境式女同志」以否認這種性傾向是常態，都影響大眾對女同志的認知，造成女同志小孩認同之路的阻礙。1994年北一女中學生殉情案件，遺書便寫著「在社會生存的本質就不適合我們」，時任校長丁亞雯受訪時更說出「北一女沒有同性戀」的違背事實言論，呈現社會對未成年女同志的無知與害怕。",
  },
  {
    title: "性私密影像受害者",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "「性暴力」概念過去以肢體傷害為主，數位科技則提供新型態的犯罪媒介——影像，性暴力受害者常被「譴責被害者」的迷思所害，例如「不拍就不會外流」的說法，卻說不清為何女性必須用壓制自我展現的空間換取安全，更避而不談外流的人才是犯罪者，而數位傳播性使傷害迅速擴大，2022年鏡週刊記者蔣宜婷發表「青春煉獄　網路獵騙性私密影像事件簿」系列報導，揭露了犯罪集團有系統透過社交媒體對青少女的性剝削，例如，逐步誘導小網紅拍攝性私密影像、散播偷拍影像、販售影片社團等犯罪型態，上述對受害者的歧視也是助長這類犯罪的幫凶",
  },
  {
    title: "未成年意外懷孕",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "在未成年情侶非預期懷孕並決定生產的狀態，女方比男方遭受更多的身心壓力，包含社會對未婚懷孕和單親媽媽的歧視、對墮胎的污名、教育斷層危機、母職的壓力等，2021年獨立媒體報導者的文章「我有小孩，我想念書：中學生小媽媽與自我實現的距離」指出小媽媽生育後決定留養小孩的比例已破九成，但因為「生育」和「養育」責任經常被綁定，在校園及原生家庭支持不夠的情況下，小媽媽比小爸爸回到校園完成學業的難度高許多，也因為上述歧視，讓小媽媽們選擇以其他理由休學，隱藏真實狀態而無法獲取正式資源，成為統計上的黑數，而教育程度低更影響就業選擇與經濟能力。",
  },
  {
    title: "農漁村生活的女孩",
    imageSrc: "/images/storyGirlImage.png",
    copyWrite:
      "偏鄉學童面對著基礎建設、教育資源、交通便利性都不高的環境限制，造成有限的教育資源更可能以重男輕女邏輯配置，認為女孩不用讀太好的學校，近的學校唸一唸、趕快出去工作——從當地現有產業選擇就好，或者，就近就業以方便照顧家中老小。整體而言女孩更容易承受「性別」和「城鄉」交叉歧視的後果，成為階級複製的犧牲品，除非少數學科表現優異且家庭願意付出更多教育成本的女孩，才有機會靠教育階級翻身。",
  },
];

// 標題文案
const titleCopyWrite =
  "覺察不同情境的歧視覺察不同情境的歧視覺察不同情境的歧視覺察不同情境的歧視覺察不同情境的歧視覺察不同情境的歧視覺察不同情境的歧視覺察不同情境的歧視覺察不同情境的歧視";

// 頁面底層灰色底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.grey};
`;

// 頁面內層
const StyledContentWrapper = styled(ContentWrapper)`
  position: relative;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-top: ${(props) => props.theme.spacing.pageTopSpacing};
  }
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
    <TitleSectionWrapper>
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
    </TitleSectionWrapper>
  );
}

export default function SectionVisionStory({ isDesktop }) {
  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <StorySectionWrapper>
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
