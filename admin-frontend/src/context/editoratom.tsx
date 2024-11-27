import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { Config } from "jodit/esm/config";

type EditorAtomProps = {
  value: string;
  onChange: (value: string) => void;
  config?: object;
};


const EditorAtom: React.FC<EditorAtomProps> = ({ value, onChange, config }) => {
  const editor = useRef(null);


  return (
    <div className="w-full">
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onChange={(content) => onChange(content)}
      />
    </div>
  );
};

export default EditorAtom;
