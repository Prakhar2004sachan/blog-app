import React, { useMemo, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

type Input = {
  heading: string;
  shortDescription: string;
  tags: string;
  learnings: string;
  img: File | null; // File type for image
};

function WritePostJ() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [img, setImg] = useState<File | null>(null); // For storing the uploaded image file
  const [isLoading, setIsLoading] = useState(false); // Track upload state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  // Jodit Editor Configuration
  const config = useMemo(
    () => ({
      readOnly: isLoading,
      placeholder: "Start typing...",
      height: 800,
    }),
    [isLoading]
  );

  const onSubmit: SubmitHandler<Input> = async (data) => {
    if (!img) {
      alert("Please upload an image");
      return;
    }

    setIsLoading(true); // Set loading state to true during upload

    // Create FormData to handle both text and file uploads
    const formData = new FormData();
    formData.append("heading", data.heading);
    formData.append("shortDescription", data.shortDescription);
    formData.append("content", content);
    formData.append("tags", data.tags);
    formData.append("links", data.learnings);
    formData.append("mainImg", img);

    try {
      const response = await axios.post(`${backendUrl}api/blog/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        console.log("Post Uploaded", response.data);
        alert("Post added successfully!");
      } else {
        console.error("Uploading Failed", response.data.message);
        toast.error("Error uploading post.");
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      alert(error);
    } finally {
      setIsLoading(false); // Reset loading state after upload
    }
  };

  return (
    <div className="mt-10 w-full">
      <h1 className="text-center font-bold text-3xl sm:text-5xl">Write Post</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10 gap-10 items-center justify-center"
      >
        <input
          placeholder="Enter Heading for the blog post"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("heading", { required: "Heading is required" })}
          disabled={isLoading} // Disable input when loading
        />
        {errors.heading && (
          <p className="text-red-500">{errors.heading.message}</p>
        )}

        <input
          placeholder="Enter Short Description"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("shortDescription", {
            required: "Short Description is required",
          })}
          disabled={isLoading} // Disable input when loading
        />
        {errors.shortDescription && (
          <p className="text-red-500">{errors.shortDescription.message}</p>
        )}

        <input
          placeholder="Enter Tags (comma separated)"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("tags", { required: "Tags are required" })}
          disabled={isLoading} // Disable input when loading
        />
        {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}

        <input
          placeholder="Enter Learnings (comma separated)"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("learnings", { required: "Tags are required" })}
          disabled={isLoading} // Disable input when loading
        />
        {errors.learnings && (
          <p className="text-red-500">{errors.learnings.message}</p>
        )}

        <div className="flex items-center gap-10">
          <p>Upload Image:</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImg(file); // Set the file if selected
              }
            }}
            required
            disabled={isLoading} // Disable file input when loading
          />
        </div>

        <div className="w-full">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            config={config}
          />
        </div>

        <div className="bg-black text-white px-4 py-2 text-center rounded-full w-[15rem]">
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="mr-2">Uploading...</span>
                <div className="animate-spin inline-block w-4 h-4 border-b-2 border-white rounded-full" />
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default WritePostJ;
