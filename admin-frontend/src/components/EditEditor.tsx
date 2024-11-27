import React from "react";
import Editor from "../components/editor/advanced-editor";

function EditEditor({ setValue }: { setValue: (value: string) => void }) {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <div className="flex flex-col p-6 border w-full gap-6 rounded-md bg-card">
        <div className="flex w-full justify-between">
          <h1 className="text-4xl font-semibold">Start Writing</h1>
        </div>
        <Editor
          onChange={(newValue) => setValue(newValue)}
          // Additional props if required
        />
      </div>
    </div>
  );
}

export default EditEditor;
