import { useState, useEffect } from "react";
import DataTable from "../../../Common/DataTable";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { connect } from "react-redux";
import { getSupportTicket } from "../../../../redux/reducers/Management&Settings/supportTicket/supportTicket.actions";
import moment from "moment";
import { AppDispatch } from "../../../../redux/store/store";
import { SupportTicket } from "../../../../../global.types";
import { RootState } from "../../../../redux/reducers/rootReducer";
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const SupportTicketTab = (props: Props) => {
  const [supportTicketList, setSupportTicketsList] = useState<SupportTicket[]>(
    []
  );
  console.log("Support Ticket>>>>>>>>", props);

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getSupportTicket();
    } catch (error) {
      console.log("error in DriverManagementTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  useEffect(() => {
    setSupportTicketsList([...(props.supportTickets.result ?? [])]);
    return () => {};
  }, [props.supportTickets]);

  const columns = [
    { title: "Id", data: "id" },
    {
      title: "Date",
      format: (data: $TSFixMe) => moment(data.date).format("DD-MM-YYYY"),
    },
    { title: "Organization", data: "organizationId.name" },
    { title: "Contact", data: "contact" },
    { title: "Message", data: "message" },
    {
      title: "MessageStatus",
      format: (data: $TSFixMe) => <>{"" + data.messageStatus}</>,
    },
    {
      title: "Status",
      format: (data: $TSFixMe) => <>{"" + data.status}</>,
    },
  ];

  return (
    <>
      <DataTable
        data={supportTicketList}
        columns={columns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  supportTickets: state.supportTicketsData.supportTickets,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getSupportTicket: () => dispatch(getSupportTicket()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SupportTicketTab);
