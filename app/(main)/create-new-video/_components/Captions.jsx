import React, { useState } from "react";

const options = [
  {
    name: "Youtuber",
    style: "text-yellow-400 text-3xl font-extrabold uppercase",
  },
  {
    name: "Supereme",
    style: "text-white text-3xl font-bold italic drop-shadow-lg",
  },
  {
    name: "Neon",
    style: "text-green-500 text-3xl font-extrabold uppercase",
  },
  {
    name: "Glitch",
    style: "text-pink-500 text-3xl font-extrabold uppercase",
  },
  {
    name: "Retro",
    style: "text-blue-500 text-3xl font-extrabold uppercase",
  },
  {
    name: "Gamer",
    style: "text-red-500 text-3xl font-extrabold uppercase",
  },
];

function Captions({ onHandleInputChange }) {
  const [selectedCaptionStyle, setSelectedCaptionStyle] = useState();
  return (
    <div className="mt-5">
      <h2>Caption Styles</h2>
      <p className="text-sm text-gray-400">
        Select caption styles for the video
      </p>

      <div className="flex flex-wrap gap-4 mt-2">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedCaptionStyle(option.name);
              onHandleInputChange("caption", option);
            }}
            className={`p-2 hover:border bg-slate-900 border-gray-300 cursor-pointer rounded-lg ${selectedCaptionStyle == option.name && "border-white"}`}
          >
            <h2 className={option.style}>{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Captions;
