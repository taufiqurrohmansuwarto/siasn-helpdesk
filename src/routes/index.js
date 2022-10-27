import {
  CarOutlined,
  SmileOutlined,
  DashboardFilled,
  HomeOutlined,
  FileOutlined,
  SnippetsOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const userRoutes = {
  routes: [
    { path: "/feeds", name: "Beranda", icon: <HomeOutlined /> },
    {
      path: "/tickets",
      name: "Tiket",
      icon: <FileOutlined />,
      routes: [
        {
          path: "/tickets/semua",
          name: "Semua Tiket",
        },
        {
          path: "/tickets/diajukan",
          name: "Tiket diajukan",
        },
        {
          path: "/tickets/dikerjakan",
          name: "Tiket dikerjakan",
        },
        {
          path: "/tickets/selesai",
          name: "Tiket selesai",
        },
      ],
    },
    {
      path: "/tickets/create",
      name: "Buat Ticket",
      icon: <SmileOutlined />,
      hideInMenu: true,
    },
  ],
};

export const adminRoutes = {
  routes: [
    { path: "/admin/dashboard", name: "Dashboard", icon: <DashboardFilled /> },

    {
      path: "/admin/users-management",
      name: "User Management",
      icon: <UserOutlined />,
    },
    {
      path: "/admin/tickets",
      name: "Ticket Management",
      icon: <BookOutlined />,
      routes: [
        { path: "/admin/tickets-managements/semua", name: "Semua Tiket" },
        { path: "/admin/tickets-managements/diajukan", name: "Tiket Diajukan" },
        {
          path: "/admin/tickets-managements/dikerjakan",
          name: "Tiket Dikerjakan",
        },
        { path: "/admin/tickets-managements/selesai", name: "Tiket Selesai" },
      ],
    },
    {
      path: "/admin/apps-management",
      name: "App Management",
      icon: <CarOutlined />,
    },
    {
      path: "/admin/ref",
      name: "Referensi",
      icon: <BookOutlined />,
      routes: [
        {
          path: "/admin/ref/status",
          name: "Status",
        },
        {
          path: "/admin/ref/priorities",
          name: "Prioritas",
        },
        {
          path: "/admin/ref/categories",
          name: "Kategori",
        },
      ],
    },
  ],
};

export const agentRoutes = {
  routes: [
    { path: "/agent/dashboard", name: "Dashboard", icon: <DashboardFilled /> },
    { path: "/agent/tickets", name: "Tickets", icon: <SnippetsOutlined /> },
  ],
};
