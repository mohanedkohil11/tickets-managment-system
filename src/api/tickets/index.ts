import requester from "../requester";

export const getTickets = async () => {
  try {
    const response = await requester.get("/tickets");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTicket = async (id: number) => {
  try {
    const response = await requester.delete(`/tickets/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addTickets = async () => {
  try {
    const response = await requester.post("/tickets", { status: "NEW" });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
