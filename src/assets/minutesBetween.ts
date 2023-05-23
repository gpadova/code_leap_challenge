import { formatDistance } from "date-fns";

export function minutesBetween(created_datetime: string): string {
  return formatDistance(new Date(created_datetime), new Date(Date.now()), {
    addSuffix: true,
  });
}
