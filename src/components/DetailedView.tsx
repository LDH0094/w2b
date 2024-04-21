import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Spin, Tag, Statistic, Typography } from 'antd';
import { Line } from '@ant-design/charts';

const { Title } = Typography;

const DetailView: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const [gameDetails, setGameDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/games/${gameId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch game details');
        }

        const data = await response.json();
        setGameDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching game details:', error);
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (loading) {
    return <Spin size="large" />;
  }

  const formatPrice = (price: string) => {
    return parseFloat(price).toLocaleString('en-PH', { style: 'currency', currency: 'PHP' });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const priceHistoryData = Object.keys(gameDetails.history).map((date) => ({
    date,
    price: parseFloat(gameDetails.history[date]),
  }));

  const priceHistoryConfig = {
    data: priceHistoryData,
    xField: 'date',
    yField: 'price',
    smooth: true,
    lineStyle: { lineWidth: 2 },
    xAxis: { tickCount: 5 },
    padding: 'auto',
    meta: { price: { alias: 'Price (PHP)' }, date: { alias: 'Date' } },
    yAxis: {
      label: {
        formatter: (value: number) => formatPrice(String(value)),
      },
    },
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>{gameDetails.game_name}</Title>
      <Card
        style={{ marginBottom: '20px' }}
        cover={<img alt={gameDetails.game_name} src={gameDetails.gameImageUrl} />}
      >
        <Statistic title="Release Date" value={formatDate(gameDetails.date)} />
        <Statistic title="Price" value={formatPrice(gameDetails.price)} />
        <p style={{ fontWeight: "bold", marginBottom: 5 }}>Wait Time:</p>

            {parseFloat(gameDetails.time) >= 30 ? (
              <Tag color="red">{gameDetails.time} days, DO NOT BUY</Tag>
            ) : (
              <Tag color="orange">{gameDetails.time} days, hold</Tag>
            )}
      </Card>
      <Title level={3}>Price History</Title>
      <div style={{ height: '400px' }}>
        <Line {...priceHistoryConfig} />
      </div>
    </div>
  );
};

export default DetailView;
