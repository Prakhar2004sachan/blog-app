import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  console.log(email);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mt-10 w-full bg-gray-200 shadow-2xl border-2 drop-shadow-xl bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Forgot Password
        </h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <p className="text-gray-700 mb-6 text-center">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <input
              className="h-12 w-full my-3 px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
              placeholder="Enter Your Email"
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gray-500 text-white hover:bg-gray-900 rounded-xl transition duration-200"
              type="submit"
            >
              {isLoading ? (
                <Loader className="size-6 animate-spin mx-auto" />
              ) : (
                "Send Reset Link"
              )}
            </motion.button>
          </form>
        ) : (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Mail className="h-8 w-8 text-white" />
            </motion.div>
            <p className="text-gray-500 mb-6">
              If an account exists for {email}, you will receive a password
              reset link shortly.
            </p>
          </div>
        )}
      </div>

      <div className="px-8 py-4 bg-gray-800 flex justify-center">
        <Link
          to={"/login"}
          className="text-sm text-white hover:underline flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2 text-white" /> Back to Login
        </Link>
      </div>
    </motion.div>
  );
};
export default ForgotPasswordPage;
