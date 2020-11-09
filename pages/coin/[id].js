function Coin({ data }) {
  return JSON.stringify(data);
}

// This gets called on every request
export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.id}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Coin;
