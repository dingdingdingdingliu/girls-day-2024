import { useState, useEffect } from "react";

function supportsWebP() {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = "https://www.gstatic.com/webp/gallery/1.webp";
    img.onload = () => resolve(true);
    img.onerror = () => {
      console.log("webp error");
      resolve(false);
    };
  });
}

const useWebPImage = () => {
  const [isWebPUsed, setIsWebPUsed] = useState(false);

  useEffect(() => {
    supportsWebP().then((isSupported) => {
      if (isSupported) {
        setIsWebPUsed(true);
      }
    });
  }, []);

  return isWebPUsed;
};

export default useWebPImage;
