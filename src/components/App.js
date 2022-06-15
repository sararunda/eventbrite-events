//import '../styles/App.scss';
import '../styles/App.scss';
import GetApiData from '../service/fetch';
import Filter from './Filter';
import EventList from './EventList';
import EventDetail from './EventDetail';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';

function App() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    GetApiData().then((dataApi) => {
      console.log(dataApi);
      let dataDate = dataApi.sort((a, b) => b.arrivalDate - a.arrivalDate);
      setEvents(dataDate);
    });
  }, []);

  //handling functions

  const handleChangeFilter = (filterValue) => {
    setFilter(filterValue);
  };
  //event details
  const { pathname } = useLocation();
  const dataPath = matchPath('/event/:id', pathname);

  const eventId = dataPath !== null ? dataPath.params.id : null;
  const eventDetail = events.find((event) => event.id === eventId);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Filter
              filter={filter}
              handleChangeFilter={handleChangeFilter}
              events={events}
            />
            <EventList events={events} filter={filter} />
          </div>
        }
      />
      console.log(events)
      <Route
        path="/event/:id"
        element={
          <EventDetail events={eventDetail === undefined ? {} : eventDetail} />
        }
      />
    </Routes>
  );
}

export default App;
