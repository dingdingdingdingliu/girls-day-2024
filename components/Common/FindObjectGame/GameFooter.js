import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";

const LogosWrapper = styled.div`
  width: 400px;
  min-width: 400px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 28px 0;
  overflow: hidden;

  @media (max-width: ${globalConfig.findObjectGame}) {
    width: 290px;
    min-width: 290px;
    height: 50px;
    min-height: 50px;
    margin-top: 0;
  }

  @media (max-width: ${globalConfig.mobile}) {
    width: 85%;
    min-width: 290px;
    height: 50px;
    min-height: 50px;
    margin-top: 0;
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
  margin-bottom: 10px;
  white-space: nowrap;

  @media (max-width: ${globalConfig.findObjectGame}) {
    margin-bottom: 8px;
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
  height: 20px;
  width: auto;

  @media (max-width: ${globalConfig.findObjectGame}) {
    height: 14px;
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
          style={{ marginLeft: "8px" }}
        />
        <LogoImg
          src="/images/logos/charity-lottery.png"
          alt="charity-lottery"
          style={{ marginLeft: "8px" }}
        />
        <LogoImg
          src="/images/logos/child-welfare.png"
          alt="child-welfare"
          style={{ marginLeft: "8px" }}
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
