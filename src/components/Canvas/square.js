const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [800, 800],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const squareWidth = 60;
    const squareHeight = 60;
    const gap = 20;
    const squaresPerLine = 5;
    const smallSquaresSizeDiference = 16;
    const smallSquaresPositionDiference = 8;
    let x, y;

    context.fillStyle = "blue";

    context.lineWidth = 4;

    for (let i = 0; i < squaresPerLine; i++) {
      for (let j = 0; j < squaresPerLine; j++) {
        x = 100 + (squareWidth + gap) * i;
        y = 100 + (squareHeight + gap) * j;

        context.beginPath();
        context.rect(x, y, squareWidth, squareHeight);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(
            x + smallSquaresPositionDiference,
            y + smallSquaresPositionDiference,
            squareWidth - smallSquaresSizeDiference,
            squareHeight - smallSquaresSizeDiference
          );
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
