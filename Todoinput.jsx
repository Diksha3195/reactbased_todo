import { useState, useRef } from "react";
import { MdAddchart } from "react-icons/md";
import { useContext } from "react";
import { TodoitemsContext } from "../store/Todo-item-store";

function Todoinput() {
  const { addNewItem } = useContext(TodoitemsContext);
  const [todoName, settodoName] = useState("");
  const [todoDate, settodoDate] = useState("");

  // const todoNameElement = useRef();
  // const dueDateElement = useRef();

  const handleOnName = (event) => {
    settodoName(event.target.value);
  };

  const handleOnDate = (event) => {
    settodoDate(event.target.value);
  };

  const handleAddBtnclick = (event) => {
    event.preventDefault();
    // const todoName = todoNameElement.current.value;
    // const todoDate = dueDateElement.current.value;
    // todoNameElement.current.value = "";
    // dueDateElement.current.value = "";
    addNewItem(todoName, todoDate);
    settodoName("");
    settodoDate("");
  };

  return (
    <>
      <div className="container text-center">
        <form className="row" onSubmit={handleAddBtnclick}>
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              placeholder="Type to search..."
              // ref={todoNameElement}
              value={todoName}
              onChange={handleOnName}
            ></input>
          </div>

          <div className="col-4">
            <input
              className="form-control"
              type="date"
              // ref={dueDateElement}
              value={todoDate}
              onChange={handleOnDate}
            ></input>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success">
              <MdAddchart />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Todoinput;
