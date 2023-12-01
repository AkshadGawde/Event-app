import EventContent from "@/components/events/event-detail/event-detail/event-content";
import EventLogistics from "@/components/events/event-detail/event-detail/event-logistics";
import EventSummary from "@/components/events/event-detail/event-detail/event-summary";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data"; // Import getEventById

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>NO Event Found! </p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />

      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
