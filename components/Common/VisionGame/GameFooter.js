import styled from "@emotion/styled";

const LogosWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 28px 0;
  padding: 0 10px;
  overflow: hidden;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes[10]};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 10px;
  white-space: nowrap;
`;

// 圖片顯示層
const LogoImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 18px;
  width: auto;
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
