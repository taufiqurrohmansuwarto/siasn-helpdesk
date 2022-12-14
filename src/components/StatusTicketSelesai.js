import { Paper, Stack } from "@mantine/core";
import { Avatar, Button, Rate, Result, Space } from "antd";
import ButtonFeedback from "./ButtonFeedback";
import CustomerAdminAgent from "./CustomerAdminAgent";
import { DetailTicket } from "./DetailTicket";
import TimelinePekerjaan from "./TimelinePekerjaan";

const Feedback = ({ data }) => {
  if (!data?.has_feedback) {
    return <ButtonFeedback id={data?.id} />;
  } else {
    return <Rate disabled defaultValue={data?.stars} />;
  }
};

const Subtitle = ({ data }) => {
  if (data?.has_feedback) {
    return "Tiket yang kamu ajukan selesai. Terima Kasih";
  } else {
    return "Tiket yang kamu ajukan selesai. Untuk meningkatkan kualitas layanan, silahkan berikan umpan balik ke kami. Terima Kasih";
  }
};

function StatusTicketSelesai({ data }) {
  return (
    <Result
      status="success"
      title="Selesai"
      subTitle={<Subtitle data={data} />}
      extra={[<Feedback data={data} key="feedback" />]}
    >
      <Stack>
        <DetailTicket data={data} />
        <TimelinePekerjaan data={data} />
        <CustomerAdminAgent data={data} />
      </Stack>
    </Result>
  );
}

export default StatusTicketSelesai;
