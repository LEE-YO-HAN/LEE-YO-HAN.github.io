import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { Layout } from "@/components/layout/Layout";
import { mainTheme } from "@/theme/theme";
import { LoadingSpinner } from "@/util/LoadingSpinner";
import { useLoading } from "@/hooks/useLoading";
import { MdContext } from "@/context/MdContext";

export default function App({ Component, pageProps }: AppProps) {
  const isLoadnig = useLoading();
  const { pathname } = useRouter();

  return (
    <ThemeProvider theme={mainTheme}>
      {pathname !== "/profile" ? (
        <MdContext>
          <Layout>
            <Component {...pageProps} />
            {isLoadnig ? <LoadingSpinner /> : null}
          </Layout>
        </MdContext>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}
