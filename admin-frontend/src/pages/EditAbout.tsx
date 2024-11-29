import React, { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { backendUrl } from "../App";
import FormInput from "../context/Molecules";
import EditorAtom from "../context/editoratom";
import ButtonAtom from "../context/buttonatom";

type Input = {
  heading: string;
};

function EditAbout() {
  const [data, setData] = useState<{ heading?: string; content?: string }>({});
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<Input>();

  // Watch the heading to debug if it's captured correctly
  const heading = watch("heading");

  // Jodit Editor Configuration
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: data.content || "Start typing...",
      height: 800,
    }),
    [data.content]
  );

  // Fetch existing data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${backendUrl}api/about/get-about`);
        if (res.data.success) {
          const aboutData = res.data.aboutData[0];
          setData({ heading: aboutData.heading, content: aboutData.content });
          setContent(aboutData.content || "");
          setValue("heading", aboutData.heading || ""); // Set form value
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError("Error fetching About data. Please try again later.");
        console.error("Error fetching about data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [setValue]);

  // Handle form submission
  const onSubmit: SubmitHandler<Input> = async (formData) => {
    console.log(formData);
    if (!content) {
      setError("Content cannot be empty");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(`${backendUrl}api/about/update-about`, {
        ...formData,
        content,
      });

      if (response.data.success) {
        alert("About Page Updated Successfully");
        setError(null);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      setError("Failed to update About Page. Please try again.");
      console.error("Error updating About Page", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <p className="text-red-500">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 w-full">
      <h1 className="text-center font-bold text-3xl sm:text-5xl">
        Edit About Page
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10 gap-10 items-center justify-center"
      >
        {/* Heading Input */}
        <FormInput
          placeholder={data.heading || "Enter Heading"}
          {...register("heading", { required: "Heading is required" })}
          error={errors.heading?.message}
          onChange={(e) => setValue("heading", e.target.value)} // Update the form value on input change
        />
        {/* Content Editor */}
        <EditorAtom
          value={content}
          onChange={(value) => setContent(value)}
          config={config}
        />
        {/* Submit Button */}
        <ButtonAtom
          label={isSubmitting ? "Submitting..." : "Submit"}
          type="submit"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}

export default EditAbout;
