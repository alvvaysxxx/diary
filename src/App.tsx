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
    localStorage.setItem("tasks", JSON.stringify(tasks));
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

export default App;
