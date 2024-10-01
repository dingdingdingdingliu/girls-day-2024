import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { RxCross2 } from "react-icons/rx";

// 覆蓋層
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  pointer-events: auto; /* 覆蓋層本身阻止點擊 */

  @media (max-width: ${globalConfig.mediaQuery}) {
    display: none;
  }
`;

// 1/4 區塊
const DesktopNavWrapper = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: start;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: end;
  align-items: center;
`;

const StyledRxCross = styled(RxCross2)`
  color: ${(props) => props.theme.colors.grey};
  cursor: pointer;
  font-size: 36px;
  margin-right: 24px;
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
  font-size: ${(props) => props.theme.fontSizes[22]};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    color: ${(props) => props.theme.colors.green};
  }

  &:active {
    color: ${(props) => props.theme.colors.green};
  }
`;

export default function DesktopNavCard({
  isDesktopNavOpen,
  setIsDesktopNavOpen,
}) {
  const onDesktopCloseClick = () => setIsDesktopNavOpen((pre) => !pre);

  const handleNavClick = (id) => {
    setIsDesktopNavOpen((pre) => !pre);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Overlay isOpen={isDesktopNavOpen}>
      <DesktopNavWrapper>
        <IconWrapper>
          <StyledRxCross onClick={() => onDesktopCloseClick()} />
        </IconWrapper>
        <LinkWrapper onClick={() => handleNavClick("reception")}>
          <LinkContent>接待櫃檯｜關於女孩日</LinkContent>
        </LinkWrapper>
        <LinkWrapper onClick={() => handleNavClick("vision")}>
          <LinkContent>驗光室｜小遊戲 I</LinkContent>
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
      </DesktopNavWrapper>
    </Overlay>
  );
}
