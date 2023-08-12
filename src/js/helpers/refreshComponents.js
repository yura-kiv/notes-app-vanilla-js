import notesService from "../services/notesService";
import { createNotesTable } from "../components/notesTable";
import { createSummaryTable } from "../components/summaryTable";

export async function refreshNotesTable(showArchived = false) {
  const notesTable = document.querySelector(".notes-table");
  notesTable.style.opacity = 0.5;

  const notesData = await notesService.getNotes();
  const newNotesTable = createNotesTable(notesData, showArchived);

  notesTable.parentNode.replaceChild(newNotesTable, notesTable);
  notesTable.style.opacity = 1;
}

export async function refreshSummaryTable() {
  const summaryTable = document.querySelector(".summary-table");
  summaryTable.style.opacity = 0.5;

  const notesData = await notesService.getNotes();
  const newSummaryTable = createSummaryTable(notesData);

  summaryTable.parentNode.replaceChild(newSummaryTable, summaryTable);
  summaryTable.style.opacity = 1;
}
