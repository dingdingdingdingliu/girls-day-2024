import styled from "@emotion/styled";
import globalConfig from "@/styles/globalConfig";
import { RxHamburgerMenu } from "react-icons/rx";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  height: 68px;
  background-color: transparent;
  z-index: 10;
  opacity: 1;
  display: ${(props) => (props.isShow ? "block" : "none")};

  @media (max-width: ${globalConfig.mediaQuery}) {
    display: block;
  }
`;

const DesktopIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const MobileIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledHamburgerMenu = styled(RxHamburgerMenu)`
  color: ${(props) => props.theme.colors.grey};
  font-size: 48px;
  margin: 10px 36px 0 0;
  cursor: pointer;

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: 36px;
    margin: 0;
    margin-top: 16px;
    cursor: default;
  }
`;

export default function Hamburger({
  isShow,
  isDesktop,
  setIsMobileNavOpen,
  setIsDesktopNavOpen,
}) {
  const onMobileNavClick = () => setIsMobileNavOpen((pre) => !pre);
  const onDesktopNavClick = () => {
    console.log("hamClick");
    setIsDesktopNavOpen((pre) => !pre);
  };

  return (
    <Wrapper isShow={isShow}>
      {isDesktop && (
        <DesktopIconWrapper>
          <StyledHamburgerMenu onClick={onDesktopNavClick} />
        </DesktopIconWrapper>
      )}
      {!isDesktop && (
        <MobileIconWrapper onClick={onMobileNavClick}>
          <StyledHamburgerMenu />
        </MobileIconWrapper>
      )}
    </Wrapper>
  );
}
