import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { ConfigProvider } from "antd";
import id from "antd/lib/locale/id_ID";
import ability from "../utils/ability";

// check user role and organization start with 123
function Auth({ children, action, subject }) {
  const { data, status } = useSession();

  if (status === "loading") {
    return <div>loading..</div>;
  } else {
    if (!data?.user) return <div>Not Authorized</div>;
    const userAbility = ability(data?.user);
    const isAllowed = userAbility.can(action, subject);

    if (isAllowed) {
      return children;
    } else {
      return <div>Not Authorized</div>;
    }
  }
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider
      session={session}
      baseUrl="/helpdesk"
      basePath="/helpdesk/api/auth"
    >
      <QueryClientProvider client={queryClient}>
        <ConfigProvider locale={id}>
          <Hydrate>
            {Component.Auth ? (
              <Auth>{getLayout(<Component {...pageProps} />)}</Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </Hydrate>
        </ConfigProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
