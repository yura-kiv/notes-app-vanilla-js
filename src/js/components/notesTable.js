import createElement from "../helpers/domHelper";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/trash.svg";
import archiveIcon from "../../assets/icons/archive.svg";
import { renderNoteRow } from "./noteRow";

export function renderNotesTable(notesData) {
  const notesTable = createElement({
    tagName: "div",
    className: "notes-table",
  });
  notesTable.innerHTML = "<h2>Notes</h2>";

  const tableHTML = `
      <table class="notes-table">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th>
            <img class="note-icon" src="${editIcon}" alt="Note icon">
          </th>
          <th>
            <img class="note-icon" src="${archiveIcon}" alt="Note icon">
          </th>
          <th>
            <img class="note-icon" src="${deleteIcon}" alt="Note icon">
          </th>
        </tr>
        ${notesData
          .map((note) => {
            return renderNoteRow(note);
          })
          .join("")}
      </table>
    `;

  notesTable.innerHTML += tableHTML;
  return notesTable;
}
