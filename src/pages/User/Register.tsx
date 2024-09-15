import {
  setAddress,
  setEmail,
  setName,
  setPassword,
  setPhone,
  setRole,
} from "@/redux/features/registerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "@/redux/api/auth/authApi";
import { toast, ToastContainer } from "react-toastify";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, password, phone, address, role } = useAppSelector(
    (state) => state.register
  );

  const [signUp, { isError, isSuccess }] = useSignUpMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await signUp({ name, email, role, phone, address, password });
    console.log("user=>", user);
    if (isSuccess) {
      // Show success toast
      toast.success("User Registration sSuccessful ! ", {
        className: "custom-toast--success",
      });
    } else if (isError) {
      // Show error toast
      toast.error("Registration failed! Please try again.", {
        className: "custom-toast-error",
      });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 to-blue-200 mt-8">
        <div className="w-full max-w-md p-8 bg-slate-600 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="phone"
                value={phone}
                onChange={(e) => dispatch(setPhone(e.target.value))}
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="address"
                value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
              />
            </div>
            <div>
              <input
                type="text"
                id="role"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Role"
                value={role}
                onChange={(e) => dispatch(setRole(e.target.value))}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>
          <ToastContainer autoClose={2000} />
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
