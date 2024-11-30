import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import PasswordStrengthMeter from "../components/PasswordStrength";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";

type Inputs = {
  password: string;
};

function ResetRassword() {
  const [password, setPassword] = useState("");
  const { resetPassword,  isLoading} = useAuthStore();
  const { token } = useParams();
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      await resetPassword(token, password);
      toast.success(
        "Password reset successfully, redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Error resetting password");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mt-10 w-full bg-gray-200  px-8 py-10 bg-opacity-50 backdrop-filter backdrop-blur-xl border-2 rounded-2xl shadow-2xl drop-shadow-xl overflow-hidden"
    >
        <h2 className="text-center font-bold text-2xl my-5">Reset Your Password</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center flex-col gap-10"
      >
        <input
          type="password"
          className="h-12 w-full px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordStrengthMeter password={password} />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <motion.button
          className="bg-black mt-5 w-[10rem] text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-700 transition duration-500"
          type="submit"
          whileHover={{ scale: 1.05 }}
        >
          {isLoading ? (
            <Loader className="animate-spin mx-auto" size={24} />
          ) : (
            "Reset"
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default ResetRassword;
