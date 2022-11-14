interface Ticket {
  id: number;
  subject: string;
  description: string;
  priority: string;
  status: string;
}

interface TicketRowProps {
  index: number;
  ticketData: Ticket;
  fetchTicketsData: () => void;
}

interface TicketSystemContextInterface {
  state: { tickets: [] };
  dispatch: any;
}

export type { TicketRowProps, Ticket, TicketSystemContextInterface };
