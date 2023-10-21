import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../Card/Card";
import moment from "moment";
import "moment/dist/locale/ru";
import styles from "./Tasks.module.css";
import { TrashIcon } from "@radix-ui/react-icons";

export default function Tasks({ tasks, setTasks }: any) {
  return (
    <>
      <div className="tasks">
        {tasks.length === 0 ? (
          <></>
        ) : (
          <>
            {tasks.map((task: any) => {
              const formattedDate = new Date(task.date);
              const relativeTime = moment(formattedDate).fromNow();
              return (
                <TodoItem
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                  left={relativeTime}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

const TodoItem = ({ task, left, setTasks, tasks }: any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{left}</CardTitle>
      </CardHeader>
      <CardBody>
        <div dangerouslySetInnerHTML={{ __html: task.content }}></div>
      </CardBody>
      <CardFooter>
        <button
          className={styles.trash}
          onClick={() => {
            console.log(tasks);
            const updatedTasks = [...tasks];
            let arrayOfObjects: any = updatedTasks.filter(
              (obj) => obj.content !== task.content
            );
            setTasks(() => [
              ...arrayOfObjects.slice().sort((a: any, b: any) => {
                const dateA: any = new Date(a.date);
                const dateB: any = new Date(b.date);
                return dateA - dateB;
              }),
            ]);
          }}
        >
          <TrashIcon />
        </button>
      </CardFooter>
    </Card>
  );
};
