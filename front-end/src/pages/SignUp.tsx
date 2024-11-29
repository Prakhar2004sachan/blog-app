import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../backend/controllers/authController";
import { emit } from "process";
import { useAuthStore } from "../store/authStore";

type Inputs = {
  name?: string;
  email: string;
  password: string;
};

function Signup() {
  const { signup, error, isLoading } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      await signup(data.email, data.password, data.name);
      navigate("/verify-email");
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
      <h1 className="sm:text-5xl text-3xl font-bold text-center mb-8">
        Sign Up
      </h1>
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
          <motion.input
            key="name-input"
            className="h-12 px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
            placeholder="Enter Your Full Name"
            {...register("name")}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          />
          <input
            className="h-12 px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
            placeholder="Enter Your Email"
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
        </motion.div>
        <motion.button
          className="bg-black text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-700 transition duration-500"
          type="submit"
          whileHover={{ scale: 1.05 }}
        >
          Sign up
        </motion.button>
        <motion.p
          onClick={() => navigate("/login")}
          className="text-center cursor-pointer text-blue-500 hover:underline"
          whileHover={{ scale: 1.05 }}
        >
          Already have an account?
        </motion.p>
      </form>
    </motion.div>
  );
}

export default Signup;
