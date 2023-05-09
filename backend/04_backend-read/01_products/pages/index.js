import ProductList from "../components/ProductList";
import styled from "styled-components";
import ProductForm from "../components/ProductForm";
import useSWR from "swr";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

export async function handleAddProduct(event) {
  const { mutate } = useSWR("/api/products");
  event.preventDefault();

  const formData = new FormData(event.target);
  const productData = Object.fromEntries(formData);

  const response = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (response.ok) {
    await response.json();
    mutate();
    event.target.reset();
  } else {
    console.error(`Error: ${response.status}`);
  }
}

export default function HomePage() {
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} />
      <hr />
      <ProductList />
    </>
  );
}
