const Filter = (props) => {
  const handleChangeSelect = (event) => {
    const filterValue = event.currentTarget.value;
    props.handleChangeFilter(filterValue);
  };
  return (
    <div className="container-filter">
      <img
        className="container-filter__logo"
        src="images/eventbrite.png"
        alt="logo eventbrite"
      />
      <form className="container-filter__form" action="">
        <label htmlFor="label">Event type:</label>
        <select
          className="container-filter__form__select"
          name=""
          id=""
          value={props.filter}
          onChange={handleChangeSelect}
        >
          <option value="">all</option>
          <option value="online">online</option>
          <option value="physical">physical</option>
        </select>
      </form>
    </div>
  );
};
export default Filter;
