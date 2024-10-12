/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Modal from "../../components/ShareComponents/Modal";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="relative">
      {showModal && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          handleAddToCart={() => {}}
        />
      )}
      <div
        onClick={() => handleShowModal(product)}
        className="border rounded-lg shadow-lg overflow-hidden bg-grey transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-72"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="bg-blue-100 flex flex-col ">
          <div className="flex flex-col ">
            <h3 className="text-xl font-semibold text-blue-500 ">
              {product.name}
            </h3>
            <p className="text-gray-700  flex-grow">{product.description}</p>
            <p className="text-lg font-bold text-green-600 ">{product.price}</p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="mt-6 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition duration-300"
            >
              Add to Cart
            </button>

            {/* <Link
              to={`/products/${product.id}`}
              className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300 shadow-md hover:shadow-lg"
            >
              Show Details
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
