//import '../styles/App.scss';
import GetApiData from '../service/fetch';
import { useEffect, useState } from 'react';

function App() {
  const [event, setEvents] = useState([]);

  useEffect(() => {
    GetApiData().then((dataApi) => {
      console.log(dataApi);
      let dataDate = dataApi.sort((a, b) => b.arrivalDate - a.arrivalDate);
      setEvents(dataDate);
    });
  }, []);
  return (
    <div>
      <h1>hola mundo</h1>
    </div>
  );
}

export default App;
