import { AppActions } from "../../../store/globalstore";
import {
  GetSupportTicketResp,
  ISupportTicketList,
} from "../../../../../global.types";
import {
  ADD_SUPPORT_TICKET_SUCCESS,
  DELETE_SUPPORT_TICKET_SUCCESS,
  EDIT_SUPPORT_TICKET_SUCCESS,
  GET_SUPPORT_TICKET_SUCCESS,
} from "./supportTicket.types";

interface InitialState {
  supportTickets: Partial<GetSupportTicketResp>;
}

// initial State
const initialState: InitialState = {
  supportTickets: {},
};

export const supportTicketReducer = (
  state = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case GET_SUPPORT_TICKET_SUCCESS:
      return {
        ...state,
        supportTickets: action.payload,
      };
    case ADD_SUPPORT_TICKET_SUCCESS:
      return {
        ...state,
        supportTickets: {
          ...state.supportTickets,
          result: state.supportTickets?.result?.length
            ? [...state.supportTickets.result, action.payload.result]
            : [action.payload.result],
        },
      };

    default:
      return state;
  }
};
