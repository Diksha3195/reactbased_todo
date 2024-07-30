import styles from "./WelcomeMsg.module.css";
import { useContext } from "react";
import { TodoitemsContext } from "../store/Todo-item-store";

const WelcomeMsg = () => {
  const { todoitems } = useContext(TodoitemsContext);

  return (
    todoitems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};
export default WelcomeMsg;
