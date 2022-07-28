import React, { useEffect, useRef } from "react";
import { squares } from "./squares";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    squares()
  }, []);

  return <canvas ref={canvasRef} {...props} width='600' height='600' />;
};

export default Canvas;
