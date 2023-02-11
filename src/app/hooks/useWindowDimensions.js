import React, { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    innerWidth: window.innerWidth,
  });

  useEffect(() => {
    const getDimensions = () => ({
      innerWidth: window.innerWidth,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (window) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window]);

  return dimensions;
};
