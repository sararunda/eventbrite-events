import EventItem from './EventItem';
const EventList = (props) => {
  const renderList = () => {
    return props.events

      .filter(
        (event) => {
          if (props.filter === 'online') {
            return event.city === 'online';
          } else if (props.filter === 'physical') {
            return event.city !== 'online';
          } else {
            return true;
          }
        }

        //props.filter === '' ? true : event.city === props.filter
      )

      .map((event, index) => {
        return (
          <li key={index}>
            <EventItem events={event} />
          </li>
        );
      });
  };

  return renderList().length > 0 ? (
    <ul className="list">
      <h2 className="list__title-events">Events:</h2>
      {renderList()}
    </ul>
  ) : (
    <p>loading</p>
  );
};
export default EventList;
