import Layout from "./layout";
import { TicketSystemProvider } from "./context/ticketsContext";
import Home from "./pages/Home";
import React from "react";

function App() {
  return (
    <TicketSystemProvider>
      <Layout>
        <Home />
      </Layout>
    </TicketSystemProvider>
  );
}

export default App;
