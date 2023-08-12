import createElement from "../helpers/domHelper";
import { categories } from "../../assets/categories";
import { createBtn } from "./button";
import notesService from "../services/notesService";
import { refreshNotesTable, refreshSummaryTable } from "../helpers/refreshComponents";

export function getDateString() {
  const currentDate = new Date();
  const optionsDate = { month: "long", day: "numeric", year: "numeric" };
  return currentDate.toLocaleDateString("en-US", optionsDate);
}

async function addNoteHandler(event) {
  event.target.innerHTML = "Loading...";
  const name = document.querySelector("#name-input");
  const content = document.querySelector("#note-content");
  const category = document.querySelector("#category-select");
  const creationTime = getDateString();
  const _id = Date.now();

  const result = await notesService.addNote({
    _id,
    name: name.value,
    content: content.value,
    category: category.value,
    creationTime,
    status: "active",
  });

  event.target.innerHTML = "Add note";
  event.target.parentNode.parentNode.classList.add("hidden");
  name.value = "";
  content.value = "";
  await refreshNotesTable();
  await refreshSummaryTable();
}

function closeModalHandler(event) {
  event.target.classList.add("hidden");
}

export function createNoteModal() {
  const modalWindowWrapper = createElement({
    tagName: "div",
    className: "create-note-modal-wrapper hidden",
  });
  modalWindowWrapper.addEventListener("click", closeModalHandler);

  const modalWindow = createElement({
    tagName: "div",
    className: "create-note-modal",
  });

  const nameInput = createElement({
    tagName: "input",
    className: "name-input",
    attributes: { type: "text", id: "name-input", placeholder: "Name" },
  });

  const noteContent = createElement({
    tagName: "textarea",
    className: "note-content",
    attributes: { id: "note-content", placeholder: "Description..." },
  });

  const categorySelect = createElement({
    tagName: "select",
    className: "category-select",
    attributes: { id: "category-select" },
  });
  categories.forEach((category) => {
    const categoryElement = createElement({
      tagName: "option",
      className: "category-select_option",
    });
    categoryElement.innerHTML = category;
    categorySelect.append(categoryElement);
  });

  const addNoteBtn = createBtn("add-note-btn", "Add note", addNoteHandler);

  modalWindow.append(nameInput, noteContent, categorySelect, addNoteBtn);
  modalWindowWrapper.append(modalWindow);
  return modalWindowWrapper;
}
