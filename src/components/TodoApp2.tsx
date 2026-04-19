import { useState, type ChangeEvent } from "react";
import "./TodoApp2.css";

type Task = {
  id: number;
  task: string;
  completed: boolean;
};
let count = 0;

function TodoApp2() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (task) {
      const newTask: Task = {
        id: count++,
        task,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  const handleDelete = (index: number) => {
    const newTasks = tasks.filter((i) => i.id !== index);
    setTasks(newTasks);
  };

  const taskCount = tasks.length;
  return (
    <div>
      <input onChange={handleChange} value={task} />
      <button onClick={handleClick}>Add</button>
      {/* <TaskCountLabel taskCount={taskCount} /> */}
      <ul>
        {tasks.map((t) => (
          <TodoItem key={t.id} task={t} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp2;

type Props = {
  task: Task;
  onDelete: (index: number) => void;
};
function TodoItem(props: Props) {
  const { task, onDelete } = props;
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    onDelete(task.id);
  };

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return (
    <li className={completed ? "done" : ""}>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      {task.task}
      <button onClick={handleClick}>Delete</button>
    </li>
  );
}

type TaskCountLabelProps = {
  taskCount: number;
};
function TaskCountLabel(props: TaskCountLabelProps) {
  const { taskCount } = props;
  return (
    <p>
      {taskCount} {taskCount === 1 ? "task" : "tasks"}
    </p>
  );
}
