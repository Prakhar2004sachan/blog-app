import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Inputs = {
  name?: string;
  email: string;
  password: string;
};

function Login() {
  const [login, setLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <motion.div
      className="my-10 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="sm:text-5xl text-3xl font-bold text-center mb-8">
        {login ? "Login" : "Sign up"}
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
          {login ? "" : (
            <motion.input
              key="name-input"
              className="h-12 px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
              placeholder="Enter Your Full Name"
              {...register("name")}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            />
          )}
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
          {login ? "Login" : "Sign up"}
        </motion.button>
        <motion.p
          onClick={() => setLogin(!login)}
          className="text-center cursor-pointer text-blue-500 hover:underline"
          whileHover={{ scale: 1.05 }}
        >
          {login ? "Register New Account" : "Already have an account?"}
        </motion.p>
      </form>
    </motion.div>
  );
}

export default Login;
