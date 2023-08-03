import notesService from "./services/notesService";
import createElement from "./helpers/domHelper";
import { renderNotesTable } from "./components/notesTable";

class App {
  static appElement = document.querySelector("#app");
  static loadingElement = document.querySelector(".loading-overlay");

  static async startApp() {
    try {
      App.loadingElement.style.display = "block";
      const notesData = await notesService.getNotes();
      const notesTable = renderNotesTable(notesData);
      App.appElement.append(notesTable);
    } catch (error) {
      console.warn(error);
      App.appElement.innerText = "Failed to load data";
    } finally {
      App.loadingElement.style.display = "none";
    }
  }
}

export default App;
