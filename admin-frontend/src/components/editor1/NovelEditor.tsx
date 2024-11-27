import React from "react";
import { Editor } from "novel";
import { type Editor as TipTapEditor } from "@tiptap/core";
// import { Card, CardContent } from "@/components/ui/card";

type NovelEditorProps = {
  setContent: any;
//   title: string;
//   content: string | undefined;
};
export default function NovelEditor({
  setContent,
//   content,
//   title,
}: NovelEditorProps) {
  return (
    <div className="w-full">
      <h2 className="pt-4 pb-3 px-4">Start Writing The Post</h2>
      <Editor
        defaultValue={{
          type: "doc",
          content: [],
          // content: content as JSONContent[] | undefined,
        }}
        onDebouncedUpdate={(editor?: TipTapEditor) => {
          setContent(editor?.getHTML());
        }}
        disableLocalStorage={true}
        className="rounded-md border-2 border-black shadow-lg"
      />
    </div>
  );
}
