import React, { useEffect, useState } from "react";

export const useBlockDimensions = (myRef) => {
  const [dimensions, setDimensions] = useState({
    clientWidth: 0,
    clientHeight: 0,
    offsetLeft: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const getDimensions = () => ({
      clientWidth: myRef.current.clientWidth,
      clientHeight: myRef.current.clientHeight,
      offsetLeft: myRef.current.offsetLeft,
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
};
