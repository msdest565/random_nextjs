// ./pages/_app.tsx
import type { AppProps, AppContext } from "next/app";
import App from "next/app";
import { Layout, ILayoutProps } from "@/components/layout";
import Head from "next/head";
import axios from "axios";
import { LOCALDOMAIN } from "@/utils";
import { ThemeContextProvider } from "@/stores/theme";
import "./global.scss";


const MyApp = (data: AppProps & ILayoutProps ) => {
  const { Component, pageProps, navbarData, taglistData } = data;

  return (
    <div>
      <Head>
        <title>稀土掘金</title>
        <meta
          name="稀土掘金"
          content="一个仿掘金网站"
        />
        <link rel="icon" href="@/public/logo1.png" />
      </Head>
      <ThemeContextProvider>
      <Layout navbarData={navbarData} taglistData={taglistData}>
        <Component {...pageProps} />
      </Layout>
      </ThemeContextProvider>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const { data = {} } = await axios.get(`${LOCALDOMAIN}/api/layout`);

  return {
    ...pageProps,
    ...data,
  };
};

export default MyApp;