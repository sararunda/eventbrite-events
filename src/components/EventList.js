import EventItem from './EventItem';
const EventList = (props) => {
  const renderList = () => {
    return props.events.map((event, index) => {
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
