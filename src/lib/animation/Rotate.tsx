import React from "react";

interface Datatype {
  children: React.ReactNode;
  name: string;
  duration: number;
  timing: string;
  count: number | string;
}

export default function Rotate({
  children,
  name,
  duration,
  timing,
  count,
}: Datatype) {
  const clockKeyframes = `
        @keyframes clockRotateAnimation {
          0%{
            transform: rotate(0deg);
          }
          100%{
            transform: rotate(360deg);
          }
        }
      `;

  const clockRotate = {
    width: 0,
    height: 0,
    transformOrigin: "50% 50%",
    animation: `clockRotateAnimation ${duration}s ${timing} ${count}`,
  };

  const counterClockKeyframes = `
    @keyframes counterClockRotateAnimation {
    0% {
        transform: rotate(0);
      }
    100% {
        transform: rotate(-360deg);
    }
    }
  `;

  const counterClockRotate = {
    transformOrigin: "center center",
    animation: `counterClockRotateAnimation ${duration}s ${timing} ${count}`,
  };

  if (name === "clock") {
    return (
      <>
        <style>{clockKeyframes}</style>
        <div style={clockRotate}>{children}</div>
      </>
    );
  } else if (name === "counterClock") {
    return (
      <>
        <style>{counterClockKeyframes}</style>
        <div style={counterClockRotate}>{children}</div>
      </>
    );
  } else {
    return <></>;
  }
}
