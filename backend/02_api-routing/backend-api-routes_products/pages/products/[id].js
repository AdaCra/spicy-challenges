import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) {
    console.error(error);
    return <h1>Error...</h1>;
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h2>{data.name}</h2>
      <p>data.description</p>
    </>
  );
}
