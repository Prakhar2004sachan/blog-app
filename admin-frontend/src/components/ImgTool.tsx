import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { backendUrl } from "../App";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
//import { toast } from "react-toastify";

type Input = {
  img: File | null;
};

function ImgTool() {
  const [img, setImg] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("Get Url");
  const [progress, setProgress] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = async () => {
    if (!img) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("img", img);

    try {
      const res = await axios.post(`${backendUrl}api/img/upload`, formData);
      if (res.data.success) {
        // console.log("Your URL is", res.data.imgData.img);
        setUrl(res.data.imgData.img); // Update the URL with the response data
        setProgress(false);
        toast.success("URL Generated");
      } else {
        console.error("URL generation failed", res.data.error);
        toast.error("URL generation failed", res.data.error);
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
      toast.error("Error uploading image");
    }
  };

  const copyBtn = () => {
    if (url === "Get Url") {
      alert("Please upload an image and generate the URL first.");
    } else {
      copy(url);
      toast.success("URL copied to clipboard");
      // alert("URL copied to clipboard!");
    }
  };

  return (
    <div
      className={`mt-10 flex flex-col gap-5 items-center justify-center ${
        progress ? "cursor-progress" : "cursor-default"
      }`}
    >
      {/* Display Generated URL */}
      <div className="w-1/2 flex items-center gap-10 justify-between mt-3 border-2 border-black px-4 py-2 rounded-lg">
        <input
          type="text"
          className="w-full cursor-grabbing outline-none overflow-x-auto text-gray-400"
          value={url}
          readOnly
        />
        <div className="bg-green-400 border-2 border-black px-8 rounded-xl cursor-pointer py-2">
          <button onClick={copyBtn}>
            Copy
          </button>
        </div>
      </div>

      {/* Image Upload Form */}
      <form
        className="flex flex-col gap-5 mt-5 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setImg(file);
            }
          }}
          required
        />
        {errors.img && <p className="text-red-500">Image is required</p>}

        <div
          className={`bg-blue-500 hover:bg-blue-800 hover:scale-125 transition-all duration-500 mt-5 text-white px-4 py-2 text-center rounded-full w-[5rem] ${
            progress ? "cursor-progress hover:scale-100 hover:bg-blue-500" : "cursor-pointer"
          }`}
        >
          <button onClick={() => setProgress(true)} className={`${
            progress ? "cursor-progress hover:scale-100 hover:bg-blue-500" : "cursor-pointer"
          }`} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImgTool;
