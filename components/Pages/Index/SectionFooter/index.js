import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { PageWrapper, ContentWrapper } from "@/components/Common/Index/Wrapper";

// 頁面底層底色延展
const StyledPageWrapper = styled(PageWrapper)`
  background-color: ${(props) => props.theme.colors.mediumGrey};
  position: relative;
`;

// 頁面內層，上下區塊間距由此層設定
const StyledContentWrapper = styled(ContentWrapper)`
  padding: 60px 0;

  @media (max-width: ${globalConfig.mediaQuery}) {
    padding: 48px 0;
  }
`;

const LogosWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${globalConfig.sliderCardContentLimit}) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  @media (max-width: ${globalConfig.sliderCardContentLimit}) {
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

const LogoWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media (max-width: ${globalConfig.sliderCardContentLimit}) {
    width: 90%;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 24px 0;
  }
`;

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 15px;
  letter-spacing: 1px;
  white-space: nowrap;

  @media (max-width: ${globalConfig.sliderTablet}) {
    font-size: ${(props) => props.theme.fontSizes[18]};
  }

  @media (max-width: ${globalConfig.sliderCardContentLimit}) {
    margin: 0 36px 0 0;
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[16]};
    margin: 0 24px 0 0;
  }
`;

const FakeTitle = styled.p`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSizes[20]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: transparent;
  margin-bottom: 15px;
  white-space: nowrap;

  @media (max-width: ${globalConfig.sliderCardContentLimit}) {
    display: none;
  }
`;

// 圖片顯示層
const LogoImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;

  @media (max-width: ${globalConfig.sliderTablet}) {
    height: 28px;
  }

  @media (max-width: ${globalConfig.mediaQuery}) {
    height: 32px;
  }
`;

function Organizer() {
  return (
    <LogoWrapper>
      <Title>主辦單位</Title>
      <LogoImagesWrapper>
        <a
          href="https://www.sfaa.gov.tw/SFAA/default.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImg src="/images/logos/welfare-logo.png" alt="welfare" />
          <LogoImg
            src="/images/logos/MOHW.png"
            alt="MOHW"
            style={{ marginLeft: "24px" }}
          />
        </a>
      </LogoImagesWrapper>
    </LogoWrapper>
  );
}

function CoOrganizer() {
  return (
    <LogoWrapper>
      <Title>承辦單位</Title>
      <LogoImagesWrapper>
        <a
          href="https://www.clubon.space/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImg src="/images/logos/clubon.png" alt="clubon" />
        </a>
      </LogoImagesWrapper>
    </LogoWrapper>
  );
}

function Consultant() {
  return (
    <LogoWrapper>
      <Title>議題顧問</Title>
      <LogoImagesWrapper>
        <a
          href="https://www.goh.org.tw/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImg src="/images/logos/gohTaiwanLogo.png" alt="gohTaiwanLogo" />
        </a>
      </LogoImagesWrapper>
    </LogoWrapper>
  );
}

function Partner() {
  return (
    <LogoWrapper>
      <FakeTitle>合作夥伴</FakeTitle>
      <LogoImagesWrapper>
        <LogoImg
          src="/images/logos/charity-lottery.png"
          alt="charity-lottery"
        />
        <LogoImg
          src="/images/logos/child-welfare.png"
          alt="child-welfare"
          style={{ marginLeft: "24px" }}
        />
      </LogoImagesWrapper>
    </LogoWrapper>
  );
}

function DramaPartner() {
  return (
    <LogoWrapper>
      <Title>戲劇合作</Title>
      <LogoImagesWrapper>
        <a
          href="https://www.facebook.com/thinkfeelmove.tw/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImg src="/images/logos/thinkfeelmove.png" alt="thinkfeelmove" />
        </a>
      </LogoImagesWrapper>
    </LogoWrapper>
  );
}

export default function Footer() {
  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <LogosWrapper>
          <Organizer />
          <CoOrganizer />
          <DramaPartner />
          <Consultant />
          <Partner />
        </LogosWrapper>
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
