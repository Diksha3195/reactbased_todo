import { createContext } from "react";
import { useReducer } from "react";

export const TodoitemsContext = createContext({
  todoitems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const NewtodoitemReducer = (curritem, action) => {
  let todoNewitem = curritem;
  if (action.type === "ADD_ITEM") {
    todoNewitem = [
      ...curritem,
      {
        name: action.payload.itmname,
        date: action.payload.itmdate,
      },
    ];
  } else if (action.type === "DEL_ITEM") {
    todoNewitem = curritem.filter(
      (item) => item.name !== action.payload.itmname
    );
  }
  return todoNewitem;
};

const TodoContextProvider = ({ children }) => {
  // const [todoitems, settodoitems] = useState([]);
  const [todoitems, Dispatchtodoitem] = useReducer(NewtodoitemReducer, []);

  const addNewItem = (itmname, itmdate) => {
    const Newitemadd = {
      type: "ADD_ITEM",
      payload: { itmname, itmdate },
    };
    Dispatchtodoitem(Newitemadd);

    // settodoitems((currentitems) => [
    //   ...currentitems,
    //   { name: todoName, date: todoDate },
    // ]);
  };

  const deleteItem = (itmname) => {
    //   const newtodoitems = todoitems.filter((item) => item.name !== todoitemName);
    //   settodoitems(newtodoitems);
    // };
    const NewitemDel = {
      type: "DEL_ITEM",
      payload: { itmname },
    };
    Dispatchtodoitem(NewitemDel);
  };
  return (
    <TodoitemsContext.Provider
      value={{
        todoitems,

        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoitemsContext.Provider>
  );
};

export default TodoContextProvider;
