import { useState, useEffect } from "react";

const useViewport = () => {
  const [viewport, setViewport] = useState({
    vh: 0,
    vw: 0,
  });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        vh: window.innerHeight * 0.01,
        vw: window.innerWidth * 0.01,
      });
    };

    updateViewport(); // 初始設置
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return viewport;
};

export default useViewport;
