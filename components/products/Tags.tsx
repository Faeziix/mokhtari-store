import React from "react";
import Tag from "./Tag";

function Tags({ tags }) {
  return (
    <div className="flex gap-1">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  );
}

export default Tags;
