import { useState } from "react";

const name = "Thang";
const age = 22;

function heloo(name: string) {
  return "Hello " + name;
}

const hello = (name: string) => {
  return "Hello " + name;
};

const arr = [1, 2, 3];
const arr1 = [...arr, 4];

const user = { name: "Thang", age: 22 };
const newUser = {
  ...user,
  age: 23,
};

const arr2 = [1, 2, 3, 4];
const result = arr2.map((item) => item * 2);

const result1 = arr2.filter((item) => item > 2);

const result2 = arr2.find((item) => item === 3);

const user1 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const result3 = user1.find((item) => item.id === 2)?.name;

const arr3 = ["A", "B"];
const newArr3 = [...arr3, "C"];

const newArr4 = arr3.filter((item) => item !== "B");

let completed = false;
completed = !completed;

const user2 = [
  { id: 1, done: false },
  { id: 2, done: false },
];
const newArr5 = user2.map((item) => {
  if (item.id === 1) {
    return { ...item, done: true };
  }
  return item;
});

const [count, setCount] = useState("");

<button onChange={() => setCount(count + 1)}>Click</button>;

const [text, setText] = useState("");
<input value={text} onChange={(e) => setText(e.target.value)} />;

<ul>
  {arr.map((i, index) => (
    <li key={index}>{i}</li>
  ))}
</ul>;

const [tasks, setTasks] = useState<Task[]>([]);

const addTasks = (task: string) => {
  const newTasks: Task = {
    name: task,
    completed: false,
  };
  setTasks([...tasks, newTasks]);
};

const deleteTask = (task: string) => {
  setTasks(tasks.filter((t) => t.name !== task));
};

type Task = {
  name: string;
  completed: boolean;
};
