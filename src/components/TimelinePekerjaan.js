import { Text, Timeline } from "@mantine/core";
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
} from "@tabler/icons";
import { fromNow, setActivePekerjaan } from "../../utils";

function TimelinePekerjaan({ data }) {
  return (
    <Timeline active={setActivePekerjaan(data)} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="Diajukan">
        <Text color="dimmed" size="sm">
          Status tiket mu diajukan
        </Text>
        <Text size="xs" mt={4}>
          {fromNow(data?.created_at)}
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Dikerjakan">
        {data?.status_code === "DIKERJAKAN" ? (
          <>
            <Text color="dimmed" size="sm">
              Status tiket mu dikerjakan oleh {data?.agent?.username}
            </Text>
            <Text size="xs" mt={4}>
              {fromNow(data?.start_work_at)}
            </Text>
          </>
        ) : (
          <Text color="dimmed" size="sm">
            Belum dikerjakan
          </Text>
        )}
      </Timeline.Item>
      <Timeline.Item
        title="Selesai"
        bullet={<IconGitPullRequest size={12} />}
        lineVariant="dashed"
      >
        {data?.status_code === "SELESAI" ? (
          <>
            <Text color="dimmed" size="sm">
              Status tiket mu selesai
            </Text>
            <Text size="xs" mt={4}>
              {fromNow(data?.completed_at)}
            </Text>
          </>
        ) : (
          <Text color="dimmed" size="sm">
            Belum Selesai
          </Text>
        )}
      </Timeline.Item>
    </Timeline>
  );
}

export default TimelinePekerjaan;