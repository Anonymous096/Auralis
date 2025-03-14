"use client";
import React, { useState } from "react";
import Topic from "./_components/Topic";
import VideoStyle from "./_components/VideoStyle";
import Voice from "./_components/Voice";
import Captions from "./_components/Captions";
import { Button } from "@/components/ui/button";
import { WandSparkles } from "lucide-react";
import Preview from "./_components/Preview";
import { GenerateVideoData } from "@/inngest/functions";

function CreateNewVideo() {
  const [formData, setFormData] = useState();
  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
    console.log(formData);
  };

  const GenerateVideoData = async () => {
    if (
      formData?.topic ||
      !formData?.script ||
      !formData?.videoStyle ||
      !formData?.voice ||
      !formData?.caption
    ) {
      console.log("Please fill all the fields");
    }

    const result = await axios.post("/api/generate-video-data", {
      ...formData,
    });
    console.log(result);
  };
  return (
    <div>
      <h2 className="text-3xl">Create New Video</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-7">
        <div className="col-span-2 p-7 border rounded-xl h-[72vh] overflow-auto">
          {/* Project title and script */}
          <Topic onHandleInputChange={onHandleInputChange} />

          {/* styles */}
          <VideoStyle onHandleInputChange={onHandleInputChange} />

          {/* audio */}
          <Voice onHandleInputChange={onHandleInputChange} />

          {/* captions */}
          <Captions onHandleInputChange={onHandleInputChange} />
          <Button className="w-full mt-5" onClick={GenerateVideoData}>
            <WandSparkles />
            Generate Video
          </Button>
        </div>
        <div className="col-span-1">
          <Preview formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewVideo;
