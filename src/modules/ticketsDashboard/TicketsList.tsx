import React, { ReactHTMLElement, useState } from "react";
import { useTicketSystemContext } from "../../context/ticketsContext";
import { Ticket, TicketSystemContextInterface } from "../../types";
import { EmptyState } from "./sharedComponents";
import TicketRow from "./TicketRow";

const TicketsList: React.FC<{ fetchTicketsData: () => void }> = ({
  fetchTicketsData,
}) => {
  const { state }: TicketSystemContextInterface = useTicketSystemContext();
  const [scrollTop, setScrollTop] = useState(0);

  const itemHeight = 60;
  const ticketsNumber = state?.tickets?.length || 0;

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex =
    Math.min(ticketsNumber - 1, Math.ceil((scrollTop + 240) / itemHeight)) + 1;

  const slicedTickets = state?.tickets?.map?.(
    (ticket: Ticket, index: number) => {
      if (index < startIndex || index > endIndex) return null;

      return (
        <TicketRow
          key={ticket.id}
          index={index}
          ticketData={ticket}
          fetchTicketsData={fetchTicketsData}
        />
      );
    }
  );

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (Math.abs(e.currentTarget.scrollTop - scrollTop) > 60)
      setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div onScroll={onScroll} style={{ height: `240px`, overflowY: "scroll" }}>
      <div
        style={{
          height: `${(ticketsNumber || 0) * 60}px`,
          position: "relative",
        }}
      >
        {ticketsNumber > 0 ? slicedTickets : <EmptyState />}
      </div>
    </div>
  );
};

export default TicketsList;
