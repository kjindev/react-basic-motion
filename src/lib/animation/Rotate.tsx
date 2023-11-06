interface Datatype {
  children: any;
  type: string;
  duration: number;
  timing: string;
  count: number | string;
}

export default function Rotate({
  children,
  type,
  duration,
  timing,
  count,
}: Datatype) {
  const clockKeyframes = `
        @keyframes clockRotateAnimation {
        0% {
            transform: rotate(0);
          }
        100% {
            transform: rotate(360deg);
        }
        }
      `;

  const clockRotate = {
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
    animation: `counterClockRotateAnimation ${duration}s ${timing} ${count}`,
  };

  if (type === "clock") {
    return (
      <>
        <style>{clockKeyframes}</style>
        <div style={clockRotate}>{children}</div>
      </>
    );
  } else if (type === "counterClock") {
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
