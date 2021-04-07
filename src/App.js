import "./App.css";
import TodoItem from "./components/TodoItem";
import Input from "./components/Input";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <h1>TODO APP</h1>
      <div className="app__container">
        <Input />

        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
