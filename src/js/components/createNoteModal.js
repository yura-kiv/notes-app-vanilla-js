import createElement from "../helpers/domHelper";
import { categories } from "../../assets/categories";
import { createBtn } from "./button";

function addNoteHandler(event) {
  console.log("add note");
}

export function createNoteModal() {
  const modalWindowWrapper = createElement({
    tagName: "div",
    className: "create-note-modal-wrapper hidden",
  });

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
