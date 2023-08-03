import notes from "../../assets/notes.json";

export default async function callApi(endpoint) {
  const url = endpoint;

  function getNoteById(endpoint) {
    const start = endpoint.lastIndexOf("/");
    const end = endpoint.lastIndexOf(".json");
    const id = endpoint.substring(start + 1, end);
    return notes.find((item) => item._id === +id);
  }

  async function fakeCallApi(endpoint) {
    const response = endpoint === "notes.json" ? notes : getNoteById(endpoint);
    return new Promise((resolve, reject) => {
      setTimeout(
        () => (response ? resolve(response) : reject(Error("Failed to load"))),
        800
      );
    });
  }

  return fakeCallApi(endpoint);
}
