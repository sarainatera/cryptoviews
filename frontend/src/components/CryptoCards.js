import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiRipple, SiLitecoin } from 'react-icons/si';

const CryptoCards = ({ onCardClick }) => {
  const [cryptos, setCryptos] = useState([]);
  const { t } = useTranslation(); 

  const coinIcons = {
    bitcoin: <FaBitcoin size={30} />,
    ethereum: <FaEthereum size={30} />,
    ripple: <SiRipple size={30} />,
    litecoin: <SiLitecoin size={30} />,
  };

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/cryptos');
        const data = await response.json();
        setCryptos(data);

      } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
      }
    };

    fetchCryptos();
  }); 

  if (!cryptos.length) {
    return <p className="text-white">{t('loading')}</p>;
  }

  return (
    <div className="bg-lightBlue text-white p-4 rounded-lg space-y-4">
      <h3 className="text-xl font-semibold mb-4">{t('cryptocurrency_list')}</h3>
      {cryptos.map((crypto) => (
        <div
          key={crypto.id}
          onClick={() => onCardClick(crypto.id)}
          className="flex items-center justify-between p-4 bg-darkBlue rounded-md hover:bg-lightBlue transition cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="text-accentBlue">{coinIcons[crypto.id]}</div>
            <p>{crypto.name}</p>
          </div>
          <div className="text-right">
            <p>${crypto.price.toLocaleString()}</p>
            <p
              className={`text-sm ${
                crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {crypto.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoCards;
  