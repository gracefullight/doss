import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { useInterval } from "ahooks";
import { motion } from "framer-motion";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export default function Countdown() {
  const { seconds } = DateTime.local()
    .plus({ days: 1 })
    .set({
      hour: 0,
      minute: 0,
      second: 0,
    })
    .diffNow(["seconds"]);

  const [durationSeconds, setDurationSeconds] = useState(Math.round(seconds));
  const [isTimerEnded, setIsTimerEnded] = useState(false);

  const clearCount = useInterval(() => {
    if (durationSeconds <= 0) {
      clearCount();
      setIsTimerEnded(true);
    } else {
      setDurationSeconds((prevSeconds) => prevSeconds - 1);
    }
  }, 1000);

  useEffect(
    () => () => {
      clearCount();
    },
    [clearCount]
  );

  const countHours = Math.floor((durationSeconds / 3600) % 24);
  const countMinutes = Math.floor((durationSeconds / 60) % 60);
  const countSeconds = Math.floor(durationSeconds % 60);

  if (isTimerEnded) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-medium text-neutral-200">도스 공동구매</h2>
      <span className="text-error">
        할인 종료까지{" "}
        <span className="countdown font-mono">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore TS2322 */}
          <span style={{ "--value": countHours }}></span>:
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore TS2322 */}
          <span style={{ "--value": countMinutes }}></span>:
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore TS2322 */}
          <span style={{ "--value": countSeconds }}></span>
        </span>{" "}
        남음
      </span>
      <div className="place-self-center">
        <motion.div
          className="w-32"
          animate={{ rotateY: 360, opacity: [1, 0.6, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "linear",
            times: [0, 0.5, 1],
          }}
        >
          <QuestionMarkCircleIcon className="fill-info" />
        </motion.div>
      </div>
      <button className="btn-info btn-block btn mt-4 rounded-2xl">
        보러 가기
      </button>
    </div>
  );
}
