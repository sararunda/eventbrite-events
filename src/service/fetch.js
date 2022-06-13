//https://www.eventbriteapi.com/v3/organizations/1010195270413/events/?token=EBCFTCPGPMGNPKPJMN7P
const GetApiData = () => {
  return fetch(
    'https://www.eventbriteapi.com/v3/organizations/1010195270413/events/?token=EBCFTCPGPMGNPKPJMN7P&expand=venue'
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.events.map((event, index) => {
        return {
          id: event.id,
          photo: event.logo.original.url,
          title: event.name.text,
          date: event.start.local + event.end.local,
          city: event.venue.address.city,
          ticket_free: true,
        };
      });

      return dataClean;
    });
};
export default GetApiData;
