import { useState, useEffect } from "react";

const useAppleDeviceCheck = () => {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    const checkAppleDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const platform =
        navigator.userAgentData?.platform || navigator.platform || "";

      const appleDevices = [
        "macintosh",
        "macintel",
        "macppc",
        "mac68k",
        "ipad",
        "iphone",
        "ipod",
      ];

      if (appleDevices.some((device) => platform.includes(device))) {
        return true;
      }

      // 額外檢查 userAgent，以防 platform 檢測失敗
      if (userAgent.includes("mac") || /ipad|iphone|ipod/.test(userAgent)) {
        return true;
      }

      return false;
    };

    setIsAppleDevice(checkAppleDevice());
  }, []);

  return isAppleDevice;
};

export default useAppleDeviceCheck;
