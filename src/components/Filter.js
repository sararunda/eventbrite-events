const Filter = (props) => {
  const handleChangeSelect = (event) => {
    const filterValue = event.currentTarget.value;
    props.handleChangeFilter(filterValue);
  };
  return (
    <div className="container-filter">
      <div>
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
      <section>
        <h1 className="container-filter__title-enjoy">
          enjoy and live in the moment
        </h1>
        <img
          className="container-filter__img-concert"
          src="images/concert.jpg"
          alt=""
        />
      </section>
    </div>
  );
};
export default Filter;
