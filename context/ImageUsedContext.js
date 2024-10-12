import React, { createContext } from "react";
import useWebPImage from "@/hooks/useWebPImage";

export const ImageUsedContext = createContext();

export const ImageUsedProvider = ({ children }) => {
  const isWebPUsed = useWebPImage();

  return (
    <ImageUsedContext.Provider value={{ isWebPUsed }}>
      {children}
    </ImageUsedContext.Provider>
  );
};
