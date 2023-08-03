import notes from "../../assets/notes.json";

export default async function callApi(endpoint, payload = {}) {
  function getNoteById(endpoint) {
    const start = endpoint.lastIndexOf("/");
    const end = endpoint.lastIndexOf(".json");
    const id = endpoint.substring(start + 1, end);
    return notes.find((item) => item._id === +id);
  }

  function addNote(payload) {
    notes.push(payload);
    return "Successfully added!";
  }

  function deleteNote(payload) {
    const indexToDelete = notes.findIndex((note) => note._id === +payload._id);
    if (indexToDelete !== -1) {
      notes.splice(indexToDelete, 1);
    }
    return "Successfully deleted!";
  }

  function editNote(payload) {
    const { newName, newContent, newTime } = payload;
    const note = notes.find((note) => {
      return note._id === +payload._id;
    });
    note.name = newName;
    note.content = newContent;
    note.creationTime = newTime;
    return "Successfully edited!";
  }

  function archiveToggleNote(payload) {
    const note = notes.find((note) => {
      return note._id === +payload._id;
    });
    note.status = note.status === "active" ? "archived" : "active";
    return "Successfully archived!";
  }

  async function fakeCallApi(endpoint) {
    let response = [];

    if (endpoint === "notes.json") {
      response = notes;
    } else if (endpoint === "notes/add.json") {
      response = addNote(payload);
    } else if (endpoint === "notes/delete.json") {
      response = deleteNote(payload);
    } else if (endpoint === "notes/archive.json") {
      response = archiveToggleNote(payload);
    } else if (endpoint === "notes/edit.json") {
      response = editNote(payload);
    } else {
      response = getNoteById(endpoint);
    }

    return new Promise((resolve, reject) => {
      setTimeout(
        () => (response ? resolve(response) : reject(Error("Failed to load"))),
        200
      );
    });
  }

  return fakeCallApi(endpoint);
}
