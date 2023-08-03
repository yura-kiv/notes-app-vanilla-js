import createElement from "../helpers/domHelper";
import notesService from "../services/notesService";
import { createBtn } from "./button";
import { refreshNotesTable } from "./refreshComponents";

function showArchivedHandler(event, showArchived) {
  refreshNotesTable(!showArchived);
}

export function createShowArchivedBtn(showArchived) {
  const wrapper = createElement({ tagName: "th" });
  const innerText = showArchived === true ? "Show active" : "Show archive";
  const showArchivedBtn = createBtn("show-archive-btn", innerText, (event) => {
    showArchivedHandler(event, showArchived);
  });
  wrapper.append(showArchivedBtn);
  return wrapper;
}
