import Footer from "../components/shared/footer";
import Head from "next/head";

const MainLayout = ({ children }) => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;