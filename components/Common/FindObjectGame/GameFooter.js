import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

const LogosWrapper = styled.div`
  width: 360px;
  min-width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  padding: 20px 0;

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 80%;
    min-width: 270px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes[12]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 6px;
  white-space: nowrap;

  @media (max-width: ${globalConfig.findObjectGame}) {
    font-size: ${(props) => props.theme.fontSizes[10]};
  }
`;

// 圖片顯示層
const LogoImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 16px;
  width: auto;
  @media (max-width: ${globalConfig.findObjectGame}) {
    height: 12px;
  }
`;

function Organizer() {
  return (
    <LogoWrapper>
      <Title>主辦單位</Title>
      <LogoImagesWrapper>
        <LogoImg src="/images/logos/welfare-logo.png" alt="welfare" />
        <LogoImg
          src="/images/logos/MOHW.png"
          alt="MOHW"
          style={{ marginLeft: "10px" }}
        />
        <LogoImg
          src="/images/logos/charity-lottery.png"
          alt="charity-lottery"
          style={{ marginLeft: "10px" }}
        />
        <LogoImg
          src="/images/logos/child-welfare.png"
          alt="child-welfare"
          style={{ marginLeft: "10px" }}
        />
      </LogoImagesWrapper>
    </LogoWrapper>
  );
}

function CoOrganizer() {
  return (
    <LogoWrapper>
      <Title>承辦單位</Title>
      <LogoImagesWrapper>
        <LogoImg src="/images/logos/clubon.png" alt="clubon" />
      </LogoImagesWrapper>
    </LogoWrapper>
  );
}

function Consultant() {
  return (
    <LogoWrapper>
      <Title>議題顧問</Title>
      <LogoImagesWrapper>
        <LogoImg src="/images/logos/gohTaiwanLogo.png" alt="gohTaiwanLogo" />
      </LogoImagesWrapper>
    </LogoWrapper>
  );
}

export default function Footer() {
  return (
    <LogosWrapper>
      <Organizer />
      <CoOrganizer />
      <Consultant />
    </LogosWrapper>
  );
}
