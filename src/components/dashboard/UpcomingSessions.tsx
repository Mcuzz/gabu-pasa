import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import { eventsMock } from "@/mocks/events.mock";

export default function UpcomingSessions() {
  return (
      

      <CalendarWrapper events={eventsMock} />
    
  );
}