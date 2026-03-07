export type TimePreference = "morning" | "evening" | "any";

export interface AvailabilityDay {
  day: number;
  preference: TimePreference | null;
}

export const availabilityMock: AvailabilityDay[] = [
  { day: 2, preference: "morning" },
  { day: 5, preference: "evening" },
  { day: 9, preference: "any" },
  { day: 11, preference: "morning" },
  { day: 13, preference: "any" },
  { day: 15, preference: "evening" },
  { day: 17, preference: "any" },
  { day: 23, preference: "morning" },
  { day: 25, preference: "evening" },
];