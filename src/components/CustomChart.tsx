import { CoronaData } from '@/utils/types';
import { ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { Chart } from '@antv/g2';
import { Avatar } from 'antd';
import axios from 'axios';
import { useEffect, useRef } from 'react';

type ChartProps = {
  width?: number;
  height?: number;
  type?: 'bar' | 'pie';
  data: CoronaData[];
};

const graphWrapperStyle = {
  width: 'fit-content',
  backgroundColor: '#fff',
  height: 'fit-content',
  borderRadius: '1rem',
};

const graphHeadingStyle = { textAlign: 'left' as 'left', fontSize: '1.2rem', padding: '1rem' };

const graphFooterStyle = { display: 'flex', justifyContent: 'space-between', padding: '1rem' };

export default function CustomChart({
  width = 700,
  height = 400,
  type = 'bar',
  data,
}: ChartProps): JSX.Element {
  const container = useRef({} as HTMLDivElement);
  const chart = useRef<Chart | null>(null);

  useEffect(() => {
    renderChart();
  }, []);

  async function renderChart() {
    if (!chart.current) {
      if (type === 'bar') {
        chart.current = renderBarChart(container.current, data);
      } else {
        chart.current = renderPieChart(container.current, data);
      }
    }
  }

  function renderBarChart(container: HTMLDivElement, data: CoronaData[]) {
    const chart = new Chart({
      container,
      width,
      height,
    });
    chart.data(data);
    chart.interval().position('date*deathNew');
    chart.render();
    return chart;
  }

  function renderPieChart(container: HTMLDivElement, data: CoronaData[]) {
    const chart = new Chart({
      container,
      width,
      height,
    });
    chart.data(data);
    chart.coordinate('theta', {
      radius: 0.75,
      innerRadius: 0.6,
    });
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });
    chart.interval().adjust('stack').position('latestBy').color('date').shape('slice-shape');
    chart.render();
    return chart;
  }

  return (
    <div style={graphWrapperStyle}>
      <h4 style={graphHeadingStyle}>{type === 'bar' ? 'Latest Deaths' : 'Latest Cases'}</h4>
      <div
        ref={container}
        style={{ padding: '1rem' }}
      ></div>
      <div style={graphFooterStyle}>
        <Avatar icon={<UserOutlined />} />
        <ProfileOutlined style={{ fontSize: '1.6rem' }} />
      </div>
    </div>
  );
}
