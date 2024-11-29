import React from "react";
import TagAtom from "./tags"

type TagsSectionProps = {
  tags: string[];
  date: string;
};

const TagsSection: React.FC<TagsSectionProps> = ({ tags, date }) => (
  <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
    <div className="flex gap-2 items-center">
      {tags.map((tag, index) => (
        <TagAtom key={`tag-${index}`} text={tag} />
      ))}
    </div>
    <p className="text-md text-gray-400">{new Date(date).toDateString()}</p>
  </div>
);

export default TagsSection;
