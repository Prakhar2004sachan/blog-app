import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const JoditEditore = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  console.log(content);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      onChange={(content) => setContent(content)}
    />
  );
};

export default JoditEditore;
