interface Datatype {
  children: any;
  name: string;
  range: number;
  duration: number;
  timing: string;
  count: number | string;
}

export default function Bounce({
  children,
  name,
  range,
  duration,
  timing,
  count,
}: Datatype) {
  const xBounceKeyframes = `
      @keyframes xBounceAnimation {
      0% {
          transform: translateX(0);
        }
      50% {
          transform: translateX(${range}px)
        }
      100% {
          transform: translateX(0)
      }
      }
    `;

  const xBounce = {
    animation: `xBounceAnimation ${duration}s ${timing} ${count}`,
  };

  const yBounceKeyframes = `
      @keyframes yBounceAnimation {
      0% {
          transform: translateY(0);
        }
      50% {
          transform: translateY(${range}px)
        }
      100% {
          transform: translateY(0)
      }
      }
    `;

  const yBounce = {
    animation: `yBounceAnimation ${duration}s ${timing} ${count}`,
  };

  if (name === "x") {
    return (
      <>
        <style>{xBounceKeyframes}</style>
        <div style={xBounce}>{children}</div>
      </>
    );
  } else if (name === "y") {
    return (
      <>
        <style>{yBounceKeyframes}</style>
        <div style={yBounce}>{children}</div>
      </>
    );
  } else {
    return <></>;
  }
}
