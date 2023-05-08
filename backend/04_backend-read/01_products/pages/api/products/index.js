// import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const products = await Product.find();
      return response.status(200).json(products);
    } catch (error) {
      console.error(error);
      return response
        .status(405)
        .json({ message: "Method not allowed", error: error.message });
    }
  } else if (request.method === "POST") {
    try {
      const productData = request.body;
      const product = new Product(productData);
      await product.save();
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error(error);
      return response
        .status(400)
        .json({ message: "Bad Request", error: error.message });
    }
  }
}
