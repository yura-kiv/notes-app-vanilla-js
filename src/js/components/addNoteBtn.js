import createElement from "../helpers/domHelper";
import { createBtn } from "./button";

function createNoteBtnHandler(event) {
  const noteCreateModal = document.querySelector(".create-note-modal-wrapper");
  noteCreateModal.classList.remove("hidden");
}

export function createAddNoteBtn() {
  const addNoteBtn = createBtn(
    "create-note-btn",
    "Create note",
    createNoteBtnHandler
  );
  return addNoteBtn;
}
