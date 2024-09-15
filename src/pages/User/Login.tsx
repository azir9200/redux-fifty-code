// import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { setEmail, setPassword } from "@/redux/features/loginSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastStyles.css";
import { useLoginMutation } from "@/redux/api/auth/authApi";

const Login = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);

  const [login] = useLoginMutation();
  const navigate = useNavigate(); // Use navigate for redirection
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });
      const { success, data } = result?.data || {};

      if (success && data?.accessToken) {
        const { accessToken } = data;
        console.log("User access token:", accessToken);

        toast.success("Login Successful!", {
          className: "toast-success-login",
          autoClose: 2000,
          hideProgressBar: true,
        });
        navigate("/");
      } else {
        throw new Error("Login failed. No access token.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed! Please try again.", {
        className: "toast-error-login",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-400 ">
      <div className="w-full max-w-md p-8 bg-slate-300 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
        />
        <p className="text-sm text-center text-gray-600 mt-4">
          New in here ?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            register first
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
