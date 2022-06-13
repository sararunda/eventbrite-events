const EventItem = (props) => {
  return (
    <div>
      <img
        className="image"
        alt={props.events.title}
        src={props.events.photo}
      />
      <h2>{props.events.title}</h2>
      <p>{props.events.date}</p>
      <p>{props.events.city}</p>
    </div>
  );
};
export default EventItem;
