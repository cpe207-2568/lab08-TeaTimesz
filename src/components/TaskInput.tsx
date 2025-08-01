export function TaskInput() {
  return (
    <div className="m-2 p-2">
      <form className="row">
        <h2>Rawiphat Makpheng</h2>
        <div className="col-10">
          <input
            className="form-control"
            type="text"
            placeholder="Insert a task here.."
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}
