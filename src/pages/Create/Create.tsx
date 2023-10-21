import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../../components/Card/Card";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { useNavigate } from "react-router-dom";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import createStyles from "./Create.module.css";

export default function Create({ setTasks, tasks }: any) {
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState<any>(
    EditorState.createEmpty()
  );
  const [date, setDate] = useState<string>("");

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  return (
    <>
      <div className={createStyles.cardContainer}>
        <Card>
          <CardHeader>
            <button
              style={{ display: "block", marginBottom: "20px" }}
              onClick={() => navigate(-1)}
            >
              Вернуться назад
            </button>
            <CardTitle>НОВАЯ ЗАПИСЬ</CardTitle>
          </CardHeader>
          <CardBody>
            <h3>Выберите дату</h3>
            <input
              type="date"
              style={{
                marginTop: "10px",
                marginBottom: "20px",
              }}
              onChange={(e) => setDate(e.target.value)}
            />
            <Editor
              onEditorStateChange={onEditorStateChange}
              editorState={editorState}
              placeholder="Начните что-то писать..."
            />
          </CardBody>
          <CardFooter>
            <button
              onClick={() => {
                if (date || editorState.getCurrentContent().hasText()) {
                  setTasks((current: []) => [
                    ...current,
                    {
                      id: tasks.length,
                      content: draftToHtml(
                        convertToRaw(editorState.getCurrentContent())
                      ),
                      date,
                    },
                  ]);
                  navigate(-1);
                }
              }}
              disabled={!date || !editorState.getCurrentContent().hasText()}
            >
              Сохранить
            </button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
