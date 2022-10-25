import { createRouter } from "next-connect";
import {
  hapusTicket,
  kerjakanTicket,
} from "../../../../../controller/agent-ticket.controller";
import auth from "../../../../../middleware/auth.middleware";

const router = createRouter();

// terima dan tidak terima
router.use(auth).patch(kerjakanTicket).delete(hapusTicket);

export default router.handler();
