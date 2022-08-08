import React from "react";
import { resolveObjProp } from "./utils";

const Rows = ({ columns, currentRows, onClickRow }: $TSFixMe) => {
  const handleClick = (row: $TSFixMe) => {
    if (onClickRow) {
      onClickRow(row);
    }
  };

  const render = () => {
    return currentRows.map((row: $TSFixMe, i: $TSFixMe) => (
      <tr className="moduleRow" key={i} onClick={() => handleClick(row)}>
        {columns.map((col: $TSFixMe, j: $TSFixMe) => {
          const format =
            col.format || ((row: $TSFixMe) => resolveObjProp(col.data, row));
          return <td key={`${i}_${j}`}>{format(row)}</td>;
        })}
      </tr>
    ));
  };

  return <tbody>{render()}</tbody>;
};

export default Rows;
