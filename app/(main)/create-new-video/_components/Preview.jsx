import Image from "next/image";
import React from "react";
import { options } from "./VideoStyle";

function Preview({ formData }) {
  const selectVideoStyle =
    formData && options.find((item) => item?.name == formData?.videoStyle);
  return (
    <div className="relative">
      <h2 className="mb-3 text-2xl">Preview</h2>
      <Image
        src={selectVideoStyle?.image}
        alt={selectVideoStyle?.name}
        width={1000}
        height={300}
        className="w-full h-[70vh] object-cover rounded-xl"
      />
      <h2
        className={`absolute bottom-7 text-center w-full ${formData?.caption?.style}`}
      >
        {formData?.caption?.name}
      </h2>
    </div>
  );
}

export default Preview;
