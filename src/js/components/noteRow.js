import createElement from "../helpers/domHelper";
import { createBtn } from "./button";
import { getIcon } from "./icon";

function editNoteHandler(event) {
  console.log(event);
}

function archiveNoteHandler() {
  console.log("archive");
}

function deleteNoteHandler() {
  console.log("delete");
}

export function createNoteRow(note) {
  const { _id, name, creationTime, content, category, noteTimes } = note;
  const noteRow = createElement({ tagName: "tr", className: "note-row" });
  noteRow.innerHTML = `
          <td>${getIcon(category)}</td>
          <td>${name}</td>
          <td>${creationTime}</td>
          <td>${content}</td>
          <td>${category}</td>
          <td>${noteTimes.join(", ")}</td>
          `;

  const editBtn = createElement({ tagName: "td" });
  editBtn.append(createBtn("edit-note-btn", getIcon("Edit"), editNoteHandler));

  const archiveBtn = createElement({ tagName: "td" });
  archiveBtn.append(
    createBtn("edit-note-btn", getIcon("Archive"), archiveNoteHandler)
  );

  const deleteBtn = createElement({ tagName: "td" });
  deleteBtn.append(
    createBtn("edit-note-btn", getIcon("Delete"), deleteNoteHandler)
  );

  noteRow.append(editBtn, archiveBtn, deleteBtn);
  return noteRow;
}
