import createElement from "../helpers/domHelper";
import notesService from "../services/notesService";
import { createBtn } from "./button";
import { getIcon } from "./icon";
import { getDateString } from "./noteModal";
import { refreshNotesTable, refreshSummaryTable } from "../helpers/refreshComponents";

async function archiveNoteHandler(event) {
  const id = event.currentTarget.parentNode.parentNode.getAttribute("note-id");
  const result = await notesService.archiveNote({ _id: id });
  refreshNotesTable();
  refreshSummaryTable();
}

async function deleteNoteHandler(event) {
  const id = event.currentTarget.parentNode.parentNode.getAttribute("note-id");
  const result = await notesService.deleteNote({ _id: id });
  refreshNotesTable();
  refreshSummaryTable();
}

function findDatesInContent(content) {
  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  const dates = content.match(dateRegex) || [];
  return dates.map((date) => formatDate(date));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

async function editNoteHandler(event) {
  const element = event.currentTarget;
  const id = event.currentTarget.parentNode.parentNode.getAttribute("note-id");
  const newName = prompt("Input new name", element.value);
  const newContent = prompt("Input new content", element.value);
  const newTime = getDateString();
  const result = await notesService.editNote({
    _id: id,
    newName,
    newContent,
    newTime,
  });
  refreshNotesTable();
}

export function createNoteRow(note) {
  const { _id, name, creationTime, content, category } = note;
  const noteRow = createElement({
    tagName: "tr",
    className: "note-row",
    attributes: { "note-id": note._id },
  });
  const datesMentioned = findDatesInContent(note.content);

  noteRow.innerHTML = `
          <td>${getIcon(category)}</td>
          <td>${name}</td>
          <td>${creationTime}</td>
          <td>${content}</td>
          <td>${category}</td>
          <td>${datesMentioned.join(", ")}</td>
        `;

  const editBtn = createElement({ tagName: "td" });
  editBtn.append(createBtn("edit-note-btn", getIcon("Edit"), editNoteHandler));

  const archiveBtn = createElement({ tagName: "td" });
  archiveBtn.append(createBtn("edit-note-btn", getIcon("Archive"), archiveNoteHandler));

  const deleteBtn = createElement({ tagName: "td" });
  deleteBtn.append(createBtn("edit-note-btn", getIcon("Delete"), deleteNoteHandler));

  noteRow.append(editBtn, archiveBtn, deleteBtn);
  return noteRow;
}
