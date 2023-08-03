import { getNoteIcon } from "./noteIcon";

export function renderNoteRow(note) {
  const { _id, name, creationTime, content, category, noteTimes } = note;
  const noteIcon = getNoteIcon(category);
  //   const datesMentioned = findDatesMentioned(note);

  return `
      <tr class="note-row">
        <td>${noteIcon}</td>
        <td>${name}</td>
        <td>${creationTime}</td>
        <td>${content}</td>
        <td>${category}</td>
        <td>${noteTimes.join(", ")}</td>
        <td>
          <button class="edit-note-btn">Edit</button>
        </td>
        <td>
          <button class="archive-note-btn">Archive</button>
        </td>
        <td>
          <button class="delete-note-btn">delete</button>
        </td>
      </tr>
    `;
}
