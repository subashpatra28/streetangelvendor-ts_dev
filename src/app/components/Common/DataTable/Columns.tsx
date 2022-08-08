import React from "react";
import ASSETS from "../../../assets";

const Columns = ({
  columns,
  currentSortedCol,
  handleSortColumn
}: $TSFixMe) => {
  return (
    <thead className="tabhead">
      <tr>
        {columns.map((col: $TSFixMe, i: $TSFixMe) => {
          let nextSort = 1;
          let iconSorted = ASSETS.ICON_NEW_5;
          if (i === currentSortedCol.idx) {
            if (currentSortedCol.sortedBy === 1) {
              iconSorted = ASSETS.ICON_NEW_3;
              nextSort = -1;
            } else if (currentSortedCol.sortedBy === -1) {
              iconSorted = ASSETS.ICON_NEW_4;
            }
          }

          return (
            <th key={i} onClick={() => handleSortColumn(i, nextSort)}>
              <div
                className="assi">
                {col.title}{" "}
                {col.title !== "Action" ? (
                  <img
                    src={iconSorted}
                    alt={`Sort ${col.title}`}
                    className="columImage"
                  />
                ) : (
                  ""
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Columns;
