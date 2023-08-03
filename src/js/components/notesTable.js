import createElement from "../helpers/domHelper";
import { createNoteRow } from "./noteRow";
import { getIcon } from "./icon";

const headerColumns = [
  "",
  "Name",
  "Created",
  "Category",
  "Content",
  "Dates",
  getIcon("Edit"),
  getIcon("Archive"),
  getIcon("Delete"),
];

export function createNotesTable(notesData) {
  const notesTable = createElement({
    tagName: "table",
    className: "notes-table",
  });
  const tableHeader = createElement({
    tagName: "tr",
    className: "table-header",
  });

  headerColumns.forEach((column) => {
    const columnName = createElement({
      tagName: "th",
      className: "table-header_column-name",
    });
    columnName.innerHTML = column;
    tableHeader.append(columnName);
  });
  notesTable.append(tableHeader);

  notesData.forEach((note) => {
    const noteRow = createNoteRow(note);
    notesTable.append(noteRow);
  });
  return notesTable;
}
