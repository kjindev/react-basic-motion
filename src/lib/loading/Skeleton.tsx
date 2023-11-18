import React from "react";

interface Datatype {
  radius: string;
  width: string;
  height: string;
  duration: number;
  timing: string;
  count: number | string;
  className?: string;
}

export default function Skeleton({
  radius,
  width,
  height,
  duration,
  timing,
  count,
  className,
}: Datatype) {
  const skeletonKeyframes = `
  @keyframes skeletonAnimation {
            0%, 100% {
              background-color: #00000010;
            }
        
            50% {
              background-color: #00000018;
            }
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
      <div style={skeleton} className={className}></div>
    </>
  );
}
