"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ClockProps {
  code: string;
  timezone?: string;
  className?: string;
}

function Clock({ code, timezone, className }: ClockProps) {
  const [time, setTime] = React.useState<Date | null>(null);

  React.useEffect(() => {
    const updateTime = () => {
      if (timezone) {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: timezone,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        };
        const timeString = now.toLocaleTimeString("en-US", options);
        const [hours, minutes, seconds] = timeString.split(":").map(Number);
        const date = new Date();
        date.setHours(hours, minutes, seconds);
        setTime(date);
      } else {
        setTime(new Date());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  // Calculate hand angles
  const hours = time?.getHours() ?? 10;
  const minutes = time?.getMinutes() ?? 10;
  const seconds = time?.getSeconds() ?? 0;

  // Format time for tooltip
  const formattedTime = time
    ? time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
    : "";

  // Hour hand: 360° / 12 hours = 30° per hour, plus minute contribution
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  // Minute hand: 360° / 60 minutes = 6° per minute
  const minuteAngle = minutes * 6;
  // Second hand: 360° / 60 seconds = 6° per second
  const secondAngle = seconds * 6;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-2.5 cursor-pointer",
              className
            )}
          >
            <div className="relative size-16 overflow-hidden">
              {/* Clock face with dotted border */}
              <Image
                src="/clock-face.png"
                alt=""
                width={64}
                height={64}
                className="absolute inset-0 size-full"
                priority
              />

              {/* Clock hands container */}
              <svg
                viewBox="0 0 64 64"
                className="absolute inset-0 size-full"
                aria-hidden="true"
              >
                {/* Hour hand */}
                <line
                  x1="32"
                  y1="32"
                  x2="32"
                  y2="20"
                  stroke="#716e60"
                  strokeWidth="2"
                  strokeLinecap="round"
                  transform={`rotate(${hourAngle}, 32, 32)`}
                />
                {/* Minute hand */}
                <line
                  x1="32"
                  y1="32"
                  x2="32"
                  y2="14"
                  stroke="#716e60"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  transform={`rotate(${minuteAngle}, 32, 32)`}
                />
                {/* Second hand */}
                <line
                  x1="32"
                  y1="32"
                  x2="32"
                  y2="12"
                  stroke="#a39e8f"
                  strokeWidth="1"
                  strokeLinecap="round"
                  transform={`rotate(${secondAngle}, 32, 32)`}
                />
                {/* Center dot */}
                <circle cx="32" cy="32" r="3" fill="#716e60" />
              </svg>
            </div>

            {/* City code label */}
            <span className="text-xs font-medium leading-4 text-muted-foreground">
              {code}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{formattedTime}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { Clock };
