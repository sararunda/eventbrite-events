import { Link } from 'react-router-dom';
const EventItem = (props) => {
  const startDate = new Date(props.events.start_date);
  const endDate = new Date(props.events.end_date);

  return (
    <div className="container-event">
      <img
        className="container-event__image"
        alt={props.events.title}
        src={props.events.photo}
      />
      <h2 className="container-event__title-event">{props.events.title}</h2>
      <p className="container-event__date-event">
        {startDate.toDateString()} - {endDate.toDateString()}
      </p>
      <p className="container-event__city-event">{props.events.city}</p>
      <Link className="link-info" to={`/event/${props.events.id}`}>
        + info
      </Link>
    </div>
  );
};
export default EventItem;
