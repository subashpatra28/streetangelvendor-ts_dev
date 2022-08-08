import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const Pagination = ({ currentPage, handleCurrentPage, maxPage }: $TSFixMe) => {
  const offsets = 3;

  const render = () => {
    const buttons = [];

    let temp = Math.floor(currentPage / offsets);

    let a = temp * offsets - 1;
    let z = temp * offsets + offsets;

    if (a <= 0) {
      a = 1;
    }

    if (z >= maxPage) {
      z = maxPage;
    }

    for (let i = a; i <= z; i++) {
      let key = i;
      let disabled = false;
      let outline = true;
      let style = { boxShadow: "0 0 0 0.2rem rgb(0 122 225 / 15%" };
      if (i === currentPage) {
        // key = null;
        disabled = true;
        outline = false;
        // @ts-expect-error TS(2322): Type 'boolean' is not assignable to type '{ boxSha... Remove this comment to see the full error message
        style = false;
      }
      const btn = (
        <Button
          className="outtab paginationButton"
          key={i}
          color="primary"
          outline={outline}
          disabled={disabled}
          onClick={() => handleCurrentPage(key)}
        >
          {i}
        </Button>
      );
      buttons.push(btn);
    }
    return buttons;
  };

  return (
    <ButtonGroup>
      <Button
        className="outtab paginationButton2"
        outline={true}
        disabled={currentPage - 1 < 1}
        onClick={() => handleCurrentPage(currentPage - 1)}
      >
        Previous
      </Button>
      {render()}
      <Button
        className="outtab paginationButton3"
        outline={true}
        disabled={currentPage + 1 > maxPage}
        onClick={() => handleCurrentPage(currentPage + 1)}
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
