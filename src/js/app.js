import { createAddNoteBtn } from "./components/addNoteBtn";
import { createNoteModal } from "./components/noteModal";
import { createNotesTable } from "./components/notesTable";
import { createShowArchivedBtn } from "./components/showArchivedBtn";
import { createSummaryTable } from "./components/summaryTable";
import notesService from "./services/notesService";

class App {
  static appElement = document.querySelector("#app");
  static loadingElement = document.querySelector(".loading-overlay");

  static async startApp() {
    try {
      App.loadingElement.style.display = "block";
      // Initialization of the app
      const noteModal = createNoteModal();
      const notesData = await notesService.getNotes();
      const notesTable = createNotesTable(notesData);
      const addNoteBtn = createAddNoteBtn();
      const summaryTable = createSummaryTable(notesData);
      App.appElement.append(noteModal, notesTable, addNoteBtn, summaryTable);
    } catch (error) {
      console.warn(error);
      App.appElement.innerText = "Failed to load data";
    } finally {
      App.loadingElement.style.display = "none";
    }
  }
}

export default App;
