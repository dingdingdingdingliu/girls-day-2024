import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import globalConfig from "@/styles/globalConfig";

import SectionEntrance from "../components/Pages/Index/SectionEntrance";
import SectionIntro from "../components/Pages/Index/SectionIntro";
import SectionPromoVideo from "@/components/Pages/Index/SectionPromoVideo";
import SectionReport from "@/components/Pages/Index/SectionReport";
import SectionVision from "@/components/Pages/Index/SectionVision";
import SectionVisionStory from "@/components/Pages/Index/SectionVisionStory";
import SectionFindObject from "@/components/Pages/Index/SectionFindObject";
import SectionFindObjectStory from "@/components/Pages/Index/SectionFindObjectStory";
import SectionTimeLine from "@/components/Pages/Index/SectionTimeLine";
import SectionGirlImage from "@/components/Pages/Index/SectionGirlImage";
import SectionPickUp from "@/components/Pages/Index/SectionPickUp";
import SectionExtended from "@/components/Pages/Index/SectionExtended";
import Footer from "@/components/Pages/Index/SectionFooter";

export default function Home() {
  const isDesktopSize = useMediaQuery({ minWidth: globalConfig.mediaQuery });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(isDesktopSize);
  }, [isDesktopSize]);

  return (
    <div style={{ width: "100vw" }}>
      <SectionEntrance />
      <SectionIntro isDesktop={isDesktop} />
      <SectionPromoVideo />
      <SectionReport />
      <SectionVision isDesktop={isDesktop} />
      <SectionVisionStory />
      <SectionFindObject isDesktop={isDesktop} />
      <SectionFindObjectStory />
      <SectionTimeLine isDesktop={isDesktop} />
      <SectionGirlImage />
      <SectionPickUp isDesktop={isDesktop} />
      <SectionExtended />
      <Footer />
    </div>
  );
}
