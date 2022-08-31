import { TimerSettings, useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }: TimerSettings) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp: expiryTimestamp,
  });

  return (
    <span>
      {minutes}:{seconds}
    </span>
  );
};

export default Timer;
