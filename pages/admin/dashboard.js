import AdminLayout from "../../src/components/AdminLayout";
import PageContainer from "../../src/components/PageContainer";

const Dashboard = () => {
  return (
    <PageContainer>
      <div>dashboard</div>
    </PageContainer>
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout active="/admin/dashboard">{page}</AdminLayout>;
};

Dashboard.Auth = {
  action: "manage",
  subject: "DashboardAdmin",
};

export default Dashboard;
