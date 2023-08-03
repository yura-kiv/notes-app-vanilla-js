import createElement from "../helpers/domHelper";
import { createBtn } from "./button";

function createNoteBtnHandler(event) {
  console.log("create");
}

export function createAddNoteBtn() {
  const addNoteBtn = createBtn(
    "create-note-btn",
    "Create note",
    createNoteBtnHandler
  );
  return addNoteBtn;
}
