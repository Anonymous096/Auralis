"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon, SparkleIcon } from "lucide-react";
import axios from "axios";

const suggestions = [
  "Horrow Story",
  "Kids Story",
  "Love Story",
  "Movie Story",
  "AI innovations",
  "Space Mystery",
  "Mythological tales",
  "Tech Breakthroughs",
  "True Crime Stories",
  "Fantasy Adventure",
  "Science Experiments",
  "Historical Events",
  "Motivational Stories",
  "Business Strategies",
  "Educational Videos",
];

function Topic({ onHandleInputChange }) {
  const [selectedTopic, setSelectedTopic] = useState();
  const [script, setScript] = useState();
  const [selectedScriptIndex, setSelectedScriptIndex] = useState();
  const [loading, setLoading] = useState(false);
  const GenerateScript = async () => {
    setLoading(true);
    setSelectedScriptIndex(null);
    try {
      const result = await axios.post("/api/generate-script", {
        topic: selectedTopic,
      });
      console.log(result.data);
      setScript(result.data?.script);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <h2 className="mb-1">Project title</h2>
      <Input
        placeholder="Enter project title"
        onChange={(event) => onHandleInputChange("title", event?.target.value)}
      />

      <div className="mt-5">
        <h2>Video Topic</h2>
        <p className="text-sm text-gray-600">Select topic for your video</p>

        <Tabs defaultValue="account" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestions">
            <div className="">
              {suggestions.map((suggestion, index) => (
                <Button
                  variant="outline"
                  key={index}
                  className={`m-1 ${suggestion == selectedTopic && "bg-secondary"}`}
                  onClick={() => {
                    setSelectedTopic(suggestion);
                    onHandleInputChange("topic", suggestion);
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="your_topic">
            <div>
              <h2>Enter custom topic</h2>
              <Textarea
                placeholder="Enter your prompt"
                onChange={(event) =>
                  onHandleInputChange("topic", event.target.value)
                }
              />
            </div>
          </TabsContent>
        </Tabs>

        {script?.length > 0 && (
          <div className="mt-3">
            <h2>Select the script</h2>
            <div className="grid grid-cols-2 gap-5 mt-1">
              {script?.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded-lg cursor-pointer ${selectedScriptIndex == index && "border-white bg-secondary"}`}
                  onClick={() => setSelectedScriptIndex(index)}
                >
                  <h2 className="line-clamp-4 text-sm text-gray-300">
                    {item.content}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Button
        className="mt-3"
        size="sm"
        onClick={GenerateScript}
        disabled={loading}
      >
        {loading ? <LoaderIcon className="animate-spin" /> : <SparkleIcon />}{" "}
        Generate Script
      </Button>
    </div>
  );
}

export default Topic;
