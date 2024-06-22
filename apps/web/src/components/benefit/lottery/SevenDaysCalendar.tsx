import clsx from "clsx";
import { DateTime } from "luxon";

interface CalendarDayBoxProps {
  sequence: number;
  isToday: boolean;
  isSpecial: boolean;
  specialText?: string;
}

function CalendarDayBox({
  sequence,
  isToday,
  isSpecial,
  specialText,
}: CalendarDayBoxProps) {
  const isSpecialStyle = isToday || isSpecial;

  let displayText: string;
  if (isToday) {
    displayText = "오늘";
  } else if (isSpecial) {
    displayText = String(specialText);
  } else {
    displayText = String(sequence);
  }

  return (
    <div
      className={clsx(
        "flex flex-1 items-center justify-center py-2 text-center font-semibold",
        {
          "text-neutral-500": !isSpecialStyle,
        },
      )}
    >
      {isSpecialStyle ? (
        <div
          className={clsx("rounded-full p-2", {
            "bg-info text-white": isToday,
            "bg-neutral-800 text-info": !isToday,
          })}
        >
          {displayText}
        </div>
      ) : (
        displayText
      )}
    </div>
  );
}

export default function SevenDaysCalendar() {
  const now = DateTime.local();
  const days = Array.from({ length: 7 }, (_, i) =>
    now.plus({ days: i }).toLocaleString({ weekday: "short" }),
  );

  const dateRange = Array.from({ length: 7 }, (_, i) => now.plus({ days: i }));

  return (
    <div className="mt-4 py-1 text-sm">
      <div className="flex">
        {days.map((day) => (
          <div
            key={day}
            className="flex-1 text-center font-semibold text-neutral-400"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="flex">
        {dateRange.map((date, idx) => (
          <CalendarDayBox
            key={date.toFormat("dd")}
            sequence={idx + 1}
            isToday={date.hasSame(now, "day")}
            isSpecial={idx === 2 || idx === 6}
            specialText={idx === 2 ? "2배" : "3배"}
          />
        ))}
      </div>
    </div>
  );
}
