import CustomersTickets from "../../src/components/CustomersTickets";
import Layout from "../../src/components/Layout";

const Tickets = () => {
  return <CustomersTickets status="all" />;
};

// add layout
Tickets.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

Tickets.Auth = {
  action: "manage",
  subject: "Tickets",
};

export default Tickets;
