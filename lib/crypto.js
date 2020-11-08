export const getMarketData = async currency => {
  try {
    const result = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const marketData = await result.json();
    return marketData;
  } catch (error) {
    console.log(error);
  }
};
