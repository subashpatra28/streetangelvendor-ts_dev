import React from "react";
import { resolveObjProp } from "./utils";

const Rows = ({
  columns,
  currentRows,
  onClickRow
}: $TSFixMe) => {
  const handleClick = (row: $TSFixMe) => {
    if (onClickRow) {
      onClickRow(row);
    }
  };

  const render = () => {
    return currentRows.map((row: $TSFixMe, i: $TSFixMe) => (
      <tr
        key={i}
        onClick={() => handleClick(row)}
        // className={i % 2 ? "" : null}
        className="hoverStyle"
      >
        {columns.map((col: $TSFixMe, j: $TSFixMe) => {
          const format = col.format || ((row: $TSFixMe) => resolveObjProp(col.data, row));
          return <td key={`${i}_${j}`}>{format(row)}</td>;
        })}
      </tr>
    ));
  };

  return <tbody>{render()}</tbody>;
};

export default Rows;
