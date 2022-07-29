const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#090514";
    context.fillRect(0, 0, width, height);

    const xCenter = width * 0.5;
    const yCenter = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.2;
    let x, y;

    const numberOfItems = 35;
    const radius = width * 0.3;

    for (let i = 0; i < numberOfItems; i++) {
      const slice = math.degToRad(360 / numberOfItems);
      const angle = slice * i;

      x = xCenter + radius * Math.sin(angle);
      y = yCenter + radius * Math.cos(angle);

      context.save();
      context.translate(xCenter, yCenter);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0, 2), slice * random.range(5, -50), slice * random.range(1, 4));
      context.strokeStyle = "#1D0F42";
      context.stroke();
      context.restore();
    }

    for (let i = 0; i < numberOfItems; i++) {
      const slice = math.degToRad(360 / numberOfItems);
      const angle = slice * i;

      x = xCenter + radius * Math.sin(angle);
      y = yCenter + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      context.fillStyle = "#BF0656";
      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(xCenter, yCenter);
      context.rotate(-angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0, 2.3), slice * random.range(5, -5), slice * random.range(1, 4));
      context.strokeStyle = "#BF0656";
      context.stroke();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
