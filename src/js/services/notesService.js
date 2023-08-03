import callApi from "../helpers/apiHelper";

class NotesService {
  async getNotes() {
    try {
      const apiResult = await callApi("notes.json");
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getNote(id) {
    try {
      const apiResult = await callApi(`notes/${id}.json`);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }
}

const notesService = new NotesService();

export default notesService;
