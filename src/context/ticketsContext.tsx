import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { TicketSystemContextInterface } from "../types";

const TicketSystemContext = createContext<TicketSystemContextInterface>({
  state: { tickets: [] },
  dispatch: null,
});

/**
 * Main reducer of the app
 */
const ticketSystemReducer = (
  state = { tickets: [] },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "GET_TICKETS":
      return { ...state, tickets: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

/**
 * Context Provider
 */
const TicketSystemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(
    ticketSystemReducer,
    {}
  );
  const value: TicketSystemContextInterface = { state, dispatch };

  return (
    <TicketSystemContext.Provider value={value}>
      {children}
    </TicketSystemContext.Provider>
  );
};

/**
 * Custom hook that return dispatch function and state
 */
const useTicketSystemContext = () => {
  const context = useContext(TicketSystemContext);
  if (context === undefined) {
    throw new Error(
      "useTicketSystemContext must be used within a ticketSystemProvider"
    );
  }
  return context;
};
export { TicketSystemProvider, useTicketSystemContext };
