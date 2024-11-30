import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/authStore";

function EmailVerification() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { error, isLoading, verifyEmail, clearError } = useAuthStore();

  const handleChange = (index, value) => {
    const newCode = [...code];

    if (value.length > 1) {
      // Handle pasted content
      const pastedCode = value.slice(0, 6).split("");
      pastedCode.forEach((digit, i) => {
        if (i < 6) newCode[i] = digit;
      });
      setCode(newCode);

      // Focus next empty field
      const firstEmptyIndex = pastedCode.findIndex((digit) => !digit);
      inputRefs.current[firstEmptyIndex >= 0 ? firstEmptyIndex : 5]?.focus();
    } else {
      // Single character input
      newCode[index] = value;
      setCode(newCode);

      // Move to the next input if a value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }

    // Clear error on input change
    if (error) clearError();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");

    try {
      await verifyEmail(verificationCode);
      toast.success("Email verified successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to verify email.");
    }
  };

  useEffect(() => {
    // Auto-submit when all inputs are filled
    if (code.every((digit) => digit !== "")) {
      (async () => {
        await handleSubmit(new Event("submit"));
      })();
    }
  }, [code]);

  return (
    <div className="mt-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-300 flex py-8 flex-col items-center w-full rounded-2xl"
      >
        <h2 className="text-3xl font-bold text-center">Verify Your Email</h2>
        <p className="mt-3 text-center">
          Enter the 6-digit code sent to your email address
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 mt-3">
          <div className="flex gap-1 sm:gap-4 justify-between px-20">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-bold bg-gray-200 text-black border-gray-700 rounded-lg focus:border-gray-950 focus:outline-none"
              />
            ))}
          </div>
          {error && (
            <p className="text-red-500 font-semibold mt-2 text-center">
              {error}
            </p>
          )}
          <div className="flex justify-center items-center"> 
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isLoading || code.some((digit) => !digit)}
              className="w-[15rem] bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : "Verify Email"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default EmailVerification;
