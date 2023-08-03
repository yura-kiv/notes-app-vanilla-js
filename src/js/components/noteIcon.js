import ideaIcon from "../../assets/icons/idea.svg";
import randomIcon from "../../assets/icons/random.svg";
import taskIcon from "../../assets/icons/task.svg";

export function getNoteIcon(category) {
  switch (category) {
    case "Task":
      return `<img class="note-icon" src="${taskIcon}" alt="Note icon">`;
    case "Random Thought":
      return `<img class="note-icon" src="${randomIcon}" alt="Note icon">`;
    case "Idea":
      return `<img class="note-icon" src="${ideaIcon}" alt="Note icon">`;
    default:
      return "";
  }
}
