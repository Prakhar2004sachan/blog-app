import { createImageUpload } from "novel/plugins";
import { toast } from "sonner";
import { backendUrl } from "../../App";

const onUpload = (file: File) => {
  const formData = new FormData();
  formData.append("img", file); // Append the file to formData (key should match the backend field name)

  const promise = fetch(`${backendUrl}api/img/upload`, {
    method: "POST",
    body: formData, // Send the form data with the image
  });

  return new Promise((resolve) => {
    toast
      .promise(
        promise.then(async (res) => {
          if (res.status === 200) {
            const { img } = await res.json(); // Assuming the response contains the URL under `img`

            console.log("Cloudinary Image URL:", img); // Log the Cloudinary URL in the console

            // Preload the image
            const image = new Image();
            image.src = img;
            image.onload = () => {
              resolve(img); // Return the image URL once it's loaded
            };
          } else if (res.status === 401) {
            throw new Error(
              "Authorization error. Please check your credentials."
            );
          } else {
            throw new Error("Error uploading image. Please try again.");
          }
        }),
        {
          loading: "Uploading image...",
          success: "Image uploaded successfully.",
          error: (e) => e.message,
        }
      )
  });
};

export const uploadFn = createImageUpload({
  onUpload,
  validateFn: (file) => {
    if (!file.type.includes("image/")) {
      toast.error("File type not supported.");
      return false;
    } else if (file.size / 1024 / 1024 > 20) {
      toast.error("File size too big (max 20MB).");
      return false;
    }
    return true;
  },
});
