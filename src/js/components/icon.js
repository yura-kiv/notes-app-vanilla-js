import editIcon from "../../assets/icons/edit.svg";
import archiveIcon from "../../assets/icons/archive.svg";
import deleteIcon from "../../assets/icons/trash.svg";
import taskIcon from "../../assets/icons/task.svg";
import randomIcon from "../../assets/icons/random.svg";
import ideaIcon from "../../assets/icons/idea.svg";

export function getIcon(category) {
  switch (category) {
    case "Task":
      return `<img class="note-icon" src="${taskIcon}" alt="${category} icon">`;
    case "Random Thought":
      return `<img class="note-icon" src="${randomIcon}" alt="${category} icon">`;
    case "Idea":
      return `<img class="note-icon" src="${ideaIcon}" alt="${category} icon">`;
    case "Edit":
      return `<img class="note-icon" src="${editIcon}" alt="${category} icon">`;
    case "Delete":
      return `<img class="note-icon" src="${deleteIcon}" alt="${category} icon">`;
    case "Archive":
      return `<img class="note-icon" src="${archiveIcon}" alt="${category} icon">`;
    default:
      return "";
  }
}
