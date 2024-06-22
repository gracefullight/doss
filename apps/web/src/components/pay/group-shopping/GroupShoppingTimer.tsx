interface GroupShoppingTimerProps {
  seconds: number;
}

export default function GroupShoppingTimer({
  seconds,
}: GroupShoppingTimerProps) {
  const countHours = Math.floor((seconds / 3600) % 24);
  const countMinutes = Math.floor((seconds / 60) % 60);
  const countSeconds = Math.floor(seconds % 60);

  return (
    <span className="countdown">
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore TS2322 */}
      <span style={{ "--value": countHours }} />:
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore TS2322 */}
      <span style={{ "--value": countMinutes }} />:
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore TS2322 */}
      <span style={{ "--value": countSeconds }} />
    </span>
  );
}
