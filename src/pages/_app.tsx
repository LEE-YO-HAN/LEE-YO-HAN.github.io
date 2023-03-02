import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Layout } from "@/components/layout/Layout";
import { mainTheme } from "@/theme/theme";
import { LoadingSpinner } from "@/util/LoadingSpinner";
import { useLoading } from "@/hooks/useLoading";
export default function App({ Component, pageProps }: AppProps) {
  const isLoadnig = useLoading();

  return (
    <ThemeProvider theme={mainTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {isLoadnig ? <LoadingSpinner /> : null}
    </ThemeProvider>
  );
}
