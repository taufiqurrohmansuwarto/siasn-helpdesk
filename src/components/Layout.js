import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { userRoutes } from "../routes";
import PageContainer from "./PageContainer";

const ProLayout = dynamic(
  () => import("@ant-design/pro-layout").then((mod) => mod.ProLayout),
  {
    ssr: false,
  }
);

// when click menu, it will redirect to the page
const menuItemRender = (options, element) => {
  return (
    <Link href={`${options.path}`}>
      <a>{element}</a>
    </Link>
  );
};

function Layout({ children }) {
  const { data, status } = useSession();
  const router = useRouter();

  return (
    <ProLayout
      selectedKeys={[router.pathname]}
      title="SIASN Helpdesk"
      avatarProps={{
        src: data?.user?.image,
        size: "default",
        title: data?.user?.name,
      }}
      menuItemRender={menuItemRender}
      route={userRoutes}
      loading={status === "loading"}
    >
      <PageContainer>{children}</PageContainer>
    </ProLayout>
  );
}

export default Layout;
