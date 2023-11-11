interface Datatype {
  children: any;
  radius: number;
  color: string;
  width: string;
  height: string;
  duration: number;
  timing: string;
  count: number | string;
}

export default function Skeleton({
  children,
  radius,
  width,
  height,
  color,
  duration,
  timing,
  count,
}: Datatype) {
  const skeletonKeyframes = `
            0%, 100% {
              background-color: ${color}10;
            }
        
            50% {
              background-color: ${color}15;
            }
        `;

  const skeleton = {
    width: width,
    height: height,
    borderRadius: radius,
    animation: `skeletonAnimation ${duration}s ${timing} ${count}`,
  };

  return (
    <>
      <style>{skeletonKeyframes}</style>
      <div style={skeleton}>{children}</div>
    </>
  );
}
