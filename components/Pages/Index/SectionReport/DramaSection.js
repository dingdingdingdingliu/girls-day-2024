import styled from "@emotion/styled";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { DramaTitle } from "@/components/Common/Index/TitleWithLine";
import {
  SectionWrapper,
  IntroWrapper,
  CopyWriteWrapper,
  ActionWrapper,
} from "./Components";
import {
  AbsoluteButtonWrapper,
  SingleLeftBevelLabel,
} from "@/components/Common/Label/SingleLeftBevelLabel";
import globalConfig from "@/styles/globalConfig";

const copyWrite = {
  dramaContent:
    "今年女孩日特別與由資深應用戲劇跟公⺠教育工作者創立的「思樂樂劇場」合作，辦理《偏見眼鏡行》戲劇體驗工作坊。透過「戲劇演出」＋「情境互動」，引導觀眾主動參與討論和學習。沒能參與實體活動也別擔心！我們整理了線上引導教材，歡迎點擊了解更多資訊！",
};

const DramaActionWrapper = styled(ActionWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (max-width: ${globalConfig.mediaQuery}) {
    margin-top: 32px;
  }
`;

const DramaContentWrapper = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`;

const DramaButtonWrapper = styled.div`
  width: 98%;
  height: 75px;
  position: relative;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    height: 68px;
  }
`;

const DramaCopyWriteWrapper = styled(CopyWriteWrapper)`
  width: 65%;
  margin: 0 0 0 24px;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    margin: 0;
  }
`;

const StyledImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  min-width: 200px;
  min-height: 200px;
  position: relative; /* 必須設置 position relative 以便內部圖片填滿 */

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    margin-bottom: 16px;
  }
`;

function DramaIntro() {
  return (
    <IntroWrapper>
      <DramaTitle />
    </IntroWrapper>
  );
}

function DramaAction() {
  const theme = useTheme();
  return (
    <DramaActionWrapper>
      <DramaContentWrapper>
        <StyledImageWrapper>
          <Image
            src="/images/chiikawa.jpeg"
            alt="chiikawa"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </StyledImageWrapper>
        <DramaCopyWriteWrapper>
          <p>{copyWrite.dramaContent}</p>
        </DramaCopyWriteWrapper>
      </DramaContentWrapper>
      <DramaButtonWrapper>
        <AbsoluteButtonWrapper>
          <SingleLeftBevelLabel
            labelText="點擊下載"
            isPointer={true}
            onClick={() => {}}
            labelColor={theme.colors.pink}
            fontcolor={theme.colors.white}
            isDownLoad={true}
          />
        </AbsoluteButtonWrapper>
      </DramaButtonWrapper>
    </DramaActionWrapper>
  );
}

export default function DramaSection() {
  return (
    <SectionWrapper>
      <DramaIntro />
      <DramaAction />
    </SectionWrapper>
  );
}
