import createElement from "../helpers/domHelper";
import { createNoteRow } from "./noteRow";
import { getIcon } from "./icon";
import { createShowArchivedBtn } from "./showArchivedBtn";

const headerColumns = [
  "Name",
  "Created",
  "Content",
  "Category",
  "Dates",
  getIcon("Edit"),
  getIcon("Archive"),
  getIcon("Delete"),
];

export function createNotesTable(notesData, showArchived = false) {
  const notesTable = createElement({
    tagName: "table",
    className: "notes-table",
  });
  const tableHeader = createElement({
    tagName: "tr",
    className: "table-header",
  });
  const showArchivedBtn = createShowArchivedBtn(showArchived);

  headerColumns.forEach((column) => {
    const columnName = createElement({
      tagName: "th",
      className: "table-header_column-name",
    });
    columnName.innerHTML = column;
    tableHeader.append(columnName);
  });
  tableHeader.insertBefore(showArchivedBtn, tableHeader.firstChild);
  notesTable.append(tableHeader);

  notesData.forEach((note) => {
    if (showArchived) {
      note.status === "archived"
        ? notesTable.append(createNoteRow(note))
        : null;
    } else {
      note.status !== "archived"
        ? notesTable.append(createNoteRow(note))
        : null;
    }
  });
  return notesTable;
}
