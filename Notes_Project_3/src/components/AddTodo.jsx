import { useEffect, useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    if (todo.length >= 50) {
      setErrorMsg("Character length must be less than 50");
      return;
    } else {
      setErrorMsg("");
    }
  }, [todo]);
  const addTodoInArray = () => {
    if (todo === "") {
      return;
    }
    if (todo.length >= 50) {
      setErrorMsg("Character length must be less than 50");
      return;
    }
    let obj = {
      task: todo,
      status: "Pending",
    };
    setTodos([...todos, obj]);
    setTodo("");
  };
  return (
    <>
      <div className="heading">
        <h1>Todo Notes</h1>
      </div>
      <div className="flex">
        <div className="add-box">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter todo"
          />
          <button onClick={addTodoInArray}>Add</button>
        </div>
      </div>
      {errorMsg !== "" && <div style={{ textAlign: "center" }}>{errorMsg}</div>}
    </>
  );
};

export default AddTodo;
