// import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import globalConfig from "@/styles/globalConfig";
import {
  GamePageWrapper,
  GameContentWrapper,
} from "@/components/Common/FindObjectGame/WrapperComponent";
import DesktopObjectList from "@/components/Pages/FindObjectGame/Index/DesktopObjectList";
import MobileObjectList from "@/components/Pages/FindObjectGame/Index/MobileObjectList";
import GameStartDialog from "@/components/Common/FindObjectGame/GameStartDialog";
import GameResultDialog from "@/components/Common/FindObjectGame/GameResultDialog";
import MainGameSection from "@/components/Pages/FindObjectGame/Index/MainGameSection";
import GameBevelLabel from "@/components/Common/FindObjectGame/GameBevelLabel";

const initTimer = 120;

export default function FindObjectGame() {
  const isDesktopSize = useMediaQuery({
    minWidth: globalConfig.findObjectGame,
  });
  const [findCount, setFindCount] = useState(0);
  const [countdownTime, setCountdownTime] = useState(initTimer);
  const [isGameStart, setIsGameStart] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [isShowObject, setIsShowObject] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isClickIdArray, setIsClickIdArray] = useState([]);
  const [scrollToId, setScrollToId] = useState(null); // 用於控制滾動到哪個區域

  const onReplay = () => {
    setIsGameEnd(false);
    setIsGameStart(false);
    setIsClickIdArray([]);
    setFindCount(0);
    setScrollToId(null);
    setCountdownTime(initTimer);
  };

  useEffect(() => {
    setIsDesktop(isDesktopSize);
  }, [isDesktopSize]);

  // 倒數計時的 useEffect
  useEffect(() => {
    let timer;
    if (!isShowObject && !isGameEnd && isGameStart) {
      // 當對話框未開啟且遊戲未結束時啟動計時
      timer = setInterval(() => {
        setCountdownTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (countdownTime === 0) {
      setIsGameEnd(true); // 當倒數時間為0時觸發
    }

    return () => clearInterval(timer); // 清除計時器
  }, [isShowObject, isGameEnd, countdownTime, isGameStart]);

  // 當找齊所有物品時處理
  useEffect(() => {
    if (findCount === 12 && !isShowObject) {
      setIsGameEnd(true);
    }
  }, [findCount, isShowObject]);

  return (
    <GamePageWrapper>
      <GameBevelLabel findCount={findCount} countdownTime={countdownTime} />
      <GameStartDialog
        isDesktop={isDesktop}
        setIsGameStart={setIsGameStart}
        isGameStart={isGameStart}
      />
      <GameResultDialog
        isDesktop={isDesktop}
        findCount={findCount}
        isGameEnd={isGameEnd}
        isShowObject={isShowObject}
        onReplay={onReplay}
      />
      <GameContentWrapper>
        <DesktopObjectList
          isClickIdArray={isClickIdArray}
          scrollToId={scrollToId}
        />
        <MainGameSection
          setFindCount={setFindCount}
          isClickIdArray={isClickIdArray}
          setIsClickIdArray={setIsClickIdArray}
          setScrollToId={setScrollToId}
          isShowObject={isShowObject}
          setIsShowObject={setIsShowObject}
        />
        <MobileObjectList
          isClickIdArray={isClickIdArray}
          scrollToId={scrollToId}
        />
      </GameContentWrapper>
    </GamePageWrapper>
  );
}
