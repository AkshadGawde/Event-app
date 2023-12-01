import EventItems from "./event-item";
import classes from './event-item.module.css';

function EventList(props) {
    const { items } = props;
  
    return (
      <ul className={classes.list}>
        {items.map((event) => (
          <EventItems
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    );
  }
  
  export default EventList;