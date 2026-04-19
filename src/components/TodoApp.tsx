import { useState, type ChangeEvent } from "react";
import "./TodoApp2.css";

type Task = {
  id: number;
  task: string;
  completed: boolean;
};

let count = 0;

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    const newTask: Task = {
      task,
      id: count++,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleDelete = (id: number) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  };

  const handleToggle = (id: number) => {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setTasks(newTasks);
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleAddTask}>Add</button>
      <p></p>
      <ul>
        {tasks.map((t) => (
          <li key={t.id} className={t.completed ? "done" : ""}>
            {t.task} <button onClick={() => handleDelete(t.id)}>Delete</button>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleToggle(t.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
