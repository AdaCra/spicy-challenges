import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) {
    console.error(error);
    return <h1>Error...</h1>;
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>All Products</h2>
      <ul>
        {data.map((product) => {
          <li key={produst.id}>{product.name}</li>;
        })}
      </ul>
    </>
  );
}
