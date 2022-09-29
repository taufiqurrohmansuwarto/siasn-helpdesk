import { createRouter } from "next-connect";
import auth from "../../middleware/auth.middleware";

const router = createRouter();

router.use(auth).get(async (req, res) => {
  res.json({ message: "Hello World!" });
});

export default router.handler({});
