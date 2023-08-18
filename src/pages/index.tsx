import Head from 'next/head';
import { Layout, Typography, Button, Space } from 'antd';
import { DownloadOutlined, FunnelPlotOutlined, MenuOutlined } from '@ant-design/icons';
import CustomChart from '@/components/CustomChart';

const { Title } = Typography;

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
            Chart App
          </Title>
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
          <div style={graphWrapperStyle}>
            <CustomChart />
            <CustomChart type="pie" />
          </div>
        </Content>
      </Layout>
    </>
  );
}
