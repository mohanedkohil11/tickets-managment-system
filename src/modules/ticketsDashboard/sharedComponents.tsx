import React from "react";
import noData from "../../assets/nodata.png";

const AddNewTicketButton: React.FC<{ addNewTicket: () => void }> = ({
  addNewTicket,
}) => {
  return (
    // button to add new Ticket
    <button className="tickets-table__add-btn" onClick={addNewTicket}>
      ADD NEW TICKET
    </button>
  );
};

const TableHeader: React.FC = () => (
  // table headers
  <div className="tickets-table__header">
    <span>SUBJECT</span>
    <span>PRIORITY</span>
    <span>STATUS</span>
    <span>DESCRIPTION</span>
  </div>
);

const EmptyState: React.FC = () => (
  // no data component
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img width={100} src={noData} alt="no data" />
  </div>
);

export { AddNewTicketButton, TableHeader, EmptyState };
