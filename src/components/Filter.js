const Filter = () => {
  return (
    <form className="form" action="">
      <label htmlFor="label">Event type:</label>
      <select name="" id="">
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
