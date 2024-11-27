import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import copy from "copy-to-clipboard";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function AllImages() {
  const [listImages, setListImages] = useState([]);

  // Fetch Images
  const fetchList = async () => {
    try {
      const res = await axios.get(`${backendUrl}api/img/all`);
      if (res.data.success) {
        setListImages(res.data.images);
      } else {
        console.error("Failed to fetch images:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Delete Image
  const deleteImage = async (id) => {
    try {
      const res = await axios.post(`${backendUrl}api/img/remove`, { id }); // Send ID in POST request
      if (res.data.success) {
        // alert("Image deleted successfully");
        setListImages((prev) => prev.filter((img) => img._id !== id)); // Update state
        toast.success("Image deleted successfully");
      } else {
        console.error("Failed to delete image:", res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error);
      console.error("Error deleting image:", error);
    }
  };

  // Copy Link
  const copyLink = (url) => {
    copy(url);
    toast.success("URL Copied");
  };

  useEffect(() => {
    fetchList(); // Fetch images only on component mount
    console.log(listImages);
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-center">All Images</h2>
      <div className="mt-5 flex flex-wrap gap-6 justify-center">
        {listImages.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 border rounded-lg p-4 shadow-md"
          >
            <img
              className="rounded-xl hover:scale-110 transition-all duration-500 h-[10rem] w-auto"
              src={image.img}
              alt="Uploaded"
            />
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => copyLink(image.img)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Copy Link
              </button>
              <button
                onClick={() => deleteImage(image._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FiDelete className="mr-2" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllImages;
