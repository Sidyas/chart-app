import Head from 'next/head';
import { Layout, Button, Space, Spin } from 'antd';
import { DownloadOutlined, FunnelPlotOutlined, MenuOutlined } from '@ant-design/icons';
import CustomChart from '@/components/CustomChart';
import { trpc } from '@/utils/trpc';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  height: '4rem',
  boxShadow: '0px 2px 9px #ccc',
  zIndex: '999',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  color: '#000',
  backgroundColor: '#eee',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 5rem 2rem ',
};

const subHeaderStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  padding: '2rem 0',
  height: 'fit-content',
};

const graphWrapperStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between' };

const spinnerWrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Home(): JSX.Element {
  const chartData = trpc.getCoronaData.useQuery();

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
          <h1 style={{ fontSize: '1.6rem', margin: '0' }}>Chart App</h1>
        </Header>
        <Content style={contentStyle}>
          <div style={subHeaderStyle}>
            <h2>Latest Graphs</h2>
            <div>
              <Space direction="horizontal">
                <Button>
                  Export to PDF <DownloadOutlined />
                </Button>
                <Button>
                  Notes <MenuOutlined />
                </Button>
                <Button>
                  Filter <FunnelPlotOutlined />
                </Button>
              </Space>
            </div>
          </div>
          {chartData.data?.data ? (
            <div style={graphWrapperStyle}>
              <CustomChart data={chartData.data?.data} />
              <CustomChart
                data={chartData.data?.data}
                type="pie"
              />
            </div>
          ) : (
            <div style={spinnerWrapperStyle}>
              <Spin size="large" />
            </div>
          )}
        </Content>
      </Layout>
    </>
  );
}
