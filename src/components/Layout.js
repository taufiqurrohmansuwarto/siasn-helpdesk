import dynamic from "next/dynamic";
import React from "react";

const ProLayout = dynamic(
  () => import("@ant-design/pro-layout").then((mod) => mod.ProLayout),
  {
    ssr: false,
  }
);

function Layout({ children }) {
  return (
    <ProLayout
      menu={{
        type: "group",
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <div
            style={{
              textAlign: "center",
              paddingBlockStart: 12,
            }}
          >
            <div>© 2021 Made with love</div>
            <div>by Ant Design</div>
          </div>
        );
      }}
      title="Hello world"
      bgLayoutImgList={[
        {
          src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
          left: 85,
          bottom: 100,
          height: "303px",
        },
        {
          src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
          bottom: -68,
          right: -45,
          height: "303px",
        },
        {
          src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
          bottom: 0,
          left: 0,
          width: "331px",
        },
      ]}
      avatarProps={{
        src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
        shape: "circlel",
        size: "small",
        title: (
          <div
            style={{
              color: "#dfdfdf",
            }}
          >
            七妮妮
          </div>
        ),
      }}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [];
      }}
    >
      {children}
    </ProLayout>
  );
}

export default Layout;