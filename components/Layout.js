import Head from 'next/head';

const Layout = ({ title, children }) => (
  <div className="container mx-auto max-w-5xl px-10">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>{children}</main>
  </div>
);
export default Layout;
