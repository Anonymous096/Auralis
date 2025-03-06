import Image from "next/image";
import React, { useState } from "react";

export const options = [
  {
    name: "Realistic",
    image: "/realism.jpeg",
  },
  {
    name: "Cinematic",
    image: "/Cinematic.jpeg",
  },
  {
    name: "Cyberpunk",
    image: "/cyberpunk.jpeg",
  },
  {
    name: "GTA",
    image: "/GTA.jpeg",
  },
  {
    name: "Cartoon",
    image: "/Shinnosuke.jpeg",
  },
  {
    name: "Watercolor",
    image: "/watercolor.jpeg",
  },
  {
    name: "Anime",
    image: "/anime.jpeg",
  },
];

function VideoStyle({ onHandleInputChange }) {
  const [selectedStyle, setSelectedStyle] = useState();
  return (
    <div className="mt-5">
      <h2>Video Style</h2>
      <p className="text-sm text-gray-400 mb-1">Select video style</p>

      {/* Mapping the images */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mt-1">
        {options.map((option, index) => (
          <div
            key={index}
            className="relative"
            onClick={() => {
              setSelectedStyle(option.name);
              onHandleInputChange("videoStyle", option.name);
            }}
          >
            <Image
              src={option.image}
              alt={option.name}
              width={500}
              height={120}
              className={`object-cover rounded-lg p-1 h-[90px] lg:h-[130px] xl:h-[180px] hover:border border-gray-300 cursor-pointer ${option.name == selectedStyle && "border"}`}
            />
            <h2 className="absolute bottom-1 text-center w-full">
              {option.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoStyle;
