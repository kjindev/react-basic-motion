import React from "react";

interface Datatype {
  width: string;
  height: string;
  color: string;
  fillColor: string;
  radius: string;
  range: number;
  duration: number;
  timing: string;
  count: number | string;
}

export default function Pulse({
  width,
  height,
  color,
  fillColor,
  radius,
  range,
  duration,
  timing,
  count,
}: Datatype) {
  const pulseKeyframes = `
    @keyframes pulseAnimation {
      0% {
        box-shadow: ${color} 0 0 0 0;
      }
      75% {
        box-shadow: #ff69b400 0 0 0 ${range}px;
      }
    }
      `;

  const pulse = {
    width: width,
    height: height,
    backgroundColor: fillColor,
    borderRadius: radius,
    animation: `pulseAnimation ${duration}s ${timing} ${count}`,
  };

  return (
    <>
      <style>{pulseKeyframes}</style>
      <div style={pulse}></div>
    </>
  );
}
