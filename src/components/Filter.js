const Filter = (props) => {
  const handleChangeSelect = (event) => {
    const filterValue = event.currentTarget.value;
    props.handleChangeFilter(filterValue);
  };
  return (
    <form className="form" action="">
      <label htmlFor="label">Event type:</label>
      <select name="" id="" value={props.filter} onChange={handleChangeSelect}>
        <option selected value="">
          all
        </option>
        <option value="online">online</option>
        <option value="physical">physical</option>
      </select>
    </form>
  );
};
export default Filter;
