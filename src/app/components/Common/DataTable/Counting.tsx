import React from "react";

const Counting = ({
  currentPage,
  pageSize,
  currentMax,
}: {
  currentPage: number;
  pageSize: number;
  currentMax: number;
}) => {
  const from = (currentPage - 1) * pageSize + 1;
  let to = currentPage * pageSize;

  if (to > currentMax) {
    to = currentMax;
  }

  return (
    <p className="mt-1 outtab">
      Showing {from} to {to} of {currentMax} entries
    </p>
  );
};

export default Counting;
