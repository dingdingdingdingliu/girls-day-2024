import { useEffect, useCallback } from "react";

const useBodyScrollLock = (isLocked) => {
  const setBodyOverflow = useCallback((value) => {
    document.body.style.overflow = value;
    document.documentElement.style.overflow = value;
  }, []);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalHtmlStyle = window.getComputedStyle(
      document.documentElement,
    ).overflow;

    if (isLocked) {
      setBodyOverflow("hidden");
    } else {
      setBodyOverflow(originalStyle);
    }

    return () => {
      setBodyOverflow(originalStyle);
      document.documentElement.style.overflow = originalHtmlStyle;
    };
  }, [isLocked, setBodyOverflow]);
};

export default useBodyScrollLock;
