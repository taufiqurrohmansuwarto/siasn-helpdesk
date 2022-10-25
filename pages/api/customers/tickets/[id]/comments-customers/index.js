import { createRouter } from "next-connect";
import auth from "../../../../../../middleware/auth.middleware";

const router = createRouter();

router.use(auth).post().get();

export default router.handler();
