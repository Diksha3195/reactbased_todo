import TodoHeading from "./components/TodoHeading";
import Todoinput from "./components/Todoinput";
import WelcomeMsg from "./components/WelcomeMsg";
import Todoitems from "./components/Todoitems";
import TodoContextProvider from "./store/Todo-item-store";

function App() {
  return (
    <>
      <TodoContextProvider>
        <center className="container">
          <TodoHeading />
          <Todoinput />
          <WelcomeMsg></WelcomeMsg>
          <Todoitems />
        </center>
      </TodoContextProvider>
    </>
  );
}
export default App;
