import { Card, CardBody, CardHeader, CardTitle } from "../Card/Card";
import moment from "moment";
import "moment/dist/locale/ru";

export default function Tasks({ tasks }: any) {
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
              return <TodoItem task={task} left={relativeTime} />;
            })}
          </>
        )}
      </div>
    </>
  );
}

const TodoItem = ({ task, left }: any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{left}</CardTitle>
      </CardHeader>
      <CardBody>
        <div dangerouslySetInnerHTML={{ __html: task.content }}></div>
      </CardBody>
    </Card>
  );
};
