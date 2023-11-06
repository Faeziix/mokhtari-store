import React from "react";

type TagsProps = {
  text: string;
};

function Tag({ text }: TagsProps) {
  return (
    <div className="bg-[#FDEBD0] text-[#D08007] text-xxs px-1 rounded-sm py-1">
      {text}
    </div>
  );
}

export default Tag;
