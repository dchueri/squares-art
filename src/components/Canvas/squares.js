const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    const squareWidth = width * 0.1;
    const squareHeight = height * 0.1;
    const gap = width * 0.05;
    const squaresPerLine = 5;
    const smallSquaresSizeDiference = width * 0.05;
    const smallSquaresPositionDiference = smallSquaresSizeDiference / 2;
    const initialPositionX = width * 0.17;
    const initialPositionY = height * 0.17;
    const strokeColor = 'white';
    let x, y;

    context.strokeStyle = strokeColor
    context.lineWidth = width * 0.015;

    const rotate = (hc, vc) => {
      if (Math.random() > 0.2) return;
      context.translate(hc, vc);
      context.rotate((45 * Math.PI) / 180);
      context.translate(-hc, -vc);
    };

    const randomStrokeWidth = (weight) => width * Math.random() * weight;

    for (let i = 0; i < squaresPerLine; i++) {
      for (let j = 0; j < squaresPerLine; j++) {
        x = initialPositionX + (squareWidth + gap) * i;
        y = initialPositionY + (squareHeight + gap) * j;
        const hc = x + squareWidth /2;
        const vc = y + squareHeight / 2;

        context.beginPath();
        context.strokeStyle = "white";
        context.lineWidth = randomStrokeWidth(0.01);
        rotate(hc,vc);
        context.rect(x, y, squareWidth, squareHeight);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.lineWidth = randomStrokeWidth(0.0078);
          context.strokeStyle = "rgb(151, 0, 156)";
          rotate(hc, vc);
          context.rect(
            x + smallSquaresPositionDiference,
            y + smallSquaresPositionDiference,
            squareWidth - smallSquaresSizeDiference,
            squareHeight - smallSquaresSizeDiference
          );
          context.stroke();
        }
        context.setTransform(1, 0, 0, 1, 0, 0);
      }
    }
  };
};

canvasSketch(sketch, settings);
