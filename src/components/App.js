//import '../styles/App.scss';
import GetApiData from '../service/fetch';
import EventList from './EventList';
import { useEffect, useState } from 'react';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    GetApiData().then((dataApi) => {
      console.log(dataApi);
      let dataDate = dataApi.sort((a, b) => b.arrivalDate - a.arrivalDate);
      setEvents(dataDate);
    });
  }, []);
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export default App;
