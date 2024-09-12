import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import globalConfig from "@/styles/globalConfig";
import { RxCross2 } from "react-icons/rx";

const fadeIn = keyframes`
  from {
    max-height: 0;
    opacity: 0;
    transform: translateY(-20px); /* 模擬從上往下展開 */
  }
  to {
    max-height: 900px;
    opacity: 1;
    transform: translateY(0); /* 最後回到原位 */
  }
`;

const fadeOut = keyframes`
  from {
    max-height: 900px;
    opacity: 1;
    transform: translateY(0); /* 初始位置 */
  }
  to {
    max-height: 0;
    opacity: 0;
    transform: translateY(-20px); /* 往上收合 */
  }
`;

const NavCard = styled.div`
  display: none;

  @media (max-width: ${globalConfig.mediaQuery}) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: ${(props) => props.theme.colors.black};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    max-height: ${(props) => (props.isOpen ? "100vh" : "0")};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out
      forwards;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out; /* 增加平滑過渡 */
    pointer-events: auto; // 避免點擊到下層其他點擊事件
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 68px;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledRxCross = styled(RxCross2)`
  color: ${(props) => props.theme.colors.grey};

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: 36px;
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LinkContent = styled.p`
  font-size: ${(props) => props.theme.fontSizes[20]};
  color: ${(props) => props.theme.colors.white};

  &:active {
    color: ${(props) => props.theme.colors.green};
  }
`;

export default function MobileNavCard({ isMobileNavOpen, setIsMobileNavOpen }) {
  const onMobileCloseClick = () => setIsMobileNavOpen((pre) => !pre);

  const handleNavClick = (id) => {
    setIsMobileNavOpen((pre) => !pre);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavCard isOpen={isMobileNavOpen}>
      <IconWrapper onClick={onMobileCloseClick}>
        <StyledRxCross />
      </IconWrapper>
      <LinkWrapper onClick={() => handleNavClick("reception")}>
        <LinkContent>接待櫃檯｜關於女孩日</LinkContent>
      </LinkWrapper>
      <LinkWrapper onClick={() => handleNavClick("vision")}>
        <LinkContent>驗光區｜小遊戲 I</LinkContent>
      </LinkWrapper>
      <LinkWrapper onClick={() => handleNavClick("findObject")}>
        <LinkContent>展售區｜小遊戲 II</LinkContent>
      </LinkWrapper>
      <LinkWrapper onClick={() => handleNavClick("processing")}>
        <LinkContent>加工區｜發展進程</LinkContent>
      </LinkWrapper>
      <LinkWrapper onClick={() => handleNavClick("pickup")}>
        <LinkContent>取件櫃檯｜延伸閱讀</LinkContent>
      </LinkWrapper>
    </NavCard>
  );
}
