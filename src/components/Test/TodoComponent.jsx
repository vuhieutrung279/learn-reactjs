import { useState } from "react";
import Todo from "./Todo";

function TodoComponent() {
  const toDoList = [
    {
      name: "Coding",
      isFinish: true
    },
    {
      name: "Watching",
      isFinish: true
    },
    {
      name: "Reading",
      isFinish: false
    },
  ];
  const [fontSize, setFontSize] = useState(15);
  return (
    <div className="TodoComponent">
      <Todo data={toDoList} fontSize={fontSize + "rem"}  />
    </div>
  );
}

export default TodoComponent;
