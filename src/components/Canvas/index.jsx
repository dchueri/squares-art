import React, { useRef } from "react";
import square from './square';

const Canvas = () => {
  const canvasRef = useRef(null);
  return <canvas ref={square} />;
};

export default Canvas;
