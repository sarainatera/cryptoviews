import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip);

const CryptoChart = ({ selectedCoin }) => {
  const [chartData, setChartData] = useState(null);
  const [coinName, setCoinName] = useState('Bitcoin'); // Default to Bitcoin
  const { t } = useTranslation(); 

  useEffect(() => {
    const fetchChartData = async () => {
      if (!selectedCoin) return;

      try {
        const response = await fetch(`http://localhost:4000/api/cryptos/${selectedCoin}`);
        const data = await response.json();

        const labels = data.prices.map((price) => {
          const date = new Date(price[0]);
          return `${date.getMonth() + 1}/${date.getFullYear()}`;
        });

        const prices = data.prices.map((price) => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: `${data.name} Price (USD)`,
              data: prices,
              borderColor: '#E91E63',
              backgroundColor: 'rgba(233, 30, 99, 0.2)',
              tension: 0.4,
              fill: true,
            },
          ],
        });

        // Update the coin name
        setCoinName(data.name);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, [selectedCoin]);

  if (!chartData) {
    return <p className="text-white">{t('select-crypto')}</p>;
  }

  return (
    <div className="bg-lightBlue text-white p-4 rounded-lg">
      <h3 className="text-xl mb-4 text-center">{coinName} {t('price-chart')}</h3>
      <div className="w-full h-80 sm:h-96">
        <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default CryptoChart;
