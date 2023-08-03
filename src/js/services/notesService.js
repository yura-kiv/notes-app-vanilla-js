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

  async addNote(payload) {
    try {
      const apiResult = await callApi(`notes/add.json`, payload);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async archiveNote(payload) {
    try {
      const apiResult = await callApi(`notes/archive.json`, payload);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async editNote(payload) {
    try {
      const apiResult = await callApi(`notes/edit.json`, payload);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async deleteNote(payload) {
    try {
      const apiResult = await callApi(`notes/delete.json`, payload);
      return apiResult;
    } catch (error) {
      throw error;
    }
  }
}

const notesService = new NotesService();

export default notesService;
