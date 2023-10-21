import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Header from "./components/Header/Header";

function App() {
  const [tasks, setTasks] = useState<any>(
    // @ts-ignore
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    const sortedTasks = tasks.slice().sort((a: any, b: any) => {
      const dateA: any = new Date(a.date);
      const dateB: any = new Date(b.date);
      return dateA - dateB;
    });

    if (!areTasksEqual(sortedTasks, tasks)) {
      setTasks(sortedTasks);
      localStorage.setItem("tasks", JSON.stringify(sortedTasks));
    }
  }, [tasks]);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/create"
            element={<Create tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Функция для сравнения массивов tasks
function areTasksEqual(tasksA: any[], tasksB: any[]) {
  if (tasksA.length !== tasksB.length) {
    return false;
  }

  for (let i = 0; i < tasksA.length; i++) {
    if (tasksA[i].id !== tasksB[i].id) {
      return false;
    }
  }

  return true;
}

export default App;
