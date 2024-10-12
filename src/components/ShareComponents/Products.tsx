import { useGetAllProductQuery } from "@/redux/api/product/productApi";
import ProductCard from "./ProductCard";
import { Product } from "../types/ProductTypes";

const Products = () => {
  const { data: products } = useGetAllProductQuery(undefined);

  console.log("azir", products);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {products?.data.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
