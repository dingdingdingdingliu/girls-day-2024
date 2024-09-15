// import { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";
import globalConfig from "@/styles/globalConfig";
import styled from "@emotion/styled";

// import Hamburger from "@/components/Common/Index/Hamburger";
// import MobileNavCard from "@/components/Common/Index/MobileNavCard";
// import DesktopNavCard from "@/components/Common/Index/DesktopNavCard";
// import PageDialog from "@/components/Common/Index/PageDialog";

// import SectionEntrance from "../components/Pages/Index/SectionEntrance";
// import SectionIntro from "../components/Pages/Index/SectionIntro";
// import SectionPromoVideo from "@/components/Pages/Index/SectionPromoVideo";
// import SectionReport from "@/components/Pages/Index/SectionReport";
// import SectionVision from "@/components/Pages/Index/SectionVision";
// import SectionVisionStory from "@/components/Pages/Index/SectionVisionStory";
// import SectionFindObject from "@/components/Pages/Index/SectionFindObject";
// import SectionFindObjectStory from "@/components/Pages/Index/SectionFindObjectStory";
// import SectionTimeLine from "@/components/Pages/Index/SectionTimeLine";
// import SectionGirlImage from "@/components/Pages/Index/SectionGirlImage";
// import SectionPickUp from "@/components/Pages/Index/SectionPickUp";
// import SectionExtended from "@/components/Pages/Index/SectionExtended";
// import Footer from "@/components/Pages/Index/SectionFooter";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-size: ${(props) => props.theme.fontSizes[40]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};

  @media (max-width: ${globalConfig.mediaQuery}) {
    font-size: ${(props) => props.theme.fontSizes[28]};
  }
`;

// export default function Home() {
//   const isDesktopSize = useMediaQuery({ minWidth: globalConfig.mediaQuery });
//   const [isDesktop, setIsDesktop] = useState(true);
//   const [isHamburgerShow, setIsHamburgerShow] = useState(false);
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
//   const [isDesktopNavOpen, setIsDesktopNavOpen] = useState(false);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [dialogData, setDialogData] = useState({});

//   useEffect(() => {
//     setIsDesktop(isDesktopSize);
//   }, [isDesktopSize]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const targetSection = document.querySelector("#show-hamburger-target");
//       const targetSectionTop = targetSection.getBoundingClientRect().top;

//       if (targetSectionTop <= 0) {
//         setIsHamburgerShow(true);
//       } else {
//         setIsHamburgerShow(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div style={{ width: "100vw" }}>
//       <Hamburger
//         isShow={isHamburgerShow}
//         isDesktop={isDesktop}
//         setIsMobileNavOpen={setIsMobileNavOpen}
//         setIsDesktopNavOpen={setIsDesktopNavOpen}
//       />
//       <MobileNavCard
//         isMobileNavOpen={isMobileNavOpen}
//         setIsMobileNavOpen={setIsMobileNavOpen}
//       />
//       <DesktopNavCard
//         isDesktopNavOpen={isDesktopNavOpen}
//         setIsDesktopNavOpen={setIsDesktopNavOpen}
//       />
//       <PageDialog
//         isDesktop={isDesktop}
//         isDialogOpen={isDialogOpen}
//         setIsDialogOpen={setIsDialogOpen}
//         dialogData={dialogData}
//         setDialogData={setDialogData}
//       />
//       <SectionEntrance />
//       <SectionIntro isDesktop={isDesktop} />
//       <SectionPromoVideo />
//       <SectionReport />
//       <SectionVision isDesktop={isDesktop} />
//       <SectionVisionStory />
//       <SectionFindObject isDesktop={isDesktop} />
//       <SectionFindObjectStory />
//       <SectionTimeLine isDesktop={isDesktop} />
//       <SectionGirlImage />
//       <SectionPickUp isDesktop={isDesktop} />
//       <SectionExtended
//         setDialogData={setDialogData}
//         setIsDialogOpen={setIsDialogOpen}
//       />
//       <Footer />
//     </div>
//   );
// }

export default function Home() {
  return <StyledWrapper>Coming Soon...!</StyledWrapper>;
}
