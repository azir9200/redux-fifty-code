import { useCreteOrderMutation } from "@/redux/api/orderApi/orderApi";
import { useAppSelector } from "@/redux/hooks";

const CheckOutPage = () => {
  const [createOrder] = useCreteOrderMutation();

  const cartItems = useAppSelector((store) => store.cart.products);
  const user = useAppSelector((store) => store.user.user);
  console.log("user ", user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user,
      products: cartItems.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
    };
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8 border p-5 rounded">
          <h3 className="text-xl font-semibold mb-4">User Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
               //  onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                value="user.email"
                // onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value="user.phone"
                // onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Address
              </label>
              <input
                type="text"
                name="address"
                value="user.address"
                // onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div> */}

          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Product
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Quantity
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              cart Item here
              {/* {cartItems.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4">${item.price}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutPage;
