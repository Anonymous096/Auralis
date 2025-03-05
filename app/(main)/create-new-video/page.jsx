"use client";
import React, { useState } from "react";
import Topic from "./_components/Topic";
import VideoStyle from "./_components/VideoStyle";
import Voice from "./_components/Voice";

function CreateNewVideo() {
  const [formData, setFormData] = useState();
  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
    console.log(formData);
  };
  return (
    <div>
      <h2 className="text-3xl">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
        <div className="col-span-2 p-7 border rounded-xl h-[72vh] overflow-auto">
          {/* Project title and script */}
          <Topic onHandleInputChange={onHandleInputChange} />

          {/* styles */}
          <VideoStyle onHandleInputChange={onHandleInputChange} />

          {/* audio */}
          <Voice onHandleInputChange={onHandleInputChange} />

          {/* captions */}
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default CreateNewVideo;
