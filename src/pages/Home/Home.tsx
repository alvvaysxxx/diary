import homeStyles from "./Home.module.css";
import { Link } from "react-router-dom";
import Tasks from "../../components/Tasks/Tasks";

export default function Home({ tasks, setTasks }: any) {
  return (
    <div>
      <div className={homeStyles.stats}>
        <p>Записей: {tasks.length}</p>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={homeStyles.createSection}
      >
        <Link to="/create">
          <button>Новая запись</button>
        </Link>
      </div>
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
