import { AddSupportTicket } from "../../../../../global.types";
import { GET_SUPPORT_TICKET, ADD_SUPPORT_TICKET } from "./supportTicket.types";

export const getSupportTicket = () => {
  console.log("get support ticket received");
  return {
    type: GET_SUPPORT_TICKET as typeof GET_SUPPORT_TICKET,
    meta: {
      thunk: true,
    },
  };
};

export const AddSupportTicketCode = (data: AddSupportTicket) => {
  return {
    type: ADD_SUPPORT_TICKET as typeof ADD_SUPPORT_TICKET,
    data,
    meta: {
      thunk: true,
    },
  };
};
