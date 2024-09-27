import styled from "@emotion/styled";

const LogosWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0 28px 0;
  padding: 0 10px;
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
`;

function Organizer() {
  return (
    <LogoWrapper>
      <Title>主辦單位</Title>
      <LogoImagesWrapper>
        <LogoImg src="/images/logos/Welfare.png" alt="Welfare" />
        <LogoImg
          src="/images/logos/MOHW.png"
          alt="MOHW"
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
        <LogoImg src="/images/logos/gohLogo.svg" alt="gohLogo" />
      </LogoImagesWrapper>
    </LogoWrapper>
  );
}

function Partner() {
  return (
    <LogoWrapper>
      <Title>廣告</Title>
      <LogoImagesWrapper>
        <LogoImg src="/images/logos/logoOne.png" alt="logoOne" />
        <LogoImg
          src="/images/logos/logoTwo.png"
          alt="logoTwo"
          style={{ marginLeft: "10px" }}
        />
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
      <Partner />
    </LogosWrapper>
  );
}
