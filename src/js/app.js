import { createAddNoteBtn } from "./components/addNoteBtn";
import { createNotesTable } from "./components/notesTable";
import notesService from "./services/notesService";

class App {
  static appElement = document.querySelector("#app");
  static loadingElement = document.querySelector(".loading-overlay");

  static async startApp() {
    try {
      App.loadingElement.style.display = "block";

      // Initialization of the app
      const notesData = await notesService.getNotes();
      const notesTable = createNotesTable(notesData);
      const addNoteBtn = createAddNoteBtn();
      App.appElement.append(notesTable, addNoteBtn);
    } catch (error) {
      console.warn(error);
      App.appElement.innerText = "Failed to load data";
    } finally {
      App.loadingElement.style.display = "none";
    }
  }
}

export default App;
