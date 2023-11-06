interface Datatype {
  children: any;
  color: string;
  radius: number;
  range: number;
  duration: number;
  timing: string;
  count: number | string;
}

export default function Pulse({
  children,
  color,
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
    borderRadius: `${radius * 100}%`,
    animation: `pulseAnimation ${duration}s ${timing} ${count}`,
  };

  return (
    <>
      <style>{pulseKeyframes}</style>
      <div style={pulse}>{children}</div>
    </>
  );
}
