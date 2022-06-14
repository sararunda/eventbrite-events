//import '../styles/App.scss';
import '../styles/App.scss';
import GetApiData from '../service/fetch';
import Filter from './Filter';
import EventList from './EventList';
import EventDetail from './EventDetail';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

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
      <Route path="/event/:id" element={<EventDetail events={events} />} />
    </Routes>
  );
}

export default App;
