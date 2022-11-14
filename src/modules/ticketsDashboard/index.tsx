import { API } from "../../api";
import React, { useCallback, useEffect } from "react";
import { useTicketSystemContext } from "../../context/ticketsContext";
import { AddNewTicketButton, TableHeader } from "./sharedComponents";
import "./ticketsTable.scss";
import TicketsList from "./TicketsList";

export default function TicketsTable() {
  const { dispatch } = useTicketSystemContext();

  /**
   * Called to fetch Tickets
   */
  const fetchTicketsData = useCallback(() => {
    API.getTickets()
      .then((payload) => {
        dispatch({ type: "GET_TICKETS", payload });
      })
      .catch(() => {
        alert("Something went wrong, Check console for more details");
      });
  }, [dispatch]);

  /**
   * Called to add Ticket
   */
  const addNewTicket = () => {
    API.addTickets()
      .then(() => {
        alert("Ticket Added Successfully");
        fetchTicketsData();
      })
      .catch(() => {
        alert("Something went wrong, Check console for more details");
      });
  };

  useEffect(() => {
    fetchTicketsData();
  }, [fetchTicketsData]);

  return (
    <div className="general-container tickets-table">
      <AddNewTicketButton addNewTicket={addNewTicket} />
      <div>
        <TableHeader />
        <TicketsList fetchTicketsData={fetchTicketsData} />
      </div>
    </div>
  );
}
