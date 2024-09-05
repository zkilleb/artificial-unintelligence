import './Cell.css';

export function Cell({
  width,
  pxWidth,
  height,
  pxHeight,
}: {
  width: number;
  pxWidth: number;
  height: number;
  pxHeight: number;
}) {
  return (
    <div
      style={{
        backgroundColor: generateRandomColor(),
        width: pxWidth / width,
        height: pxHeight / height,
      }}
    ></div>
  );
}
const generateRandomColor = () => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let hexCode = '#';

  while (hexCode.length < 7) {
    hexCode += digits[Math.round(Math.random() * digits.length)];
  }

  return hexCode;
};
