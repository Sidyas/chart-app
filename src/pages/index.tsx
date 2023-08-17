import Head from 'next/head';
import { Layout } from 'antd';
import Title from 'antd/es/typography/Title';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#eee',
};

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Chart app</title>
        <meta
          name="description"
          content="Chart app for a job interview"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Layout style={{ height: '100vh' }}>
        <Header style={headerStyle}>
          <Title
            level={1}
            style={{ fontSize: '1.6rem', margin: '0' }}
          >
            App Title
          </Title>
        </Header>
        <Content style={contentStyle}></Content>
      </Layout>
    </>
  );
}
