import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";

type Inputs = {
  name?: string;
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const { login, error, isLoading } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await login(data.email, data.password, data.name);
      navigate("/");
      toast.success("Login Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="my-10 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="sm:text-5xl text-3xl font-bold text-center mb-8">Login</h1>
      <form
        className="flex flex-col items-center justify-center gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <motion.div
          className="flex flex-col gap-4 w-full sm:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <input
            className="h-12 px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
            placeholder="Enter Your Email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <input
            type="password"
            className="h-12 px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
            placeholder="Enter Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}

          {error && <p className="text-red-500 font-semibold mb-2">{error}</p>}
        </motion.div>
        <motion.button
          className="bg-black text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-700 transition duration-500"
          type="submit"
          whileHover={{ scale: 1.05 }}
        >
          {isLoading ? (
            <Loader className="animate-spin mx-auto" size={24} />
          ) : (
            "Login"
          )}
        </motion.button>
        <div className="flex items-center mb-6">
          <Link
            to="/forgot-password"
            className="text-md text-blue-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <motion.p
          onClick={() => navigate("/signup")}
          className="text-center cursor-pointer text-blue-500 hover:underline"
          whileHover={{ scale: 1.05 }}
        >
          Register New Account
        </motion.p>
      </form>
    </motion.div>
  );
}

export default Login;
