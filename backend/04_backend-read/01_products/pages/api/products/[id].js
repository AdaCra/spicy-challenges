// import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(product);
    } catch (error) {
      return response.status(405).json({ status: "Method not allowed" });
    }
  } else if (request.method === "POST"){
    try {
      const productToUpdate = await Product.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response.status(200).json(productToUpdate);
    } catch (error) {
      
    }

  }
}
