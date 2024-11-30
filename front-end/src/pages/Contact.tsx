import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [result, setResult] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setResult("Sending...");

    // Prepare the data to be sent
    const formData = {
      access_key: "756ce1bf-cedf-46d6-b6e1-b399146fb430",
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      // Fetch API call
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Stringify the form data
      });

      const responseData = await response.json();
      if (responseData.success) {
        setResult("Form Submitted Successfully");
      } else {
        console.log("Error", responseData);
        setResult(responseData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="sm:text-5xl text-3xl font-bold text-center mb-8">
        Contact Me
      </h1>
      <form
        className="flex flex-col items-center justify-center gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <input
            className="h-12 px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
            placeholder="Enter Your Full Name"
            {...register("name", { required: true })}
          />
          <input
            className="h-12 px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
            placeholder="Enter Your Email"
            required
            type="email"
            {...register("email", { required: true })}
          />
        </motion.div>
        <motion.div
          className="w-full flex flex-col gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <input
            className="h-12 w-full px-4 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
            placeholder="Enter Subject"
            required
            {...register("subject", { required: true })}
          />
          <textarea
            className="w-full px-4 py-3 outline-none border-2 border-black rounded-lg focus:border-blue-500 transition-all duration-300"
            placeholder="Enter Your Message"
            rows={5}
            required
            {...register("message", { required: true })}
          />
        </motion.div>
        <motion.input
          className="bg-black text-white px-6 py-3 rounded-full cursor-pointer hover:bg-blue-500 transition duration-500"
          type="submit"
          value="Submit"
          whileHover={{ scale: 1.05 }}
        />
      </form>
      <div className="mt-5 font-medium text-center">{result}</div>
    </motion.div>
  );
}

export default Contact;
