interface Datatype {
  children: any;
  type: string;
  duration: number;
  timing: string;
  count: number | string;
}

export default function Fade({
  children,
  type,
  timing,
  duration,
  count,
}: Datatype) {
  const fadeinKeyframes = `
    @keyframes fadeinAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
      `;

  const fadein = {
    animation: `fadeinAnimation ${duration}s ${timing} ${count}`,
  };

  const fadeoutKeyframes = `
        @keyframes fadeoutAnimation {
        0% {
            opacity: 1;
          }
        100% {
          opacity: 0;
        }
        }
      `;

  const fadeout = {
    animation: `fadeoutAnimation ${duration}s ${timing} ${count}`,
  };

  const blinkKeyframes = `
    @keyframes blinkAnimation {
    0% {
        opacity: 1;
      }
       50% {
        opacity: 0;
      }
    100% {
      opacity: 1;
    }
    }
  `;

  const blink = {
    animation: `blinkAnimation ${duration}s ${timing} ${count}`,
  };

  if (type === "fadein") {
    return (
      <>
        <style>{fadeinKeyframes}</style>
        <div style={fadein}>{children}</div>
      </>
    );
  } else if (type === "fadeout") {
    return (
      <>
        <style>{fadeoutKeyframes}</style>
        <div style={fadeout}>{children}</div>
      </>
    );
  } else if (type === "blink") {
    return (
      <>
        <style>{blinkKeyframes}</style>
        <div style={blink}>{children}</div>
      </>
    );
  } else {
    return <></>;
  }
}
