import { getAllProducts } from "services/productServices";

export default function handler(request, response) {
  const data = getAllProducts();
  response.status(200).json(data);
}
