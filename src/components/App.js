//import '../styles/App.scss';
import '../styles/App.scss';
import GetApiData from '../service/fetch';
import Filter from './Filter';
import EventList from './EventList';
import { useEffect, useState } from 'react';

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
    <div>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <EventList events={events} />
    </div>
  );
}

export default App;
