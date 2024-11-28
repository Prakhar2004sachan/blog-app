import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import axios from "axios";
import { backendUrl } from "../App";
import { useNavigate, useParams } from "react-router-dom";
// import ButtonAtom from "../context/buttonatom";
import NavigationButtons from "../context/navigationbuttons";
import { toast } from "sonner";

type Input = {
  heading: string;
  shortDescription: string;
  tags: string;
  links: string;
  img: File | null;
};

function EditPost() {
  const { postId } = useParams();
  console.log(postId);
  const editor = useRef(null);
  const [content, setContent] = useState(""); // Content for JoditEditor
  const [img, setImg] = useState<File | null>(null); // For uploaded image
  const [loading, setLoading] = useState(true); // For loading state
  const [postData, setPostData] = useState<any>([]); // Store fetched post data
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Input>();

  const removePost = async (postId: string) => {
    try {
      const res = await axios.post(`${backendUrl}api/blog/remove`, { postId });
      if (res.data.success) {
        toast.success("Post Deleted");
        navigate("/all"); // Navigate back to the post list
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the post.");
      console.error("Error deleting post:", error);
    }
  };

  // Fetch Post Data by ID
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.post(`${backendUrl}api/blog/single-post`, {
          postId,
        });
        if (response.data.success) {
          const data = response.data.postData;
          setPostData(data); // Save fetched post data
          setContent(data.content); // Set content for editor
          setLoading(false);

          // Pre-fill form fields
          setValue("heading", data.heading);
          setValue("shortDescription", data.shortDescription);
          setValue("tags", data.tags.join(", "));
          setValue("links", data.links.join(", "));
        } else {
          alert("Error fetching post data");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        alert("Failed to load post data.");
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, setValue]);

  // Handle Submit
  const onSubmit: SubmitHandler<Input> = async (data) => {
    if (!postId) {
      alert("postId is missing!");
      return;
    }
    if (!img && !postData?.mainImg) {
      alert("Please upload an image or keep the existing one.");
      return;
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("postId", postId);
    formData.append("heading", data.heading);
    formData.append("shortDescription", data.shortDescription);
    formData.append("content", content);
    formData.append("tags", data.tags);
    formData.append("links", data.links);
    if (img) formData.append("mainImg", img); // Include new image only if uploaded

    try {
      setLoading(true); // Set loading state to true when submitting
      const response = await axios.post(
        `${backendUrl}api/blog/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false); // Set loading to false after submission

      if (response.data.success) {
        alert("Post updated successfully!");
      } else {
        alert("Error updating post.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error updating post:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10 w-full">
      <NavigationButtons
        navigateBack={() => navigate(-1)}
        navigateEdit={() => navigate(`/all`)}
        deletePost={() => removePost(postId)} // Pass function reference correctly
      />
      <h1 className="mt-10 text-center font-bold text-3xl sm:text-5xl">Edit Post</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10 gap-10 items-center justify-center"
      >
        <input
          placeholder="Enter Heading for the blog post"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("heading", { required: "Heading is required" })}
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
        />
        {errors.shortDescription && (
          <p className="text-red-500">{errors.shortDescription.message}</p>
        )}

        <input
          placeholder="Enter Tags (comma separated)"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("tags", { required: "Tags are required" })}
        />
        {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}

        <input
          placeholder="Enter Links (comma separated)"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("links", { required: "Links are required" })}
        />
        {errors.links && <p className="text-red-500">{errors.links.message}</p>}

        <div className="flex items-center gap-10">
          <p>Upload Image:</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImg(file);
              }
            }}
          />
        </div>

        <div className="w-full">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>

        <div className="bg-black text-white px-4 py-2 text-center rounded-full w-[5rem]">
          <button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
