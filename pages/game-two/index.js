// import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import globalConfig from "@/styles/globalConfig";
import {
  GamePageWrapper,
  GameContentWrapper,
} from "@/components/Common/FindObjectGame/WrapperComponent";
import { DesktopObjectList } from "@/components/Pages/FindObjectGame/Index/ObjectList";
import GameStartDialog from "@/components/Common/FindObjectGame/GameStartDialog";
import GameResultDialog from "@/components/Common/FindObjectGame/GameResultDialog";
import MainGameSection from "@/components/Pages/FindObjectGame/Index/MainGameSection";

export default function FindObjectGame() {
  const isDesktopSize = useMediaQuery({
    minWidth: globalConfig.findObjectGame,
  });
  const [totalScore, setTotalScore] = useState(0);
  const [isShowResult, setIsShowResult] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isClickIdArray, setIsClickIdArray] = useState([]);

  useEffect(() => {
    setIsDesktop(isDesktopSize);
  }, [isDesktopSize]);

  return (
    <GamePageWrapper>
      <GameStartDialog isDesktop={isDesktop} />
      <GameResultDialog
        isDesktop={isDesktop}
        totalScore={totalScore}
        isShowResult={isShowResult}
        setIsShowResult={setIsShowResult}
      />
      <GameContentWrapper>
        <DesktopObjectList isClickIdArray={isClickIdArray} />
        <MainGameSection
          setTotalScore={setTotalScore}
          totalScore={totalScore}
          isClickIdArray={isClickIdArray}
          setIsClickIdArray={setIsClickIdArray}
        />
      </GameContentWrapper>
    </GamePageWrapper>
  );
}
