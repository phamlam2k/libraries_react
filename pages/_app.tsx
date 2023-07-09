import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import { NextComponentType } from "next";
import { CommonLayout } from "../src/layout/CommonLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}) => {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <CommonLayout>{page}</CommonLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  );
};

export default MyApp;
