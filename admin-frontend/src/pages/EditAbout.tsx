import React, { useRef, useState } from "react";
import parse from "html-react-parser";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import EditEditor from "../components/EditEditor";
import { backendUrl } from "../App";
import JoditEditor from "jodit-react";
// import { JSONContent } from "novel";
// import { convertJSONToHTML } from "../components/util/jsonToHtml"; // Example utility function

type Input = {
  heading: string;
};

function EditAbout() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  // const [value, setValue] = useState<string | undefined>(undefined);
  // console.log(value);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const formData = { ...data, content: content };
    console.log(formData);
    // Handle submission
   try {
     const formData = {
       ...data,
       content: content,
     };

     // Make API call
     const response = await axios.post(backendUrl+"api/about/update-about", formData);

     if (response.data.success) {
       console.log("About Page Updated", response.data);
     } else {
       console.error("Update Failed", response.data.message);
     }
   } catch (err) {
     console.error("Error updating About Page", err);
   }
  };

  return (
    <div className="mt-10 w-full">
      <h1 className="text-center font-bold text-3xl sm:text-5xl">
        Edit About Page
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10 gap-10 items-center justify-center"
      >
        <input
          placeholder="Enter Heading for about page"
          className="w-full h-[3rem] border-2 border-black px-4 py-2 rounded-lg"
          {...register("heading", { required: "Heading is required" })}
        />
        {errors.heading && (
          <p className="text-red-500">{errors.heading.message}</p>
        )}
        <div className="w-full">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(content) => setContent(content)}
          />
        </div>
        <div className="bg-black text-white px-4 py-2 text-center rounded-full w-[5rem]">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditAbout;
