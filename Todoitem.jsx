import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodoitemsContext } from "../store/Todo-item-store";

function Todoitem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoitemsContext);
  // const { DeleteItem } = useContext(TodoitemsContext);
  return (
    <>
      <div>
        <div className="row">
          <div className="col-4">
            <center>
              <h5>{todoName}</h5>
            </center>
          </div>
          <div className="col-4">
            <center>
              <h5>{todoDate}</h5>
            </center>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteItem(todoName)}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todoitem;
