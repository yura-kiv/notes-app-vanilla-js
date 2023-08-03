import callApi from "../helpers/apiHelper";

class NotesService {
  constructor() {
    this.endpointAll = "notes.json";
  }

  async getNotes() {
    try {
      const apiResult = await callApi(this.endpointAll);
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
