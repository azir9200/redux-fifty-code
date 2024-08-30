/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Modal from "./Modal";

const ProductCard = ({ product }: { product: any }) => {
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
  const handleAddToCart = (product) => {};

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
        className="border rounded-lg shadow-lg overflow-hidden bg-grey transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="bg-blue-100 p-4 flex flex-col flex-grow">
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-700 mb-4 flex-grow">
              {product.description}
            </p>
            <p className="text-lg font-bold text-green-600 mb-4">
              {product.price}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
                console.log(product, "azir ");
              }}
              className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300 shadow-md hover:shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
