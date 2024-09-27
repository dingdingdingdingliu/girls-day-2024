import React, { createContext, useState } from "react";
import visionGameData from "@/components/Common/VisionGame/visionGameData";

export const VisionGameContext = createContext();

export const VisionGameProvider = ({ children }) => {
  // 小遊戲一玩家答案，預設為空陣列
  const [playerAnswers, setPlayerAnswers] = useState([]);

  return (
    <VisionGameContext.Provider
      value={{ visionGameData, playerAnswers, setPlayerAnswers }}
    >
      {children}
    </VisionGameContext.Provider>
  );
};
