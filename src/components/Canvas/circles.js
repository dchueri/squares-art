const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const degToRad = (deg) => {
  return (deg / 180) * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const xCenter = width * 0.5;
    const yCenter = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const numberOfItems = 30;
    const radius = width * 0.3;

    for (let i = 0; i < numberOfItems; i++) {
      const slice = degToRad(360 / numberOfItems);
      const angle = slice * i;

      x = xCenter + radius * Math.sin(angle);
      y = yCenter + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);

      context.fillStyle = "black";
      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
