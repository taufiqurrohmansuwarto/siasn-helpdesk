import { useQuery } from "@tanstack/react-query";
import { Result, Skeleton } from "antd";
import { useRouter } from "next/router";
import { detailTicket } from "../../../services/users.services";
import ActiveLayout from "../../../src/components/ActiveLayout";
import ChatsCustomerToAgent from "../../../src/components/ChatsCustomerToAgent";
import Layout from "../../../src/components/Layout";

const LockedChat = () => {
  return (
    <Result
      status="403"
      title="Kunci Chat"
      subTitle="Chat masih terkunci karena status masih diajukan"
    />
  );
};

const DetailTicket = () => {
  const router = useRouter();
  const { id } = router?.query;
  const { data, isLoading } = useQuery(["tickets", id], () => detailTicket(id));

  return (
    <ActiveLayout id={id} active="chats-to-agents" role="requester">
      <Skeleton loading={isLoading}>
        {data?.status_code === "DIAJUKAN" ? (
          <LockedChat />
        ) : (
          <div>
            <ChatsCustomerToAgent detailTicket={data} id={id} />
          </div>
        )}
      </Skeleton>
    </ActiveLayout>
  );
};

DetailTicket.Auth = {
  action: "manage",
  subject: "Tickets",
};

DetailTicket.getLayout = function (page) {
  return <Layout active={"/tickets"}>{page}</Layout>;
};

export default DetailTicket;
