import { useContext } from "react";
import { TodoitemsContext } from "../store/Todo-item-store";
import Todoitem from "./Todoitem";

const Todoitems = () => {
  const { todoitems } = useContext(TodoitemsContext);

  return (
    <div>
      {todoitems.map((item) => (
        <Todoitem
          todoName={item.name}
          todoDate={item.date}
          key={item.name}
        ></Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;
