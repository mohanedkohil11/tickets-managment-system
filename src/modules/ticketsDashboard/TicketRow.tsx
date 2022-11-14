import React from "react";
import { API } from "../../api";
import { ReactComponent as DeleteSVG } from "../../assets/delete.svg";
import { TicketRowProps } from "../../types";


const TicketRow: React.FC<TicketRowProps> = ({
  index,
  ticketData,
  fetchTicketsData,
}) => {
  const { id, subject, description, priority, status } = ticketData;

  /**
   * Called to delete an tickets
   */
  const onDeleteTicket = () => {
    if (window.confirm("Are You Sure You Want To Delete This Ticket")) {
      API.deleteTicket(id)
        .then(() => {
          alert("Ticket Deleted Successfully");
          fetchTicketsData();
        })
        .catch(() => {
          alert("Something went wrong, Check console for more details");
        });
    }
  };

  return (
    <div
      className="ticket-row"
      style={{
        position: "absolute",
        top: `${index * 60}px`,
        width: "100%",
      }}
    >
      <div>{subject}</div>
      <div>{priority}</div>
      <div>{status}</div>
      <div>{description}</div>
      <span className="ticket-row__delete-btn" onClick={onDeleteTicket}>
        <DeleteSVG />
      </span>
    </div>
  );
};

export default TicketRow;
