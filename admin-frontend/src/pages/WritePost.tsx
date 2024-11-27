import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import EditEditor from "../components/EditEditor";
import axios from "axios";
import { backendUrl } from "../App";

type Input = {
  heading: string;
  shortDescription: string;
  tags: string;
  img: File | null;
};

function WritePost() {
  const [content, setContent] = useState("");
  const [img, setImg] = useState<File | null>(null);

  console.log(content);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> =async (data) => {
    if (!img) {
      alert("Please upload an image");
      return;
    }
    const formData = new FormData();
    formData.append("heading", data.heading);
    formData.append("tags", data.tags);
    formData.append("mainImg", img);
    formData.append("content", content);
    formData.append("shortDescription", data.shortDescription);
    // console.log(formData);
    // Handle submission (e.g., API call)

    try {
      if(!img){
        alert('Please upload image');
        return
      }
      const res = await axios.post(backendUrl+"api/blog/add",formData);
      if (res.data.success) {
        console.log("Post Added", res.data);
        alert("Post added successfully!");
      } else {
        console.error("Uploading Failed", res.data.message);
        alert("Error uploading post.");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="mt-10 w-full">
      <h1 className="text-center font-bold text-3xl sm:text-5xl">Write Post</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10 gap-10  justify-center"
      >
        <input
          placeholder="Enter Heading of Post"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("heading", { required: "Heading is required" })}
        />
        {errors.heading && (
          <p className="text-red-500">{errors.heading.message}</p>
        )}
        <input
          placeholder="Enter Short Description for the post"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("shortDescription", {
            required: "shortDescription is required",
          })}
        />
        {errors.heading && (
          <p className="text-red-500">{errors.heading.message}</p>
        )}
        <input
          placeholder="Enter Tags (comma seperated)"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("tags", { required: "tags is required" })}
        />
        {errors.heading && (
          <p className="text-red-500">{errors.heading.message}</p>
        )}
        <div className="flex items-center gap-10">
          <p>Upload Image :-</p>
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
          />
        </div>
        <div className="w-full">
          <EditEditor setValue={setContent} />
        </div>
        <div className="bg-black text-white px-4 py-2 text-center rounded-full w-[5rem]">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default WritePost;
