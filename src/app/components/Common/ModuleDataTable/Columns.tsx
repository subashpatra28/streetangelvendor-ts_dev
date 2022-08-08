import React from "react";
import ASSETS from "../../../assets";

const Columns = ({
  columns,
  currentSortedCol,
  handleSortColumn
}: $TSFixMe) => {
  return (
    <thead className="tabModulehead">
      <tr>
        {columns.map((col: $TSFixMe, i: $TSFixMe) => {
          {
          }

          return (
            <th key={i}>
              <div className="tabModuleDiv">
                {col.title}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Columns;
