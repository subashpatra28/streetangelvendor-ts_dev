import React from "react";
import DataTable from "../../../../../Common/DataTable";
import { tripsHighEventsColumns, tripsHighEventsData } from "../../../../../../constants";

const HighEvents = () => {

  return (
    <>
      <DataTable
        data={tripsHighEventsData}
        columns={tripsHighEventsColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

export default HighEvents;
