import Head from "next/head";
import dynamic from "next/dynamic";

const EssentialScriptsComponent = dynamic(
  () => import("../essentialScripts/EssentialScripts"),
  { ssr: false }
);

const PageHead = () => {
  return (
    <>
      <Head>
        <title>Minal</title>
        <meta
          name="description"
          content="Me-In-Full. Making Meaning Together "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EssentialScriptsComponent />
    </>
  );
};

export default PageHead;
