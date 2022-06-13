import EventItem from './EventItem';
const EventList = (props) => {
  const renderList = () => {
    console.log(props.events.city);
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

  return renderList().length > 0 ? <ul>{renderList()}</ul> : <p>Not found</p>;
};
export default EventList;
