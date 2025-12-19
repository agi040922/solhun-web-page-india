"use client";

import * as React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, ...props }: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      className={className}
      classNames={{
        // 기본 스타일 확장 + Tailwind 커스텀
        root: `${defaultClassNames.root} p-3`,
        today: `border border-blue-500 rounded-full`,
        selected: `bg-blue-600 text-white rounded-full`,
        chevron: `${defaultClassNames.chevron} fill-blue-500`,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
