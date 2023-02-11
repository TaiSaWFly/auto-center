import React, { useEffect, useState } from "react";

export const useHeaderFixed = (headerRef) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleHeaderFixed = () => {
      if (window.scrollY >= 1) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleHeaderFixed);

    return () => {
      window.removeEventListener("scroll", handleHeaderFixed);
    };
  }, [headerRef]);

  return isFixed;
};
