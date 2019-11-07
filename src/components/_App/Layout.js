import Head from "next/head";

import HeadContent from "./HeadContent";

function Layout({ children }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link
          rel="stylesheet"
          type="text/css"
          href="../../../static/styles.css"
        />
        <title>Next/Redux/Saga Boilerplate</title>
      </Head>

      <div style={{ paddingTop: "1em" }}>{children}</div>
    </>
  );
}

export default Layout;
