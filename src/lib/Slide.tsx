interface Datatype {
  children: any;
  xRange: number[];
  yRange: number[];
  duration: number;
  timing: string;
  count: number | string;
}

export default function Slide({
  children,
  xRange,
  yRange,
  duration,
  timing,
  count,
}: Datatype) {
  const slideKeyframes = `
      @keyframes slideAnimation {
          0% {
            transform: translate(${xRange[0]}%, ${yRange[0]}%);
          }
          100% {
            transform: translate(${xRange[1]}%, ${yRange[1]}%);
          }
        }
      `;

  const slide = {
    animation: `slideAnimation ${duration}s ${timing} ${count}`,
  };

  return (
    <>
      <style>{slideKeyframes}</style>
      <div style={slide}>{children}</div>
    </>
  );
}
