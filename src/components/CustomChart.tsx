import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';

export default function CustomChart(): JSX.Element {
  const container = useRef({} as HTMLDivElement);
  const chart = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chart.current) {
      chart.current = renderBarChart(container.current);
    }
  }, []);

  function renderBarChart(container: HTMLDivElement) {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    const chart = new Chart({
      container,
      width: 700,
      height: 400,
    });

    chart.data(data);

    chart.interval().position('genre*sold');

    chart.render();

    return chart;
  }

  // TODO
  //   function updateBarChart(chart) {
  //     console.log('hello');
  //   }

  return (
    <div style={{ width: 'fit-content', backgroundColor: '#fff', height: 'fit-content' }}>
      <h4 style={{ height: '2rem', textAlign: 'left', fontSize: '1.2rem', padding: '1rem' }}>
        Chart title
      </h4>
      <div
        ref={container}
        style={{ padding: '1rem 0 1rem 0' }}
      ></div>
    </div>
  );
}
