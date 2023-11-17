interface Datatype {
  children: any;
  name: string;
  range: number[];
  duration: number;
  timing: string;
  count: number | string;
}

export default function Scale({
  children,
  name,
  range,
  duration,
  timing,
  count,
}: Datatype) {
  const scaleKeyframes = `
        @keyframes scaleAnimation {
        0% {
            scale: ${range[0]};
          }
        100% {
            scale: ${range[1]};
        }
        }
      `;

  const scale = {
    animation: `scaleAnimation ${duration}s ${timing} ${count}`,
  };

  const inAndOutKeyframes = `
    @keyframes inAndOutAnimation {
    0% {
        scale: ${range[0]};
      }
      50% {
          scale: ${range[1]};
        }
    100% {
        scale: ${range[0]};
    }
    }
  `;

  const inAndOut = {
    animation: `inAndOutAnimation ${duration}s ${timing} ${count}`,
  };

  if (name === "scale") {
    return (
      <>
        <style>{scaleKeyframes}</style>
        <div style={scale}>{children}</div>
      </>
    );
  } else if (name === "inAndOut") {
    return (
      <>
        <style>{inAndOutKeyframes}</style>
        <div style={inAndOut}>{children}</div>
      </>
    );
  } else {
    return <></>;
  }
}
