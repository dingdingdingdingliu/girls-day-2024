import React, { createContext, useState } from "react";
import visionGameData from "@/pages/visionExamGame/visionGameData";

export const VisionGameContext = createContext();

const testData = [
  {
    id: 1,
    selectedAnswer: "incorrect",
  },
  {
    id: 2,
    selectedAnswer: "yes",
  },
  {
    id: 3,
    selectedAnswer: "no",
  },
  {
    id: 4,
    selectedAnswer: "no",
  },
  {
    id: 5,
    selectedAnswer: "yes",
  },
  {
    id: 6,
    selectedAnswer: "yes",
  },
  {
    id: 7,
    selectedAnswer: "yes",
  },
  {
    id: 8,
    selectedAnswer: "no",
  },
  {
    id: 9,
    selectedAnswer: "yes",
  },
  {
    id: 10,
    selectedAnswer: "no",
  },
  {
    id: 11,
    selectedAnswer: "no",
  },
  {
    id: 12,
    selectedAnswer: "yes",
  },
];

export const VisionGameProvider = ({ children }) => {
  // 小遊戲一玩家答案，預設為空陣列
  const [playerAnswers, setPlayerAnswers] = useState(testData);

  return (
    <VisionGameContext.Provider
      value={{ visionGameData, playerAnswers, setPlayerAnswers }}
    >
      {children}
    </VisionGameContext.Provider>
  );
};
