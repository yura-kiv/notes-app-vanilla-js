import createElement from "../helpers/domHelper";
import { createNoteRow } from "./noteRow";
import { getIcon } from "./icon";
import { categories } from "../../assets/categories";

const headerColumns = ["Note category", "Active", "Archived"];

function getSummaryStatistic(notesData) {
  const summaryStatistic = {};
  categories.forEach((category) => {
    let countActive = 0;
    let countArchive = 0;
    notesData.forEach((note) => {
      if (note.category === category) {
        note.status === "active" ? countActive++ : countArchive++;
      }
    });
    summaryStatistic[category] = { countActive, countArchive };
  });
  return summaryStatistic;
}

function createSummaryRow(name, statistic) {
  const summaryRow = createElement({ tagName: "tr", className: "note-row" });
  summaryRow.innerHTML = `<td>${name}</td>
                          <td>${statistic.countActive}</td>
                          <td>${statistic.countArchive}</td>`;
  return summaryRow;
}

export function createSummaryTable(notesData) {
  const summaryStatistic = getSummaryStatistic(notesData);

  const summaryTable = createElement({
    tagName: "table",
    className: "summary-table",
  });
  const tableHeader = createElement({
    tagName: "tr",
    className: "table-header",
  });

  headerColumns.forEach((column) => {
    const columnName = createElement({
      tagName: "th",
      className: "table-header_column-name",
    });
    columnName.innerHTML = column;
    tableHeader.append(columnName);
  });
  summaryTable.append(tableHeader);

  for (const category in summaryStatistic) {
    const summaryRow = createSummaryRow(category, summaryStatistic[category]);
    summaryTable.append(summaryRow);
  }

  return summaryTable;
}
