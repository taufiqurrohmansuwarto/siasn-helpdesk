import { createRouter } from "next-connect";
import {
  create,
  index,
} from "../../../../controller/admin-sub-categories.controller";
import auth from "../../../../middleware/auth.middleware";
const router = createRouter();

router.use(auth).get(index).post(create);

export default router.handler();
